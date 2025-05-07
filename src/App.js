import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardPage from './page/Dashboard';
import LoginPage from './page/Login';
import HeaderCompoenent from './component/Header';
import LeftbarCompoenent from './component/Leftbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <LeftbarCompoenent></LeftbarCompoenent>
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
