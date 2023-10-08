import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom"
import CountryList from "./pages/CountryList"
import Country from "./pages/Country"
import ThemeProvider from "./theme/ThemeProvider"
import Header from "./components/Header"
import { Paper } from "@mui/material"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CountryList />,
      },
      {
        path: "/country/:code",
        element: <Country />,
      },
    ],
  },
])

function App() {
  return (
    <ThemeProvider>
      <Paper >
        <Header />
        <Outlet />
      </Paper>
    </ThemeProvider>
  )
}

function AppWithRouter() {
  return <RouterProvider router={router} />
}

export default AppWithRouter
