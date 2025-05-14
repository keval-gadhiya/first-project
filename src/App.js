import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import DashboardPage from './page/Dashboard';
import LoginPage from './page/Login';
import HeaderCompoenent from './component/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderCompoenent></HeaderCompoenent>
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>

    </>


  );
}

export default App;
