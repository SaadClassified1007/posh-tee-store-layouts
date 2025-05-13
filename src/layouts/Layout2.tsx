
import React from "react";
import UploadArea from "../components/UploadArea";
import ImagePreview from "../components/ImagePreview";
import CustomizationForm from "../components/CustomizationForm";

interface Layout2Props {
  imageUrl: string | null;
  onImageUpload: (file: File, imageUrl: string) => void;
}

const Layout2: React.FC<Layout2Props> = ({ imageUrl, onImageUpload }) => {
  return (
    <div className="theme2 min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-theme2-accent to-theme2-secondary bg-clip-text text-transparent">
            POD T-shirt Store
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">HEIGHT</h2>
            <div className="theme2-card p-4 mb-6">
              <input
                type="text"
                className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-theme2-text w-full focus:outline-none focus:ring-2 focus:ring-theme2-accent/50"
                placeholder="Enter height"
              />
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-4">WEIGHT</h2>
            <div className="theme2-card p-4 mb-6">
              <input
                type="text"
                className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-theme2-text w-full focus:outline-none focus:ring-2 focus:ring-theme2-accent/50"
                placeholder="Enter weight"
              />
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-4">BODY TYPE</h2>
            <div className="theme2-card p-4">
              <input
                type="text"
                className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-theme2-text w-full focus:outline-none focus:ring-2 focus:ring-theme2-accent/50"
                placeholder="Enter body type"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div className="h-full flex items-center justify-center">
                <UploadArea 
                  onImageUpload={onImageUpload} 
                  theme={2} 
                  className="w-full h-full"
                />
              </div>
              
              <div className="h-full flex items-center justify-center">
                <ImagePreview 
                  imageUrl={imageUrl} 
                  theme={2} 
                  className="w-full h-full"
                />
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="theme2-card p-6 max-w-2xl w-full">
                <p className="text-center text-sm mb-4">
                  Our AI will generate the perfect T-shirt based on your measurements
                </p>
                <div className="flex justify-center gap-4">
                  <button className="theme2-button">
                    Save Design
                  </button>
                  <button className="theme2-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center gap-2 blue-glass rounded-full px-3 py-1.5">
          <span className="text-xs text-white/70">Press</span>
          <span className="text-xs bg-theme2-accent/20 text-theme2-accent px-2 py-0.5 rounded">Alt + Q</span>
          <span className="text-xs text-white/70">to switch layouts</span>
        </div>
      </div>
    </div>
  );
};

export default Layout2;
