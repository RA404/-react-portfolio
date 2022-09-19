import './App.css';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Testimonials from './pages/Testimonials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import TestimonialDisplay from './pages/TestimonialDisplay';
import Education from './pages/Education';

function App() {

  useEffect(() => {
    document.title = 'Repin Andrei - FullStack Developer';;
  });

  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/testimonial/:id' element={<TestimonialDisplay />} />
        </Routes>
        <Footer />
      </Router> */}

      <HashRouter hashType="slash">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/testimonial/:id' element={<TestimonialDisplay />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
