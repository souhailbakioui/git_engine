import './App.css'
import User from './components/users/Users';
import Navbar from './components/partials/Navbar';
function App() {
  return (
    <div className="App">
        <Navbar/>
       <div className="container">
        <User/>
      </div>
    </div>
  );
}

export default App;
