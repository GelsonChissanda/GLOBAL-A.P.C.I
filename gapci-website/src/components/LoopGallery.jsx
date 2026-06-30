import { useEffect, useState } from "react";

export default function LoopGallery({ items, title, subtitle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [items.length]);

  const currentItem = items[activeIndex];

  return (
    <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_12px_45px_rgba(249,115,22,0.10)]">
      <div className="relative h-72 md:h-80">
        {items.map((item, index) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            className={`absolute inset-0 h-full w-full object-contain bg-gray-100 transition-all duration-1000 ${
              index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-900/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <p className="text-[11px] uppercase tracking-[0.35em] text-orange-300">{subtitle}</p>
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-200">{currentItem?.caption}</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white/95 px-5 py-3">
        <div className="flex gap-2">
          {items.map((_, index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === activeIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">Loop • {activeIndex + 1}/{items.length}</span>
      </div>
    </div>
  );
}
