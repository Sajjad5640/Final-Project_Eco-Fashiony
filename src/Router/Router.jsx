import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import CardPant from "../Component/Men/MenPant/CardPant";
import CardShirt from "../Component/Men/MenPant/CardShirt";
import CardSaree from "../Component/Women/WomenSaree/CardSaree";
import CardLongDress from "../Component/Women/WomenSaree/CardLongDress";
import UserProfile from "../Pages/Profile/UserProfile";
import Login from "../Pages/Profile/Login";
import CustomerList from "../Pages/CustomerList/CustomerList";
import CardPunjabi from "../Pages/Men/CardPunjabi";
import CardTshirt from "../Pages/Men/CardTshirt";
import CardShawl from "../Pages/Women/CardShawl";
import CardThreePiece from "../Pages/Women/CardThreePiece";


let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
        {
            path: "/",
            element:<HomePage></HomePage>
        },
        {
            path:"/about",
            element:<AboutPage></AboutPage>
        },
        {
          path: "/mp",
          element:<CardPant></CardPant>
        },
        {
          path: "/ms",
          element:<CardShirt></CardShirt>
        },
        {
          path: "/wsa",
          element:<CardSaree></CardSaree>
        },
        {
          path: "/wld",
          element:<CardLongDress></CardLongDress>
        },
        {
          path: "/pf",
          element:<UserProfile></UserProfile>
        },
        {
          path: "/lg",
          element:<Login></Login>
        },
        {
          path: "/cl",
          element:<CustomerList></CustomerList>
        },
        {
          path: "/punjabi",
          element:<CardPunjabi></CardPunjabi>
        },
        {
          path: "/tshirt",
          element:<CardTshirt></CardTshirt>
        },
        {
          path: "/shawl",
          element:<CardShawl></CardShawl>
        },
        {
          path: "/three-piece",
          element:<CardThreePiece></CardThreePiece>
        },
    ]
    
  },
]);

export default router;