import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

export const YoutubeContex = createContext();

export function YoutubeProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(
        categories[0]);
    const [videos, setVideos] = useState(null);
    // console.log(selectedCategory)

    useEffect(() => {
        // apiden videoları alma
        if (selectedCategory.type === 'home' || selectedCategory.type === 'trending') {
            getData(`/${selectedCategory.type}`).then((res) => {
                setVideos(res.data.data); // Bu satırdaki res.data.data doğru veriyi içeriyor mu kontrol etmelisiniz.
            });
        }
        if (selectedCategory.type === "category") {

            // yeni videolar için istek at side bar tıklayınca gelen videolar için
            getData(`/search?query=${selectedCategory.name}&type=video`)
                .then((res) => setVideos(res.data.data));
        }
    }, [selectedCategory]);


    return (
        <YoutubeContex.Provider value={{ selectedCategory, setSelectedCategory, videos }}>
            {children}
        </YoutubeContex.Provider>
    )
}
