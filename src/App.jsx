import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ContextWrapper from "./context";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoTop from "./components/UI/GoTop";
import Loader from "./components/UI/Loader";

const App = () => {
  return (
    <ContextWrapper>
      <Navbar />
      <Header />
      <About />
      <Advantages />
      <Services />
      <Contact />
      <Footer />

      <GoTop />
      <Loader />
    </ContextWrapper>
  );
};

export default App;
