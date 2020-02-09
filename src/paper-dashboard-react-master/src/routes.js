/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import UserPage from "views/User.jsx";
import UpgradeToPro from "views/Upgrade.jsx";
import Login from "views/Login.jsx"

var routes = [
  {
    path: "/dashboard",
    name: "Make Your Choice",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },

  
  {
    path: "/notifications",
    name: "Make new user",
    icon: "nc-icon nc-single-02",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Edit your profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  
  {
    path: "/tables",
    name: "Make new channel",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-single-02",
    component: Login,
    layout: "/admin"
  }
];

var login_route = [{
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-single-02",
    component: Login,
    layout: "/admin"
  }];
export default routes;
