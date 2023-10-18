import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import Header from './pages/Header';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route path="/about"  element={<About />} />
      <Route path="/login"  element={<Login />} />
    </Route>
  )
)

// eslint-disable-next-line no-empty-pattern
function App({}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;