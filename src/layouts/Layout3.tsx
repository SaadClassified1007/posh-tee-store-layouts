
import React from "react";
import UploadArea from "../components/UploadArea";
import ImagePreview from "../components/ImagePreview";
import TextInput from "../components/TextInput";
import { useIsMobile } from "../hooks/use-mobile";
import { Menu } from "lucide-react";

interface Layout3Props {
  imageUrl: string | null;
  onImageUpload: (file: File, imageUrl: string) => void;
  onLayoutChange: () => void;
}

const Layout3: React.FC<Layout3Props> = ({ imageUrl, onImageUpload, onLayoutChange }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="theme3 min-h-screen w-full py-6 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-theme3-accent bg-clip-text text-transparent font-montserrat tracking-tight">
            POD T-shirt Store
          </h1>
          {isMobile && (
            <button 
              onClick={onLayoutChange}
              className="p-2 rounded-full bg-theme3-accent/20 text-orange-600"
              aria-label="Change layout"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
        
        {/* Horizontal Input Fields */}
        <div className="theme3-card p-4 mb-5">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-theme3-text font-medium mb-2 font-montserrat text-sm tracking-wider">HEIGHT</label>
              <input
                type="text"
                className="bg-white border border-theme3-accent/20 rounded-lg px-3 py-2 text-theme3-text w-full focus:outline-none focus:ring-2 focus:ring-theme3-accent/30"
                placeholder="Enter height"
              />
            </div>
            
            <div>
              <label className="block text-theme3-text font-medium mb-2 font-montserrat text-sm tracking-wider">WEIGHT</label>
              <input
                type="text"
                className="bg-white border border-theme3-accent/20 rounded-lg px-3 py-2 text-theme3-text w-full focus:outline-none focus:ring-2 focus:ring-theme3-accent/30"
                placeholder="Enter weight"
              />
            </div>
            
            <div>
              <label className="block text-theme3-text font-medium mb-2 font-montserrat text-sm tracking-wider">BODY TYPE</label>
              <input
                type="text"
                className="bg-white border border-theme3-accent/20 rounded-lg px-3 py-2 text-theme3-text w-full focus:outline-none focus:ring-2 focus:ring-theme3-accent/30"
                placeholder="Enter body type"
              />
            </div>
          </div>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-3 text-center font-montserrat tracking-wider">UPLOAD</h2>
            <UploadArea 
              onImageUpload={onImageUpload} 
              theme={3} 
              className="w-full aspect-square"
            />
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-3 text-center font-montserrat tracking-wider">PREVIEW</h2>
            <ImagePreview 
              imageUrl={imageUrl} 
              theme={3} 
              className="w-full aspect-[3/4]"
            />
            
            <div className="mt-4 flex justify-center">
              <button className="theme3-button">
                Save Design
              </button>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-3 text-center font-montserrat tracking-wider">CUSTOMIZE</h2>
            <TextInput theme={3} className="w-full h-full" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center gap-2 light-glass rounded-full px-3 py-1.5">
          <span className="text-xs text-gray-600">Press</span>
          <span className="text-xs bg-theme3-accent/20 text-orange-600 px-2 py-0.5 rounded">Alt + Q</span>
          <span className="text-xs text-gray-600">to switch layouts</span>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
