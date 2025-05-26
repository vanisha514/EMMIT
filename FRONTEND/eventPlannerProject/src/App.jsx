import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// navbar
import Navigation from './components/Navigation';
import Navigation2 from './components/Navigation2';
import Navigation3 from './components/Navigation3';

// pages
import Hero from './components/Hero';
import Dashboard from './pages/Dashboard/Dashboard';
import ExploreEvents from './pages/ExploreEvents/ExploreEvents';
import ExploreHackathons from './pages/ExploreHackathons/ExploreHackathons';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import WavyLine from './pages/WavyLine/WavyLine';
import OrganiseEvent from './pages/OrganiseEvent/OrganiseEvent';
import Cards from './pages/Cards/Cards';
// import About from './pages/About/About';
// import Blogs from './pages/Blogs/Blogs';
// import Hackathons from './pages/Hackathons/Hackathons';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navigation3 /><Hero /></>
    },
    {
      path: '/dashboard',
      element: <><Navigation2 /><Dashboard /></>
    },
    {
      path: '/exploreevents',
      element: <><ExploreEvents /></>
    },
    {
      path: '/explorehackathons',
      element: <><ExploreHackathons /></>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/wavyline',
      element: <WavyLine />
    },
    {
      path: '/OrganiseEvent',
      element: <OrganiseEvent />
    },
    {
      path: '/cards',
      element: <Cards />
    },
    // {
    //   path: '/about',
    //   element: <><About /></>
    // }
    // {
    //   path: '/blogs',
    //   element: <><Navigation /><Blogs /></>
    // },
    // {
    //   path: '/hackathons',
    //   element: <><Navigation /><Hackathons /></>
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
