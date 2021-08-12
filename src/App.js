import {GlobalStyle} from './GlobalStyles'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import {Navbar,Footer} from './Components';
import Homepg from './pages/HomePg/Homepg';
import Speakers from './pages/Speakers/Speakers';
import Schedule from './pages/Schedule/Schedule';
import CodeOfConduct from './pages/CodeOfConduct/CodeOfConduct';



function App() {
  return (
    <Router>
      <GlobalStyle />
        <Navbar />
        <Switch>

        <Route path='/' component={Homepg} />
        <Route path='/Speakers' component={Speakers} />
        <Route path='/Schedule' component={Schedule} />
        <Route path='/Code of Conduct' component={CodeOfConduct} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
