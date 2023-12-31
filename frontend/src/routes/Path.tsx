import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Books from "../pages/Books"

const Path = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
    </Routes>
  )
}

export default Path