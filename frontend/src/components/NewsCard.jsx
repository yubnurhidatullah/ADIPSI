import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { getPostThumbnailUrl } from "@/lib/wordpress";

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch (_e) {
    return "";
  }
}

const NewsCard = ({ post }) => {
  const imageUrl = getPostThumbnailUrl(post._raw);
  return (
    <Link to={`#/kegiatan/${post.slug}`} className="block">
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Terbaru
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
            <Calendar size={16} />
            <span>{formatDate(post.date)}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
