// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
// import { Head } from './previous/Head';
// import { Job } from './previous/Job';
// import DataGrid from 'react-data-grid';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/homePage';
import News from './pages/news';
import Blogs from './pages/blogs';
import Customer from './pages/customer';
import Announcements from './pages/showBlogs';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<News />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/announcements' element={<Announcements />} />
      </Routes>
    </Router>
  );

}

export default App;



