import Home from '/Home';
import Sobre from '/Sobre';
import Contato from './Contato';
import NotFound from './NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/sobre',
    exact: true,
    component: Sobre,
  },
  {
    path: '/contato',
    exact: true,
    component: Contato,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
