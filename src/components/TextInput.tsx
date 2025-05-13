
import React, { useState } from "react";
import { toast } from "sonner";

interface TextInputProps {
  theme: 1 | 2 | 3;
  className?: string;
}

const MAX_LINES = 3;
const LINE_HEIGHT = 24; // approximate line height in pixels

const TextInput: React.FC<TextInputProps> = ({ theme, className }) => {
  const [text, setText] = useState("");
  
  const themeClasses = {
    1: "theme1-card",
    2: "theme2-card",
    3: "theme3-card"
  };
  
  const textareaClasses = {
    1: "bg-theme1-bg/60 border border-theme1-accent/30 text-theme1-text focus:ring-theme1-accent/50",
    2: "bg-white/10 border border-white/20 text-theme2-text focus:ring-theme2-accent/50",
    3: "bg-white border border-theme3-accent/20 text-theme3-text focus:ring-theme3-accent/30"
  };
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    const lineCount = (newText.match(/\n/g) || []).length + 1;
    
    if (lineCount > MAX_LINES) {
      toast.error(`Maximum ${MAX_LINES} lines allowed`);
      return;
    }
    
    setText(newText);
  };

  return (
    <div className={`${themeClasses[theme]} p-4 ${className}`}>
      <p className={`text-center mb-3 font-medium ${theme === 1 ? 'text-white/90' : theme === 2 ? 'text-white/90' : 'text-gray-700'}`}>
        Add your custom text or message here
      </p>
      <textarea 
        className={`w-full p-4 rounded-lg focus:outline-none focus:ring-2 line-clamp-3 transition-all ${textareaClasses[theme]}`}
        placeholder="Enter your custom text here..."
        value={text}
        onChange={handleTextChange}
        style={{ resize: "none", minHeight: `${LINE_HEIGHT * 3}px` }}
        rows={3}
        maxLength={150}
      />
      <div className="flex justify-between mt-2">
        <p className={`text-xs ${theme === 1 ? 'text-white/60' : theme === 2 ? 'text-white/60' : 'text-gray-500'}`}>
          Max 3 lines
        </p>
        <p className={`text-xs ${theme === 1 ? 'text-white/60' : theme === 2 ? 'text-white/60' : 'text-gray-500'}`}>
          {text.length}/150
        </p>
      </div>
    </div>
  );
};

export default TextInput;
