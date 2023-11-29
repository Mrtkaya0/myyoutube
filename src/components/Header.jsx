import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillBell, AiFillVideoCamera } from "react-icons/ai";

const Header = () => {

const navigate = useNavigate ();


// bu ÇAlıştığımda arama sonuçları sayfasına yönel
// url arama terimini ekele
    const handleSubmit = (e) =>{
        e.preventDefault();
        const text = e.target[0].value;

        navigate(`/results?search_query=${text}`);
    }
// path params yol parametreleri 
// wwww.amazonçcom/ 60

// query params arama parametreleri




return (
    <header className="flex justify-between items-center p-4">
      <Link to="/" className="flex items-center gap-[10px]">
        <img width={50} src="/youtube.png" alt="YouTube Logo" />
        <h1 className="text-2xl max-md:hidden">My Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex items-center border border-gray-400 rounded-[20px]">
        <input
          placeholder="video ara..."
          className="bg-black border-gray-400 outline-none rounded-[20px] px-3 py-1"
          type="text"
        />
        <button className="grid place-items-center border-1 px-2 text-xl transition-color hover:bg-gray-500">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer">
        <div className="p-2 transition-color duration-500 hover:bg-gray-700 rounded-full">
          <AiFillBell />
        </div>
        <div className="p-2 transition-color hover:bg-gray-700 rounded-full">
          <AiFillVideoCamera />
        </div>
      </div>
    </header>
  );
};

export default Header;