import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UsersDatails from './components/UsersDatails/UsersDatails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDeatails from './components/PostDeatails/PostDeatails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "users",
        loader:() => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users />
      },
      {
        path: "/users/user/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UsersDatails />
      },
      {
        path: "posts",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts />
      },
      {
        path: "/posts/post/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDeatails />
      }
   

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
