
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.jsx';
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignupPage'
import Navbar from './components/Navbar'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<><Navbar/> <SignUpPage/></>}/>
        <Route path='/sign-in' element = {<><Navbar/> <LoginPage/></>} />
        <Route path='/apply' element = {<><Navbar/> <FileUpload/></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
