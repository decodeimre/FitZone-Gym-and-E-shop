// import LandingPage from './pages/LandingPage/LandingPage.tsx';
import AdminPage from './pages/AdminPage/AdminPage.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminPage/>}></Route>
      {/* <Route path="/courses" element={<Courses />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/login" element={<Login />} />
    <Route path="/register/:vtoken/:uid" element={<Verify />} />
    <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
}

export default App;
