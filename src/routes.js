import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Inspiracoes from './pages/Inspiracoes';
import Vagas from './pages/Vagas';
import Tutoriais from './pages/Tutoriais';
import Nps from './pages/Nps';
import NpsEnviado from './pages/NpsEnviado';

function Routes() {
    return (
        // <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/inspiracoes" component={Inspiracoes}/>
                <Route path="/vagas" component={Vagas}/>
                <Route path="/tutoriais" component={Tutoriais}/>
                <Route path="/nps" component={Nps} />
                <Route path="/npsEnviado" component={NpsEnviado} />
            </Switch>
        // </BrowserRouter>
    )
}

export default Routes