
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

import MainPage from './Page/MainPage/MainPage';
import About from './Page/About/About';
import Board from './Page/Board/Board';
import Contact from './Page/Contact/Contact';
import Services from './Page/Services/Services';
import Leader from './Page/Leader/Leader';

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

function Layout() {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout />,
      children: [
        {
          index: true,
          element:<MainPage />,
        },
        {
          path : "/about",
          element:<About />,
        },
        {
          path : "/leadership",
          element:<Leader />,
        },
        {
          path : "/board",
          element:<Board />,
        },
        {
          path : "/our-services",
          element:<Services />,
        },
        {
          path : "/contact",
          element:<Contact />,
        },
      ]
    }
  ] 
  )

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
