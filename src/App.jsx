import { Routes, Route, useNavigate } from 'react-router-dom';
//import { useAuth0 } from '@auth0/auth0-react';
import Landing from './pages/Landing';

//import LoginTest from './pages/LoginTest';

const App = () => {
  /*
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);
  */

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/service" element={<h1>Service</h1>} />
    </Routes>
  );
};

export default App;
