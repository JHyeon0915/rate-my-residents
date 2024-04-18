import './App.css';
import React from 'react';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rating from './pages/Rating';
import Result from './pages/Result';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/result" element={<Result />} />
            <Route path="/result/rating" element={<Rating />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
