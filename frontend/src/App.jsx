import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Produtos from './pages/Produtos';
import Categorias from './pages/Categorias';
import Perdas from './pages/Perdas';

import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutDefault from './layouts/LayoutDefault';
import Usuarios from './pages/Usuarios';
import UsuariosForm from './pages/Usuarios/UsuarioForm';
import Receitas from './pages/Receitas';
import ReceitaForm from './pages/Receitas/ReceitaForm';
import AuthContext from './contexts/auth';
import RoutePrivate from './routes/RoutePrivate';

function App() { 

  const[isLogged, setIsLogged] = useState(false);
  const[user, setUser] = useState(null);

  const rotas = [
    {
      path: '/',
      element: <Painel />,
      isLayout: true,
      isPrivate: true
    },
    {
      path: '/teste',
      element: <Painel />,
      isLayout: false,
      isPrivate: true
    },
    {
      path: '/produtos',
      element: <Produtos />, 
      isLayout: true,
      isPrivate: true
    },
    {
      path: '/categorias',
      element: <Categorias />,
      isLayout: true,
      isPrivate: true
    },
    {
      path: '/usuarios',
      element: <Usuarios />,
      isLayout: true,
      isPrivate: true
    },
    {
      path: '/usuarios/novo',
      element: <UsuariosForm />,
      isLayout: true,
      isPrivate: true
    },
    {
      path: '/usuarios/editar/:id',
      element: <UsuariosForm />,
      isLayout: true,
      isPrivate: true
    },
    {
      path: '/login',
      element: <Login />,
      isLayout: false,
      isPrivate: false
    },
    {
      path: '/perdas',
      element: <Perdas />, 
      isLayout: true,
      isPrivate: true
    },
    {
      path: '/receitas',
      element: <Receitas />, 
      isLayout: true,
      isPrivate: true
    },
     {
      path: '/receitas/novo',
      element: <ReceitaForm />, 
      isLayout: true,
      isPrivate: true
    },
  ];

  function checkRouterAndLayout(item) {

    if(item.isPrivate && item.isLayout) {
      return (
        <RoutePrivate item={item}>
          <LayoutDefault>
            {item.element}
          </LayoutDefault>
        </RoutePrivate>
      )
    }

    if(item.isPrivate && item.isLayout === false) {
      return (
        <RoutePrivate item={item}>
            {item.element}
        </RoutePrivate>
      )
    }

    if(item.isPrivate === false && item.isLayout) {
      return (
        <LayoutDefault item={item}>
          {item.element}
        </LayoutDefault>
      )
    }

    return <>{item.element}</>;
  }

  useEffect(() => {
    if(localStorage.getItem('caixapay@user') != null) {
      const usuario = JSON.parse(localStorage.getItem('caixapay@user'));
      setUser(usuario);
      setIsLogged(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, user, setUser }}>
      isLogged: {isLogged ? "Logado" : "Deslogado"}
      <BrowserRouter>
        <Routes>
          {rotas.map((item, indice) => (
            <Route key={indice} path={item.path} element={checkRouterAndLayout(item)} />
          ))}
        </Routes>
      </BrowserRouter>      
    </AuthContext.Provider>
  )
}

export default App
