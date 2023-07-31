
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Blogs from './components/Blogs';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import Navbar from './components/Navbar';
import EditBlog from './components/EditBlog';


function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route exact path={"/signup"} element={<Signup/>}/>
    <Route  path={"/login"} element={<Login/>}/>
    <Route  path={"/blogs"} element={<Blogs/>}/>
    <Route  path={"/"} element={<Home/>}/>
    <Route  path={"/createblog"} element={<CreateBlog/>}/>
    <Route  path={"/blog/edit/:id"} element={<EditBlog/>}/>
   </Routes>
    </div>
  );
}

export default App;
