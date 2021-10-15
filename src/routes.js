import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Inspiracoes from './pages/Inspiracoes';
import Tutoriais from './pages/Tutoriais';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/inspiracoes" component={Inspiracoes}/>
                <Route path="/tutoriais" component={Tutoriais}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes