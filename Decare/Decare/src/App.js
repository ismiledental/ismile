import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';

function App() {
  return (
   <>
      <Router >
          <Routing />
      </Router>
      <a
        href="https://wa.me/+918770803211"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
   </>
  );
}

export default App;
