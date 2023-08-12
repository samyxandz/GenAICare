import { Fragment } from 'react';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Home from './Pages/Home.js';
import  Footer from './Components/Footer/Footer.js';
import'./index.css';
import Layout from './Components/Layout/Layout.js';
import Contact from './Pages/Contact.js';
import Blog from './Pages/blog.js';
import About from './Pages/About.js';
import Service from './Pages/Service';
import Faq from './Pages/Faq.js';

const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element ={<Layout />}>
       <Route index path = '/home' element = {<Home />} />
       <Route path ='/contact' element={<Contact />} />
       <Route path = '/blog' element ={<Blog />} />
       <Route path = '/about' element ={<About />} />
       <Route path = '/service' element ={<Service />} />
       <Route path = '/faq' element ={<Faq/>} />
    </Route>
))


function App() {
  return (
    <Fragment>
        <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;
