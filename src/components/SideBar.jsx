import { useContext } from "react";
import { categories } from "../constants/index";
import { YoutubeContex } from "../context/YoutubeContext";

const SideBar = () => {
   const { selectedCategory, setSelectedCategory } = useContext(YoutubeContex);

   return (
      <div className="flex flex-col px-2 md:px-4">
         {categories.map((item) => (
            <div onClick={() => setSelectedCategory(item)} key={item.name}>
               <div
                  // ekrana bastığımız ekran seçili ise arka plan ver
                  style={{ background: selectedCategory.name === item.name && '#2d2d2d' }}
                  className="flex items-center gap-2 py-4 px-2 md:px-3  md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]"
               >
                  <span className="max-sm:text-2xl">{item.icon}</span>
                  <span className="max-sm:hidden">{item.name}</span>
               </div>
               {item.divider && <hr />}
            </div>
         ))}
      </div>
   );
};

export default SideBar;