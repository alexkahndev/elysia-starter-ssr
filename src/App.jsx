import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/service" element={<h1>Service</h1>} />
      <Route path="/log-in" element={<h1>Log In</h1>} />
      <Route path="/sign-up" element={<h1>Sign Up</h1>} />
    </Routes>
  );
};

export default App;
