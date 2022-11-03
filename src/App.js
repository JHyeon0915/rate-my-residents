import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rating from './pages/Rating';
import Result from './pages/Result';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} >
        <Route index element={<Main />} />
        <Route path="rating" element={<Rating />} />
        <Route path="result" element={<Result />} />
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
