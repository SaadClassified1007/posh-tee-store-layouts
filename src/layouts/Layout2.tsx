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

const Layout2: React.FC<Layout2Props> = ({
  imageUrl,
  onImageUpload,
  onLayoutChange,
}) => {
  const isMobile = useIsMobile();

  return (
    <div 
      className="theme2 min-h-screen w-full py-6 px-4 sm:px-6 lg:px-8 flex flex-col relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1634225222400-c1d62052ce11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-montserrat tracking-tight">
            POD T-shirt Store
          </h1>
          {isMobile && (
            <button
              onClick={onLayoutChange}
              className="p-2 rounded-full bg-blue-400/20 text-blue-300"
              aria-label="Change layout"
            >
              <Menu size={24} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Left section - Form Fields */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2 font-montserrat tracking-wider">
                  HEIGHT
                </h2>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
                  <input
                    type="text"
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50 h-10"
                    placeholder="Enter height"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-2 font-montserrat tracking-wider">
                  WEIGHT
                </h2>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
                  <input
                    type="text"
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50 h-10"
                    placeholder="Enter weight"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-2 font-montserrat tracking-wider">
                  BODY TYPE
                </h2>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
                  <input
                    type="text"
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50 h-10"
                    placeholder="Enter body type"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-white mb-2 text-center font-montserrat tracking-wider">
                  CUSTOMIZE
                </h2>
                <TextInput 
                  theme={2} 
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 h-40" 
                />
              </div>
            </div>
          </div>

          {/* Right section - Upload and Preview */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2 text-center font-montserrat tracking-wider">
                  UPLOAD
                </h2>
                <UploadArea
                  onImageUpload={onImageUpload}
                  theme={2}
                  className="w-full aspect-square bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-2 text-center font-montserrat tracking-wider">
                  PREVIEW
                </h2>
                <ImagePreview
                  imageUrl={imageUrl}
                  theme={2}
                  className="w-full aspect-[3/4] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Save button centered at bottom */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-6 py-2.5 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
            Save Design
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
          <span className="text-xs text-white/70">Press</span>
          <span className="text-xs bg-blue-400/20 text-blue-300 px-2 py-0.5 rounded">
            Alt + Q
          </span>
          <span className="text-xs text-white/70">to switch layouts</span>
        </div>
      </div>
    </div>
  );
};

export default Layout2;