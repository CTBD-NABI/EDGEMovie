import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./component/Navbar"
import Movies from "./Pages/Movies"
import MoviesDetais from "./Pages/MoviesDetais"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./Pages/Cart"

function App() {

  return (
    <>

      <Navbar />
      <ToastContainer />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetais />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </>
  )
}

export default App
