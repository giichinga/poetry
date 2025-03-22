import Index from "./index.jsx";
import Poems from "./Poems.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/poems" element={<Poems />} />
      </Routes>
    </BrowserRouter>
  )
  

}

export default App;