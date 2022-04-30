import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import SignIn from './components/Accounts/SignIn';
import SignUp from './components/Accounts/SignUp';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/ManageInventory/Inventory';
import InventoryDetails from './components/ManageInventory/InventoryDetails';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='minventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>}/>
        <Route path='' element={<Inventory />}/>
        <Route path='inventory/:id' element={
          <RequireAuth>
            <InventoryDetails />
          </RequireAuth>
        }/>
        <Route path='blog' element={<Blog />}/>
        <Route path='about' element={<About />}/>
        <Route path='login' element={<SignIn />}/>
        <Route path='register' element={<SignUp />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
