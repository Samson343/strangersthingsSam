
import './App.css';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StaticHeader } from './StaticHeader';
import Footer from './Footer';
import Main from './Main';
import NavHeader from './NavHeader';
import RegisterForm from './RegisterForm';
import { gatherPosts } from './apiIndex';
import { useEffect, useState } from 'react';


function App() {

  const [posts, setPosts] = useState([])
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [token, setToken] = useState('')

  

  return (
    <Router>
      <div className="App">
        
        <Route path = "/login">
          <StaticHeader />
          <LoginForm />
        </Route>

        <Route path = "/register">
          <StaticHeader />
          <RegisterForm 
            isAuthorized = {isAuthorized}
            setIsAuthorized = {setIsAuthorized}
            setToken = {setToken}
          
          />
        </Route>

        <Route path = "/main">
          <NavHeader />
          <Main 
            posts = {posts}
            setPosts = {setPosts}
            gatherPosts = {gatherPosts}
          />
        </Route>

        <Footer />

      </div>
    </Router>
  );
}

export default App;

