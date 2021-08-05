import {GlobalStyle} from './GlobalStyles'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import {Navbar} from './Components';

function App() {
  return (
    <Router>
      <GlobalStyle />
        <Navbar />
    </Router>
  );
}

export default App;
