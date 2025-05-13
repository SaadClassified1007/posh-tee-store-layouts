
import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout1 from "../layouts/Layout1";
import Layout2 from "../layouts/Layout2";
import Layout3 from "../layouts/Layout3";

const LayoutManager: React.FC = () => {
  const [currentLayout, setCurrentLayout] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [transitionName, setTransitionName] = useState<string>("layout-slide");
  
  // Handle keyboard shortcut Alt + Q
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.code === "KeyQ") {
        event.preventDefault();
        
        // Define transition effects based on which layout we're moving to
        if (currentLayout === 0) {
          setTransitionName("layout-slide"); // Layout 1 -> 2: slide left/right
        } else if (currentLayout === 1) {
          setTransitionName("layout-slide-up"); // Layout 2 -> 3: slide up/down
        } else {
          setTransitionName("layout-fade"); // Layout 3 -> 1: fade/scale
        }
        
        // Cycle through layouts: 0 -> 1 -> 2 -> 0
        setCurrentLayout((prev) => (prev + 1) % 3);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentLayout]);

  const handleImageUpload = (file: File, url: string) => {
    setImageFile(file);
    setImageUrl(url);
  };

  // Clean up object URLs on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const layouts = [
    <Layout1 key="layout1" imageUrl={imageUrl} onImageUpload={handleImageUpload} />,
    <Layout2 key="layout2" imageUrl={imageUrl} onImageUpload={handleImageUpload} />,
    <Layout3 key="layout3" imageUrl={imageUrl} onImageUpload={handleImageUpload} />,
  ];

  return (
    <div className="layout-container">
      <TransitionGroup>
        <CSSTransition
          key={currentLayout}
          timeout={500}
          classNames={transitionName}
        >
          <div className="layout-content">
            {layouts[currentLayout]}
          </div>
        </CSSTransition>
      </TransitionGroup>
      
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="flex space-x-2 bg-black/20 backdrop-blur-md p-1 rounded-full">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentLayout === index 
                  ? "bg-white" 
                  : "bg-white/30"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutManager;
