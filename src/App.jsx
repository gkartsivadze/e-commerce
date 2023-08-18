import { Outlet } from "react-router-dom"

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import "./custom.scss"
import SideBar from "./components/subcomponents/SideBar"

function App() {
  return (
    <>
      <Navigation />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
