
import { Navbar } from './components/navbar/Navbar'
import "./app.scss"
import { Home } from './components/home/Home'
import { Friends } from './components/friends/Friends'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";



function App() {
 
  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/friends",
          element: <Friends />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
