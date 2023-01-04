
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
import CreatePost from './CreatePost';
import ProfilePage from './ProfilePage';


function App() {

  const [posts, setPosts] = useState([])
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [token, setToken] = useState('')
  const [renderCondition, setRenderCondition] = useState (false)
  const [userName, setUserName] = useState('')
  const [showAlert, setShowAlert] = useState (false)
  

  return (
    <Router>
      <div className="App">
        
        <Route path = "/login">
          <StaticHeader />
          <LoginForm 
            renderCondition = {renderCondition}
            setRenderCondition = {setRenderCondition}
            setIsAuthorized = {setIsAuthorized}
            setToken = {setToken}
            token = {token}
            setUserName = {setUserName}
            showAlert = {showAlert}
            setShowAlert = {setShowAlert}
          />
        </Route>

        <Route path = "/register">
          <StaticHeader />
          <RegisterForm 
            renderCondition = {renderCondition}
            setRenderCondition = {setRenderCondition}
          
          />
        </Route>

        <Route exact path = "/">
          <NavHeader />
          <Main 
            posts = {posts}
            setPosts = {setPosts}
            gatherPosts = {gatherPosts}
            token = {token}
            isAuthorized = {isAuthorized}
            userName = {userName}
          />
        </Route>

        <Route path = '/profile'>
          <NavHeader />
          <ProfilePage 
            token = {token}
            setShowAlert = {setShowAlert}
            setToken = {setToken}
          />

        </Route>

        <Route path = "/createPost">
          <NavHeader />
          <CreatePost 
            token = {token}
            setShowAlert = {setShowAlert}
          />

        </Route>

        <Footer />

      </div>
    </Router>
  );
}

export default App;

