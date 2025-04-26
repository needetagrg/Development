import React from "react";
import { useSelector } from "react-redux";

const recommended = {
    dry: [
      "Hydrating Cleanser",       
      "Soothing Facemask",        
      "Hydrating Toner",          
      "Moisture Essence",         
      "Hyaluronic Acid Serum",    
      "Rich Moisturiser",         
      "SPF 50+ Moist Sunscreen"   
    ],
    oily: [
      "Foaming Cleanser",         
      "Charcoal Clay Facemask",   
      "Oil-Control Toner",        
      "Niacinamide Essence",      
      "Salicylic Acid Serum",     
      "Oil-Free Moisturiser",     
      "Matte Finish Sunscreen"    
    ],
    normal: [
      "Gentle Daily Cleanser",    
      "Refreshing Facemask",      
      "Balancing Toner",          
      "Hydrating Essence",        
      "Vitamin C Serum",          
      "Light Moisturiser",        
      "Everyday SPF Sunscreen"    
    ],
    combination: [
      "Balancing Cleanser",       
      "T-Zone Control Facemask",  
      "Dual Action Toner",        
      "Multi-Use Essence",        
      "Niacinamide + HA Serum",   
      "Gel Moisturiser",          
      "Broad Spectrum Sunscreen"  
    ]
  };
  

const RecommendedProducts = () => {
  const skinType = useSelector((state) => state.quiz.skinType);

  if (!skinType) return null;

  return (
    <div className="mt-8 p-6 bg-gray-300 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">
        Recommended Products for <span className="capitalize">{skinType}</span> Skin:
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        {recommended[skinType].map((product, i) => (
          <li key={i} className="text-gray-700">{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedProducts;
