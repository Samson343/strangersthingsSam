
import './App.css';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StaticHeader } from './StaticHeader';
import Footer from './Footer';
import Main from './Main';
import NavHeader from './NavHeader';

function App() {
  return (
    <Router>
      <div className="App">

        <head>
        </head>
        
        <Route path = "/login">
          <StaticHeader />
          <LoginForm />
        </Route>

        <Route path = "/main">
          <NavHeader />
          <Main />
        </Route>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
