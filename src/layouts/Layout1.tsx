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
    <div 
      className="theme1 min-h-screen w-full py-6 px-4 sm:px-6 lg:px-8 flex flex-col relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1662050533644-29955ae125ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better contrast with white components */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-cormorant tracking-tight">
            POD T-shirt Store
          </h1>
          {isMobile && (
            <button 
              onClick={onLayoutChange}
              className="p-2 rounded-full bg-white/20 text-white"
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
                <h2 className="text-xl font-semibold text-white mb-3 text-center font-cormorant tracking-wider">UPLOAD</h2>
                <UploadArea 
                  onImageUpload={onImageUpload} 
                  theme={1} 
                  className="w-full aspect-square bg-white/80 border border-gray-300 rounded-lg shadow-lg"
                />
              </div>
              
              {/* Customization Form */}
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-white mb-3 text-center font-cormorant tracking-wider">CUSTOMIZE</h2>
                <CustomizationForm 
                  theme={1} 
                  className="w-full h-full bg-white/80 border border-gray-300 rounded-lg shadow-lg p-4"
                />
              </div>
            </div>
            
            {/* Text Input Area */}
            <div className="mt-4 md:mt-6">
              <TextInput 
                theme={1} 
                className="w-full bg-white/80 border border-gray-300 rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Right section - Preview */}
          <div className="md:col-span-4">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold text-white mb-3 text-center font-cormorant tracking-wider">PREVIEW</h2>
              <ImagePreview 
                imageUrl={imageUrl} 
                theme={1}
                className="w-full aspect-[3/4] bg-white/80 border border-gray-300 rounded-lg shadow-lg"
              />
              
              <div className="mt-4 flex justify-center">
                <button className="bg-gray-100 hover:bg-white text-gray-800 rounded-lg px-5 py-2.5 font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  Save Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 z-10">
        <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-3 py-1.5">
          <span className="text-xs text-white">Press</span>
          <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded">Alt + Q</span>
          <span className="text-xs text-white">to switch layouts</span>
        </div>
      </div>
    </div>
  );
};

export default Layout1;