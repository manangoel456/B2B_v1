"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 sticky top-28">
      {/* Main Image */}
      <div className="aspect-square bg-gradient-to-br from-white to-beige rounded-3xl overflow-hidden relative">
        <Image 
          src={mainImage} 
          alt={productName} 
          fill
          className="object-cover mix-blend-multiply opacity-95 transition-all duration-500"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(img)}
              className={cn(
                "relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white to-beige transition-all duration-300",
                mainImage === img 
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-cream" 
                  : "opacity-70 hover:opacity-100 hover:ring-2 hover:ring-gold/30 hover:ring-offset-2 hover:ring-offset-cream"
              )}
            >
              <Image 
                src={img} 
                alt={`${productName} thumbnail ${idx + 1}`} 
                fill
                className="object-cover mix-blend-multiply"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
