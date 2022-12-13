
import './App.css';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StaticHeader } from './StaticHeader';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header>
        </header> */}
        
        <Route path = "/login">
          <StaticHeader />
          <LoginForm />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
