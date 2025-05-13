import React from "react";
import { useForm } from "react-hook-form";

interface CustomizationFormProps {
  theme: 1 | 2 | 3;
  className?: string;
}

interface FormData {
  height: string;
  weight: string;
  bodyType: string;
}

const CustomizationForm: React.FC<CustomizationFormProps> = ({ theme, className }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      height: "180cm",
      weight: "80kg",
      bodyType: "Athletic"
    }
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission - keeping functionality the same
    console.log(data);
  };
  
  const themeClasses = {
    1: "theme1-card space-y-4",
    2: "theme2-card space-y-5",
    3: "theme3-card space-y-4"
  };
  
  const inputClasses = {
    1: "bg-theme1-bg/60 border border-theme1-accent/30 rounded-md px-3 py-2 text-theme1-text w-full focus:outline-none focus:ring-2 focus:ring-theme1-accent/30 transition-all",
    2: "bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-theme2-text w-full focus:outline-none focus:ring-2 focus:ring-theme2-accent/50 transition-all",
    3: "bg-white border border-theme3-accent/20 rounded-lg px-3 py-2 text-theme3-text w-full focus:outline-none focus:ring-2 focus:ring-theme3-accent/30 transition-all"
  };
  
  const labelClasses = {
    1: "block text-theme1-text font-medium",
    2: "block text-theme2-text font-medium",
    3: "block text-theme3-text font-medium"
  };

  const errorClasses = {
    1: "text-red-500 text-sm mt-1",
    2: "text-red-400 text-sm mt-1",
    3: "text-red-600 text-sm mt-1"
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${themeClasses[theme]} p-6 ${className}`}>
      <div>
        <label className={labelClasses[theme]} htmlFor="height">
          HEIGHT
        </label>
        <input
          id="height"
          className={inputClasses[theme]}
          placeholder="Enter height"
          {...register("height", { required: "Height is required" })}
        />
        {errors.height && <p className={errorClasses[theme]}>{errors.height.message}</p>}
      </div>
      
      <div>
        <label className={labelClasses[theme]} htmlFor="weight">
          WEIGHT
        </label>
        <input
          id="weight"
          className={inputClasses[theme]}
          placeholder="Enter weight"
          {...register("weight", { required: "Weight is required" })}
        />
        {errors.weight && <p className={errorClasses[theme]}>{errors.weight.message}</p>}
      </div>
      
      <div>
        <label className={labelClasses[theme]} htmlFor="bodyType">
          BODY TYPE
        </label>
        <input
          id="bodyType"
          className={inputClasses[theme]}
          placeholder="Enter body type"
          {...register("bodyType", { required: "Body type is required" })}
        />
        {errors.bodyType && <p className={errorClasses[theme]}>{errors.bodyType.message}</p>}
      </div>
    </form>
  );
};

export default CustomizationForm;