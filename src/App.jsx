
import './App.css'
import Navbar from './components/Navbar';
import Search from './pages/categories'
import CategoryPage from './pages/categoryPage';
import HomePage from './pages/homePage'
import { Routes, Route, Link } from "react-router-dom";
function App() {


  return (
    <>


<div className="bg-linear-to-b from-orange-50 to-white min-h-screen text-gray-800 overflow-x-hidden">
      
 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
     
    </div>

    </>
  )
}

export default App
