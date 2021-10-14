import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Inspiracoes from './pages/Inspiracoes';
import Vagas from './pages/Vagas';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/inspiracoes" component={Inspiracoes}/>
                <Route path="/vagas" component={Vagas}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes