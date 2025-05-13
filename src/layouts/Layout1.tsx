
import React from "react";
import UploadArea from "../components/UploadArea";
import ImagePreview from "../components/ImagePreview";
import CustomizationForm from "../components/CustomizationForm";

interface Layout1Props {
  imageUrl: string | null;
  onImageUpload: (file: File, imageUrl: string) => void;
}

const Layout1: React.FC<Layout1Props> = ({ imageUrl, onImageUpload }) => {
  return (
    <div className="theme1 min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-theme1-accent to-blue-400 bg-clip-text text-transparent">
            POD T-shirt Store
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left section - Upload and Customization */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <UploadArea 
                onImageUpload={onImageUpload} 
                theme={1} 
                className="w-full aspect-square mb-6"
              />
            </div>
            
            <div className="flex flex-col">
              <CustomizationForm theme={1} className="w-full h-full" />
            </div>
          </div>
          
          {/* Right section - Preview */}
          <div className="md:col-span-4">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold text-theme1-text mb-4 text-center">Preview</h2>
              <ImagePreview 
                imageUrl={imageUrl} 
                theme={1}
                className="w-full h-auto aspect-[3/4]"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="theme1-card p-6 max-w-2xl w-full">
            <p className="text-center text-sm mb-4">
              Customize your perfect T-shirt with our advanced design tool
            </p>
            <div className="flex justify-center gap-4">
              <button className="theme1-button hover:animate-pulse-glow">
                Save Design
              </button>
              <button className="theme1-button hover:animate-pulse-glow">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
          <span className="text-xs text-white/70">Press</span>
          <span className="text-xs bg-theme1-accent/20 text-theme1-accent px-2 py-0.5 rounded">Alt + Q</span>
          <span className="text-xs text-white/70">to switch layouts</span>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
