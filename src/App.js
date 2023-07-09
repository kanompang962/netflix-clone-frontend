import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Auth from './pages/Auth';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' exact component={Auth} />
        <Route path='/watch/:movie' exact component={Watch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
