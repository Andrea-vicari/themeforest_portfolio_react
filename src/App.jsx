import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import HomepageOne from './pages/HomepageOne';
import SinglePost from './pages/SinglePost';
function App() {


  return (
    <React.Fragment>
      <Navbar />
        <Routes>
            <Route path="/" element={<HomepageOne />} />
            <Route path="/singlePost" element={<SinglePost />} />
        </Routes>
      <Footer />
    </React.Fragment>

  )
}

export default App
