// router.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import HomePage from "./page/HomePage";
import UnknownData from "./components/common/UnknownData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate replace to={"HomePage"} />,
      },
      {
        path: "HomePage",
        element: <HomePage />,
      },
      {
        path: "Translate",
        element: <UnknownData message="尚未擁有此頁面資料" />,
      },
      {
        path: "History",
        element: <UnknownData message="尚未擁有此頁面資料" />,
      },
      {
        path: "Investment",
        element: <UnknownData message="尚未擁有此頁面資料" />,
      },
    ],
  },
]);

export default router;
