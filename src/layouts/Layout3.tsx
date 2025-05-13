
import React from "react";
import UploadArea from "../components/UploadArea";
import ImagePreview from "../components/ImagePreview";
import CustomizationForm from "../components/CustomizationForm";

interface Layout3Props {
  imageUrl: string | null;
  onImageUpload: (file: File, imageUrl: string) => void;
}

const Layout3: React.FC<Layout3Props> = ({ imageUrl, onImageUpload }) => {
  return (
    <div className="theme3 min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-theme3-accent bg-clip-text text-transparent">
            POD T-shirt Store
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <UploadArea 
                  onImageUpload={onImageUpload} 
                  theme={3} 
                  className="w-full aspect-square"
                />
              </div>
              
              <div className="flex-1">
                <CustomizationForm 
                  theme={3} 
                  className="h-full"
                />
              </div>
            </div>
            
            <div className="theme3-card p-6">
              <p className="text-center mb-4">
                Add your custom text or message here
              </p>
              <textarea 
                className="w-full p-4 border border-theme3-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme3-accent/50 min-h-[100px]"
                placeholder="Enter your custom text here..."
              ></textarea>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-semibold mb-2">PREVIEW</h2>
              <p className="text-sm text-gray-500">Here's how your design will look</p>
            </div>
            
            <ImagePreview 
              imageUrl={imageUrl} 
              theme={3} 
              className="w-full max-w-md shadow-xl"
            />
            
            <div className="mt-8 flex justify-center gap-4">
              <button className="theme3-button">
                Save Design
              </button>
              <button className="theme3-button">
                Add to Cart
              </button>
            </div>
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
