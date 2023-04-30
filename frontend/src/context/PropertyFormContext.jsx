import { createContext, useEffect, useState } from "react";

export const PropertyFormContext = createContext()

export const PropertyFormContextProvider = ({children}) => {

  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem("formData");
    return storedFormData ? JSON.parse(storedFormData) : {};
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return(
    <PropertyFormContext.Provider value={{formData,updateFormData}}>
      {children}
    </PropertyFormContext.Provider>
  )
}
