import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import HomepageOne from './pages/HomepageOne';
import SinglePost from './pages/SinglePost';
import ScrollToTop from './Components/ScrollToTop';
function App() {


  return (
    <React.Fragment>
      <Navbar />
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<HomepageOne />} />
            <Route path="/singlePost" element={<SinglePost />} />
        </Routes>
        </ScrollToTop>
      <Footer />
    </React.Fragment>

  )
}

export default App
