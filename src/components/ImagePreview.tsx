
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";

interface ImagePreviewProps {
  imageUrl: string | null;
  theme: 1 | 2 | 3;
  className?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, theme, className }) => {
  const themeClasses = {
    1: "theme1-card",
    2: "theme2-card",
    3: "theme3-card"
  };
  
  if (!imageUrl) {
    return (
      <div className={`image-preview ${themeClasses[theme]} flex items-center justify-center p-6 ${className}`}>
        <p className="text-center text-sm opacity-70">Image preview will appear here</p>
      </div>
    );
  }

  return (
    <div className={`image-preview ${themeClasses[theme]} p-2 ${className} animate-fade-in`}>
      <div className="h-full flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt="T-shirt Preview" 
          className="max-h-[400px] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ImagePreview;
