
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.jsx';
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignupPage'
import Navbar from './components/Navbar';

import UploadForm from './components/UploadFolder.jsx';
import Footer from './components/Footer.jsx';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<><Navbar/> <SignUpPage/><Footer/></>}/>
        <Route path='/sign-in' element = {<><Navbar/> <LoginPage/><Footer/></>} />
        {/* <Route path='/apply' element = {<><Navbar/> <UploadForm/></>} /> */}
      </Routes> 
    </BrowserRouter>
  )
}

export default App
