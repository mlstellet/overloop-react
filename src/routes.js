import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Inspiracoes from './pages/Inspiracoes';

function Routes() {
    return (
        <Switch>
            <Route path="/home" exact componente={Home}/>
            <Route path="/inspiracoes" exact componente={Inspiracoes}/>
        </Switch>
    )
}

export default Routes