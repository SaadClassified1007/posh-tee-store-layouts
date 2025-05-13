
import React from "react";
import UploadArea from "../components/UploadArea";
import ImagePreview from "../components/ImagePreview";
import CustomizationForm from "../components/CustomizationForm";
import TextInput from "../components/TextInput";
import { useIsMobile } from "../hooks/use-mobile";
import { Menu } from "lucide-react";

interface Layout2Props {
  imageUrl: string | null;
  onImageUpload: (file: File, imageUrl: string) => void;
  onLayoutChange: () => void;
}

const Layout2: React.FC<Layout2Props> = ({ imageUrl, onImageUpload, onLayoutChange }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="theme2 min-h-screen w-full py-6 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-theme2-accent to-theme2-secondary bg-clip-text text-transparent font-montserrat tracking-tight">
            POD T-shirt Store
          </h1>
          {isMobile && (
            <button 
              onClick={onLayoutChange}
              className="p-2 rounded-full bg-theme2-accent/20 text-theme2-accent"
              aria-label="Change layout"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Left section - Form Fields */}
          <div className="lg:col-span-4">
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3 font-montserrat tracking-wider">HEIGHT</h2>
                <div className="theme2-card p-4">
                  <input
                    type="text"
                    className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-theme2-text w-full focus:outline-none focus:ring-2 focus:ring-theme2-accent/50"
                    placeholder="Enter height"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-3 font-montserrat tracking-wider">WEIGHT</h2>
                <div className="theme2-card p-4">
                  <input
                    type="text"
                    className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-theme2-text w-full focus:outline-none focus:ring-2 focus:ring-theme2-accent/50"
                    placeholder="Enter weight"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-3 font-montserrat tracking-wider">BODY TYPE</h2>
                <div className="theme2-card p-4">
                  <input
                    type="text"
                    className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-theme2-text w-full focus:outline-none focus:ring-2 focus:ring-theme2-accent/50"
                    placeholder="Enter body type"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right section - Upload and Preview */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3 text-center font-montserrat tracking-wider">UPLOAD</h2>
                <UploadArea 
                  onImageUpload={onImageUpload} 
                  theme={2} 
                  className="w-full aspect-square"
                />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-3 text-center font-montserrat tracking-wider">PREVIEW</h2>
                <ImagePreview 
                  imageUrl={imageUrl} 
                  theme={2} 
                  className="w-full aspect-[3/4]"
                />
              </div>
            </div>
            
            <div className="mt-5">
              <h2 className="text-xl font-semibold text-white mb-3 text-center font-montserrat tracking-wider">CUSTOMIZE</h2>
              <TextInput theme={2} className="w-full max-h-44" />
            </div>
            
            <div className="mt-5 flex justify-center">
              <button className="theme2-button">
                Save Design
              </button>
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
