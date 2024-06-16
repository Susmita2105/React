import Home from "./components/Home/Home"
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Headers/Headers";
import Footer from "./components/Footers/Footers";

function App() {
 
  return (
    <>
    <Router>
      <Header/>
      <Home />
      <Footer />
    </Router>
    </>
  )
}

export default App
