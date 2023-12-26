import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import PostDetails from './Components/Post/PostDetails';
import PageNotFound from './Components/404/PageNotFound';
import Home2 from './Pages/Home2';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Home2 />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
