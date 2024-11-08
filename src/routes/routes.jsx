import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Home from "./Home/Home";
import Agb from "./agb";
import Impressum from "./impressum";
import Datenschutz from "./datenschutz";


const router = createBrowserRouter([
   
    {
        path: "/",
        element: <DefaultLayout><Home /></DefaultLayout> ,
    },
    {
        path: "/agb",
        element: <DefaultLayout><Agb /></DefaultLayout> ,
    },
    {
        path: "/impressum",
        element: <DefaultLayout><Impressum /></DefaultLayout> ,
    },
    {
        path: "/datenschutz",
        element: <DefaultLayout><Datenschutz /></DefaultLayout> ,
    },
]);

export default router