import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom"
import Home from "./pages/Home"
import Country from "./pages/Country"
import ThemeProvider from "./theme/ThemeProvider"
import Header from "./components/Header"

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
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

function AppWithRouter() {
  return <RouterProvider router={router} />
}

export default AppWithRouter
