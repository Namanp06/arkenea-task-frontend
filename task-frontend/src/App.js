import { Routes, Route } from "react-router-dom"
import Home from "./components/home.component"
import FormComponent from "./components/form.component"
import Contact from "./components/contact.component"
import Footer  from "./components/footer"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="formComponent" element={ <FormComponent/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App