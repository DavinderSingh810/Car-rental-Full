import "./dist/styles.css";
import { Outlet } from 'react-router';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes} from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Sign from "./Pages/Sign";
import WithNav from "./components/withnav";
import WithoutNav from "./components/WithoutNav";
import Register from "./Pages/Register";

function App() {
  return (
    <>
    
    
    <Routes>
      <Route element={<WithoutNav />}>
    <Route path="sign" element={<Sign />} />
    <Route path="register" element={<Register />} />
    </Route>
         <Route element={<WithNav />}>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />

      
      </Route>
      </Routes>
      
      </>
    
  );
}

export default App;
