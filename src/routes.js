import { HomePage } from "./pages/home-page.jsx";
// import {ReviewApp} from './pages/review-app.jsx'


// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/:page",
    component: HomePage,
    label: "Home",
  },
  // {
  //     path:'/review',
  //     component: ReviewApp,
  //     label: 'Reviews'
  // },
  // {
  //     path:'/chat',
  //     component: ChatApp,
  //     label: 'Chat'
  // }
];

export default routes;
