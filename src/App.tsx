import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { Tweets } from './pages/Tweets';
import { Layout } from './Components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
