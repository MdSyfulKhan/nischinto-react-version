import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import PostDetails from './Components/Post/PostDetails';
import PageNotFound from './Components/404/PageNotFound';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';
import Home6 from './Pages/Home6';
import Home7 from './Pages/Home7';
import Home8 from './Pages/Home8';
import Home10 from './Pages/Home10';
import Home11 from './Pages/Home11';
import Layout2 from './Components/Layout/Layout2';
import Home12 from './Pages/Home12';
import Home13 from './Pages/Home13';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route index element={<Home2 />} /> */}
        {/* <Route index element={<Home3 />} /> */}
        {/* <Route index element={<Home4 />} /> */}
        {/* <Route index element={<Home5 />} /> */}
        {/* <Route index element={<Home6 />} /> */}
        {/* <Route index element={<Home7 />} /> Home7 not finished */}
        {/* <Route index element={<Home8 />} /> */}
        {/* <Route index element={<Home9 />} /> Home9 not finished */}
        {/* <Route index element={<Home10 />} /> */}
        {/* <Route index element={<Home11 />} /> */}
        {/* <Route index element={<Home12 />} /> */}
        <Route index element={<Home13 />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      {/* <Route path="/" element={<Layout2 />}>
        <Route index element={<Home11 />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route> */}
    </Routes>
  );
};

export default App;
