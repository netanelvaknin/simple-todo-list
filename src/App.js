import React, {lazy} from 'react';
import './App.css';
import 'normalize.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

// Pages
const Todos = lazy(() => import('./pages/todos/Todos'));
const AddTodos = lazy(() => import('./pages/add-todos/AddTodos'));
const About = lazy(() => import('./pages/about/About'));

const todosRoutes = [
  { path: '/', component: <Todos /> },
  { path: '/add-todos', component: <AddTodos /> },
  { path: '/about', component: <About /> }
];

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {
          todosRoutes.map(route => (
            <Route 
              key={route.path} 
              exact 
              path={route.path}>
              {route.component}
            </Route>
          ))
        }
      </Switch>
    </div>
  );
}

export default App;
