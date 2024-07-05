import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



import './App.css';
import './AppPhone.css';
import Header from './Components/Header';
import Categories from './Components/Categories';

import Poses from "./Components/Poses";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
        <Header></Header>
        {/* <Categories></Categories> */}
        <section id="home">
        <Router>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/poses" element={<Poses />} />
        </Routes>
      </Router>
      </section>
      <section id="about">
      <About></About>
      </section>
      <section id="contact">
      <Contact image="https://cdn-icons-png.flaticon.com/512/2293/2293826.png"></Contact>
      </section>
      <section>
      <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
