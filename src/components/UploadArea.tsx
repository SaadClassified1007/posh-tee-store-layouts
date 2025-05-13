
import React, { useState, useRef } from "react";
import { Upload, Image } from "lucide-react";
import { toast } from "sonner";

interface UploadAreaProps {
  onImageUpload: (file: File, imageUrl: string) => void;
  theme: 1 | 2 | 3;
  className?: string;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onImageUpload, theme, className }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const themeClasses = {
    1: "theme1-card border-theme1-accent hover:border-theme1-accent",
    2: "theme2-card hover:border-theme2-accent",
    3: "theme3-card hover:border-gray-300 hover:shadow-md"
  };
  
  const buttonClasses = {
    1: "theme1-button",
    2: "theme2-button",
    3: "bg-gray-800 text-white rounded-lg px-4 py-2 font-medium hover:bg-gray-700 transition-all duration-300"
  };
  
  const iconClasses = {
    1: "text-theme1-accent animate-pulse",
    2: "text-theme2-accent animate-pulse",
    3: "text-gray-800"
  };
  
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const validateImage = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml'];
      
      if (!validTypes.includes(file.type)) {
        toast.error("Only image files (jpg, jpeg, png, webp, svg) allowed");
        resolve(false);
        return;
      }
      
      const img = document.createElement('img') as HTMLImageElement;
      const objectUrl = URL.createObjectURL(file);
      
      img.onload = () => {
        // Updated: Allow any image except landscape (width > height)
        if (img.width > img.height) {
          toast.error("Landscape images are not allowed");
          URL.revokeObjectURL(objectUrl);
          resolve(false);
        } else {
          URL.revokeObjectURL(objectUrl);
          resolve(true);
        }
      };
      
      img.onerror = () => {
        toast.error("Error loading image");
        URL.revokeObjectURL(objectUrl);
        resolve(false);
      };
      
      img.src = objectUrl;
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const isValid = await validateImage(file);
    
    if (isValid) {
      const imageUrl = URL.createObjectURL(file);
      onImageUpload(file, imageUrl);
      toast.success("Image uploaded successfully");
    }
    
    // Reset the input so the same file can be selected again
    e.target.value = "";
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const isValid = await validateImage(file);
    
    if (isValid) {
      const imageUrl = URL.createObjectURL(file);
      onImageUpload(file, imageUrl);
      toast.success("Image uploaded successfully");
    }
  };

  return (
    <div 
      className={`upload-area ${themeClasses[theme]} min-h-[200px] min-w-[200px] ${isDragging ? 'border-dashed border-2' : ''} ${className}`}
      onClick={handleButtonClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.webp,.svg"
        className="hidden"
        aria-label="Upload image"
      />
      
      <div className="flex flex-col items-center justify-center space-y-4 p-4">
        <Upload size={48} className={iconClasses[theme]} />
        
        <p className={`text-center text-sm font-medium ${theme === 3 ? 'text-gray-800' : ''}`}>
          Square or portrait images only<br />(jpg, jpeg, png, webp, svg)
        </p>
        
        <p className={`text-center text-xs text-opacity-70 ${theme === 3 ? 'text-gray-600' : ''}`}>
          Drag & drop or click to upload
        </p>
        
        <button className={buttonClasses[theme]}>
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default UploadArea;
