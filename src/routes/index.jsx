import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NowPlaying from "../pages/Nowplaying";
import Popular from '../pages/Popular'
import TopRated from "../pages/TopRated";
import Upcoming from "../pages/Upcoming";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/now_playing",
        element: <NowPlaying/>
      },
      {
        path:"/popular",
        element:<Popular/>
      },
      {
        path:'/top_rated',
        element:<TopRated/>
      },
      {
        path:'/upcoming',
        element:<Upcoming/>
      }
    ],
  },
]);

export default router