
import React from "react";
import UploadArea from "../components/UploadArea";
import ImagePreview from "../components/ImagePreview";
import CustomizationForm from "../components/CustomizationForm";
import TextInput from "../components/TextInput";
import { useIsMobile } from "../hooks/use-mobile";
import { Menu } from "lucide-react";

interface Layout1Props {
  imageUrl: string | null;
  onImageUpload: (file: File, imageUrl: string) => void;
  onLayoutChange: () => void;
}

const Layout1: React.FC<Layout1Props> = ({ imageUrl, onImageUpload, onLayoutChange }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="theme1 min-h-screen w-full py-6 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-theme1-accent to-blue-400 bg-clip-text text-transparent font-montserrat tracking-tight">
            POD T-shirt Store
          </h1>
          {isMobile && (
            <button 
              onClick={onLayoutChange}
              className="p-2 rounded-full bg-theme1-accent/20 text-theme1-accent"
              aria-label="Change layout"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Left section - Upload and Customization */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Upload Area */}
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-theme1-text mb-3 text-center font-montserrat">UPLOAD</h2>
                <UploadArea 
                  onImageUpload={onImageUpload} 
                  theme={1} 
                  className="w-full aspect-square"
                />
              </div>
              
              {/* Customization Form */}
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-theme1-text mb-3 text-center font-montserrat">CUSTOMIZE</h2>
                <CustomizationForm theme={1} className="w-full h-full" />
              </div>
            </div>
            
            {/* Text Input Area */}
            <div className="mt-4 md:mt-6">
              <TextInput theme={1} className="w-full" />
            </div>
          </div>
          
          {/* Right section - Preview */}
          <div className="md:col-span-4">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold text-theme1-text mb-3 text-center font-montserrat">PREVIEW</h2>
              <ImagePreview 
                imageUrl={imageUrl} 
                theme={1}
                className="w-full aspect-[3/4]"
              />
              
              <div className="mt-4 flex justify-center">
                <button className="theme1-button hover:animate-pulse-glow">
                  Save Design
                </button>
              </div>
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
