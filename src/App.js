import './App.css';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './context/AuthProvider';
import Navbar from '../src/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
 
  
  return (
    <SnackbarProvider>
      <AuthProvider>
        <div className="App">
          <Navbar/>
        </div> 
      </AuthProvider>
    </SnackbarProvider>
  );
 
}

export default App;
