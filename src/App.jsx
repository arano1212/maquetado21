import NavBar from "@/components/Navbar"
//import ImageBanner from "@/components/ImageBanner"
//import { Home } from "@/pages"
import RouterIndex from "./Router/Router"
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <>
    <BrowserRouter>
     <NavBar/>
     <RouterIndex />
     </BrowserRouter>
    </>
  )
}

export default App
