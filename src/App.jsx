import { Outlet } from "react-router-dom"

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import "./custom.scss"

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
