import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Order from './componets/Order/Order';
import Products from './componets/Products/Products';
import Register from './componets/Register/Register';
import RequireAuth from './componets/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/products' element={
         <RequireAuth>
           <Products></Products>
         </RequireAuth>
       }></Route>
       <Route path='/order' element={
         <RequireAuth>
           <Order></Order>
         </RequireAuth>
       }></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
