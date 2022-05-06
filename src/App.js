import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/About/About';
import SignIn from './components/Accounts/SignIn';
import SignUp from './components/Accounts/SignUp';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddedItems from './components/ManageInventory/AddedItems';
import AddInventory from './components/ManageInventory/AddInventory';
import Inventories from './components/ManageInventory/Inventories';
import InventoryDetails from './components/ManageInventory/InventoryDetails';
import InventoryList from './components/ManageInventory/InventoryList';
import ManageInventory from './components/ManageInventory/ManageInventory';
import UpdateInventory from './components/ManageInventory/UpdateInventory';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='inventories' element={
          <RequireAuth>
            <Inventories />
          </RequireAuth>} />
        <Route path='addinventory' element={
          <RequireAuth>
            <AddInventory />
          </RequireAuth>} />
        <Route path='minventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>} />
        <Route path='inventory/:id' element={
          <RequireAuth>
            <InventoryDetails />
          </RequireAuth>} />
        <Route path='editInventory/:id' element={
          <RequireAuth>
            <UpdateInventory />
          </RequireAuth>} />
        <Route path='items' element={
          <RequireAuth>
            <AddedItems />
          </RequireAuth>} />
        <Route path='inventoryList' element={
          <RequireAuth>
            <InventoryList />
          </RequireAuth>} />
        <Route path='blog' element={<Blog />}/>
        <Route path='about' element={<About />}/>
        <Route path='login' element={<SignIn />}/>
        <Route path='register' element={<SignUp />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
      
      <ToastContainer />
    </div>
  );
}

export default App;
