import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import SearchReasult from "./pages/SearchResault";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path="/watch/:id" element={<VideoDetail/>}/>
      <Route path="/results" element={<SearchReasult/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App
