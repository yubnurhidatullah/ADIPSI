// Lightweight WordPress REST client + helpers
// - Handles custom post type `kegiatan` if present
// - Falls back to regular `posts` with category slug `kegiatan`
// - Extracts robust thumbnail URL from embedded media or post content

import axios from "axios";

const DEFAULT_SITE_URL = "https://adipsi.id"; // can be overridden by env
const SITE_URL = process.env.REACT_APP_WP_BASE_URL || DEFAULT_SITE_URL;
const API_BASE = `${SITE_URL.replace(/\/$/, "")}/wp-json/wp/v2`;

function toParams(params) {
  const query = new URLSearchParams();
  Object.entries(params || {}).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    query.set(key, String(value));
  });
  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

async function wpGet(path, params) {
  const url = `${API_BASE}/${path.replace(/^\//, "")}${toParams(params)}`;
  const response = await axios.get(url, {
    headers: { Accept: "application/json" },
  });
  return response.data;
}

export function getEmbeddedFeaturedMedia(post) {
  const embedded = post?._embedded;
  if (!embedded) return undefined;
  const media = embedded["wp:featuredmedia"]?.[0];
  return media;
}

export function getPostThumbnailUrl(post) {
  const media = getEmbeddedFeaturedMedia(post);
  const candidates = [];
  if (media?.media_details?.sizes) {
    const sizes = media.media_details.sizes;
    const preferredOrder = [
      "medium_large",
      "large",
      "full",
      "medium",
      "thumbnail",
    ];
    for (const key of preferredOrder) {
      if (sizes[key]?.source_url) candidates.push(sizes[key].source_url);
    }
  }
  if (media?.source_url) candidates.push(media.source_url);

  if (post?.content?.rendered) {
    const match = post.content.rendered.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (match?.[1]) candidates.push(match[1]);
  }

  return (
    candidates.find(Boolean) ||
    "https://placehold.co/800x500?text=No+Image"
  );
}

function decodeHtml(htmlString) {
  if (typeof window === "undefined") return htmlString;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = htmlString || "";
  return textarea.value;
}

export function normalizePost(post) {
  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    title: decodeHtml(post?.title?.rendered ?? ""),
    excerpt: post?.excerpt?.rendered ?? "",
    content: post?.content?.rendered ?? "",
    _raw: post,
  };
}

async function tryGetKegiatan(params) {
  try {
    const data = await wpGet("kegiatan", params);
    if (Array.isArray(data)) return data;
  } catch (err) {
    if (err?.response?.status !== 404) {
      // pass
    }
  }
  return undefined;
}

async function getCategoryIdBySlug(slug) {
  try {
    const cats = await wpGet("categories", { slug });
    return cats?.[0]?.id;
  } catch (_e) {
    return undefined;
  }
}

export async function fetchActivities({ perPage = 6, page = 1 } = {}) {
  const params = { per_page: perPage, page, _embed: 1, orderby: "date" };
  const kegiatan = await tryGetKegiatan(params);
  if (kegiatan) return kegiatan.map(normalizePost);

  const catId = await getCategoryIdBySlug("kegiatan");
  const postsParams = { ...params };
  if (catId) postsParams.categories = catId;

  const posts = await wpGet("posts", postsParams);
  return posts.map(normalizePost);
}

export async function fetchPostBySlug(slug) {
  try {
    const items = await wpGet("kegiatan", { slug, _embed: 1 });
    if (Array.isArray(items) && items.length > 0) return normalizePost(items[0]);
  } catch (err) {
    if (err?.response?.status !== 404) {
      // continue
    }
  }

  const posts = await wpGet("posts", { slug, _embed: 1 });
  if (Array.isArray(posts) && posts.length > 0) return normalizePost(posts[0]);
  return undefined;
}
