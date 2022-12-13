import LoginPage from '../page/LoginPage'
import HomePage from '../page/HomePage';
import MyHomePage from '../page/MyHomePage';
import Admin from '../page/Admin';


const authRoutes=[
    {
        path: "",
        exact: true,
        page: LoginPage,
        role:[],
    },
    {
        path: "/page",
        exact: true,
        page: HomePage,
        role:[],
    },
    {
        path: "/myhome/*",
        exact: true,
        page: MyHomePage,
        role:[],
    },
    {
        path: "/admin",
        exact: true,
        page: Admin,
        role: [],

    }
]

export default authRoutes;