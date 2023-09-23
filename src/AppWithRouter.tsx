import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom"
import Home from "./pages/Home"
import Country from "./pages/Country"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country",
        element: <Country />,
      },
    ],
  },
])


function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Where in the world?</h1>
      </header>
      <Outlet />
    </div>
  )
}

function AppWithRouter() {
  return <RouterProvider router={router} />
}

export default AppWithRouter
