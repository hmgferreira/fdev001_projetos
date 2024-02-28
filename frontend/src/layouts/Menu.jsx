import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

function Menu() {

    const { setIsLogged }  = useContext(AuthContext);

    function logout() {
        localStorage.removeItem('caixapay@user');
        setIsLogged(false);
    }

    return (
        <>
            <ul>
                <li>
                    <Link to="/">Painel</Link>
                </li>
                <li>
                    <Link to="/categorias">Categorias</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li>
                    <Link to="/usuarios">Usuários</Link>
                </li>
                <li>
                    <Link to="/perdas">Perdas</Link>
                </li>
                <li>
                    <Link to="/receitas">Receitas</Link>
                </li>
                <li>
                    <a href onClick={() => logout()}>Sair</a>
                </li>
            </ul>
        </>
    )
}

export default Menu;