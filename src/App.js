
import './App.css';
import LoginForm from './LoginForm';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <LoginForm />
        </header>
      </div>
    </Router>
  );
}

export default App;
