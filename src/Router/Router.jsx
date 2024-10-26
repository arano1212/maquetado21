import { Route, Routes } from "react-router-dom";
import { Home, Portfolio, Services } from "../pages";


const RouterIndex = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
    </Routes>
    </>
  )
}

export default RouterIndex