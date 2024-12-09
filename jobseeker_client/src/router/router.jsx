import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import PostJob from "../pages/postJob";
import Salary from "../pages/salary.jsx";
import MyJobs from "../pages/myjobs.jsx"
import UpdateJob from "../pages/updatejob.jsx";
import Login from "../components/login.jsx";
import Jobdetails from "../pages/jobdetails.jsx"
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
      },
      {
        path:"/my-jobs",element:<MyJobs/>
    },
    {
      path:"/salary",element:<Salary/>
  },
  {
    path:"/edit-job/:id",element:<UpdateJob/>,
    loader:({params})=> fetch(`http://localhost:8000/all-jobs/${params.id}`)
},
{
  path:"/job/:id",element:<Jobdetails/>
},
      ]
    },
    {
      path:"/login", element:<Login/>

    }
  ]);
  export default router;