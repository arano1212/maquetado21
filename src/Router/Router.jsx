import { Route, Routes } from "react-router-dom";
import { AboutUs, Home, Portfolio, Services } from "@/pages";


const RouterIndex = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
    </>
  )
}

export default RouterIndex