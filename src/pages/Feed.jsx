import { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContex } from "../context/YoutubeContext";
import Loading from './../components/loading'
import VideoCard from "../components/VideoCart";

const Feed = () => {
    const { videos } = useContext(YoutubeContex);


    return (
        <div className="flex gap-3">
            <SideBar />
            <div className="videos">
                {/* videolar yoksa yükleniyor bas video varsa videoları dön her bir video için kart bas */}
                {!videos? (
                    <Loading type={"video"}/>
                ) : (
                    videos.map((item) => item.type === 'video' && (<VideoCard video={item} key={item.videoId} />)
                    )
                )}

            </div>
        </div>
    );
};

export default Feed;