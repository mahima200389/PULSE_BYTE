import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast'; 
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const {loading}=useSelector(state=>state.alerts);
  return (
    <BrowserRouter>
    {loading &&(
    <div className='spinner-parent'>
      <div class="spinner-border" role="status">
</div>
    </div>)}
    <Toaster position="top-center" reverseOrder={false}/>
    <Routes>
    <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
    <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;