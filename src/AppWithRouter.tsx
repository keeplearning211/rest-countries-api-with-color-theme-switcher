import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from 'react-router-dom'
import CountryList from './pages/CountryList'
import Country from './pages/Country'
import Header from './components/Header'
import { Paper } from '@mui/material'
import { useTheme } from '@mui/material'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <CountryList />,
      },
      {
        path: '/country/:code',
        element: <Country />,
      },
    ],
  },
])

function App() {
  const theme = useTheme()
  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      gap: {
        xs: theme.spacing(1),
      },
      minHeight: '100vh',
      bgcolor: 'background.main'
    }}>
      <Header />
      <Outlet />
    </Paper>
  )
}

function AppWithRouter() {
  return <RouterProvider router={router} />
}

export default AppWithRouter
