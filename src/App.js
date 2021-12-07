import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './views/Home';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Careers from './views/careers/Careers';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
