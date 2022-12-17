
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
import '@fontsource/roboto/300.css';


function App() {

  const [posts, setPosts] = useState([])
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [token, setToken] = useState('')
  const [renderCondition, setRenderCondition] = useState (false)
  

  return (
    <Router>
      <div className="App">
        
        <Route path = "/login">
          <StaticHeader />
          <LoginForm 
            renderCondition = {renderCondition}
          />
        </Route>

        <Route path = "/register">
          <StaticHeader />
          <RegisterForm 
            isAuthorized = {isAuthorized}
            setIsAuthorized = {setIsAuthorized}
            setToken = {setToken}
            renderCondition = {renderCondition}
            setRenderCondition = {setRenderCondition}
          
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

