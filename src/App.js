import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Header from './components/Header';
import Home from "./components/Home";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import TVshows from "./components/TVshows";
import Search from './components/Search';
import Details from './components/Details';
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
function App() {



  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVshows />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/details/:mediaType/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
