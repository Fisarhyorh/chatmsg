import React from 'react'
import Home from "./homepage/Home";
import {Auth} from "./components/Auth"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

// function index(){
//   return (
//     <div>
//      <App/>
//     </div>
//   )
// const main = () => {
  
 
  
// }
// }
function index (){


const Layout = () => {
  return (
      <div>
       {/* <App/> */}
       <Outlet/>
    </div>
  );
};



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth/>
    ),
  },
  // {
  //   path: "login",
  //   element: <App/>,
  // },
  // {
  //   path: "/page",
  //   element: (<Layout />),
  //   children : [
  //       {
  //       path: "/page",
  //       element: <Home />
  //     },
     
  //   ]
  // },
 
]);

return (
  <div>
    <RouterProvider router={router} />
  </div>
);
}


export default index