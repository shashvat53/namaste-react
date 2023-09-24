import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./componenets/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./componenets/Grocery";

const Grocery = lazy(() => import("./componenets/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "shashvat",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ logedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
