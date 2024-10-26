import { Route, Routes } from "react-router-dom";
import { Home, Portfolio } from "../pages";


const RouterIndex = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
    </>
  )
}

export default RouterIndex