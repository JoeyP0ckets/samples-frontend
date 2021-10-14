import './App.css';
import AuthProvider from './context/AuthProvider';
import Navbar from '../src/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 
  
  return (
    <AuthProvider>
      <div className="App">
        <Navbar/>
      </div> 
    </AuthProvider>
  );
 
}

export default App;
