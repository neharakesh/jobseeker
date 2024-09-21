import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import PostJob from "../pages/postJob";
const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path:"/",element:<Home/>
        },
        {
          path:"/post-job",element:<PostJob/>
      }
      ]
    },
  ]);
  export default router;