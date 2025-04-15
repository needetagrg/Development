const Category = () => {
    return (
        
    
      <div className="flex items-center m-3">
        {/* Cleanser */}
        <div className="relative bg-[url('/cleanser2.webp')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[20px] rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="relative flex items-center justify-center h-full">
              <h2 className="font-semibold text-[30px] text-white">Cleanser</h2>
            </div>
          </div>
        </div>
  
        {/* Face Mask */}
        <div className="relative bg-[url('/facemaskk.jpeg')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[20px] rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="relative flex items-center justify-center h-full">
              <h2 className="font-semibold text-[30px] text-white">Face Mask</h2>
            </div>
          </div>
        </div>
  
        {/* Toner */}
        <div className="relative bg-[url('/toner.webp')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[20px] rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="relative flex items-center justify-center h-full">
              <h2 className="font-semibold text-[30px] text-white">Toner</h2>
            </div>
          </div>
        </div>
  
        {/* Essence */}
        <div className="relative bg-[url('/essence.jpg')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[20px] rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="relative flex items-center justify-center h-full">
              <h2 className="font-semibold text-[30px] text-white">Essence</h2>
            </div>
          </div>
        </div>
  
        {/* Serum */}
        <div className="relative bg-[url('/serum.jpg')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[20px] rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="relative flex items-center justify-center h-full">
              <h2 className="font-semibold text-[30px] text-white">Serum</h2>
            </div>
          </div>
        </div>
  
        {/* Moisturizer */}
        <div className="relative bg-[url('/moisturizers.jpg')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[20px] rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="relative flex items-center justify-center h-full">
              <h2 className="font-semibold text-[30px] text-white">Moisturizer</h2>
            </div>
          </div>
        </div>
  
        {/* Sunscreen */}
        <div className="relative bg-[url('/sunscreen.webp')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[20px] rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="relative flex items-center justify-center h-full">
              <h2 className="font-semibold text-[30px] text-white">Sunscreen</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Category;