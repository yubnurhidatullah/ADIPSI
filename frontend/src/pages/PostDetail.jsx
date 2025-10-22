import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostBySlug, getPostThumbnailUrl } from "@/lib/wordpress";

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchPostBySlug(slug);
        if (!isMounted) return;
        setPost(data);
      } catch (_e) {
        if (!isMounted) return;
        setError("Gagal memuat detail kegiatan.");
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return <div className="max-w-4xl mx-auto py-24 px-4">Memuat…</div>;
  }
  if (error || !post) {
    return <div className="max-w-4xl mx-auto py-24 px-4 text-red-600">{error || "Kegiatan tidak ditemukan"}</div>;
  }

  const imageUrl = getPostThumbnailUrl(post._raw);

  return (
    <article className="max-w-4xl mx-auto py-24 px-4">
      <nav className="text-sm mb-6 text-gray-500">
        <Link to="/" className="hover:underline">Beranda</Link>
        <span className="mx-2">/</span>
        <Link to="/" className="hover:underline">Kegiatan</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {imageUrl && (
        <img src={imageUrl} alt={post.title} className="w-full max-h-[480px] object-cover rounded-xl mb-6" />
      )}
      <div className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default PostDetail;
