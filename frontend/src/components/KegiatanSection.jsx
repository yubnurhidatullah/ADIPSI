import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewsCard from './NewsCard';
import { fetchActivities } from '@/lib/wordpress';

const KegiatanSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const maxIndex = Math.max(0, Math.max(0, posts.length - itemsPerPage));

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchActivities({ perPage: 9 });
        if (!isMounted) return;
        setPosts(data);
      } catch (e) {
        if (!isMounted) return;
        setError('Gagal memuat kegiatan.');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const visibleActivities = posts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="kegiatan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            KEGIATAN <span className="text-blue-600">ADIPSI</span>
          </h2>
          <div className="flex space-x-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="p-3 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {error && (
          <div className="text-red-600 mb-4">{error}</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: itemsPerPage }).map((_, idx) => (
                <div key={idx} className="animate-pulse h-80 bg-gray-200 rounded-xl" />
              ))
            : visibleActivities.map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default KegiatanSection;
