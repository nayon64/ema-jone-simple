
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import Shopping from './components/Shopping/Shopping';
import Main from './layout/Main';
import { productAndCartLoader } from './loader/productAndCartData';
import PrivateRoute from './route/PrivateRoute';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          
          element: <Shop></Shop>
        },
        {
          path: '/shopping',
          
          element: <PrivateRoute><Shopping></Shopping></PrivateRoute>
        },
        {
          path: 'about',
          
          element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element:<Register></Register>
        },
        {
          path: 'order',
          loader: productAndCartLoader,
          element: <Order></Order>
        },
        { path: 'inventory', element:<Inventory></Inventory>},
      ]
    },
    {
      path: "*",
      element:<div>Not Found : 404</div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
