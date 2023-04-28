import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchCountry from './pages/country/SearchCountry';
import ViewCountry from './pages/country/ViewCountry';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchCountry />} />
          <Route path='/view-country/:country' element={<ViewCountry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
