import { Outlet } from 'react-router-dom';
import Header from "./components/Headers/Headers";
import Footer from "./components/Footers/Footers";

function App() {
 
  return (
    <>
      <Header/>
      <Outlet />
      {/* if we use outlet, then with the help of react router dom, we can do nesting of different components, for reference see main.jsx */}
      <Footer />
    </>
  )
}

export default App
