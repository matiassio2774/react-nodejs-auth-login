import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HOME, LOGIN, LOGOUT, PRIVATE, REGISTER} from './config/routes/paths'
import { AuthContextProvider } from './context/authContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Private from './pages/Private'
import PublicRoute from './components/router/PublicRoute'
import PrivateRoute from './components/router/PrivateRoute'
import Register from './pages/Register'
import './app.css'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute />}> 
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTER} element={<Register />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Private />} />
            <Route path={LOGOUT} element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
