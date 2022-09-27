import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import 'react-toastify/dist/ReactToastify.css';
  

function App() {
 
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
