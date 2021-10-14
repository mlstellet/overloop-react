import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Inspiracoes from './pages/Inspiracoes';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/inspiracoes" component={Inspiracoes}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes