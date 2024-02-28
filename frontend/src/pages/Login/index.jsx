import React, { useContext } from 'react';
import Api from '../../config/Api';
import { Navigate, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import AuthContext from '../../contexts/auth';
import Message from '../../config/Message';

function Login() {

    const { isLogged, setIsLogged, setUser } = useContext(AuthContext);


    const[login, setLogin] = React.useState('');
    const[senha, setSenha] = React.useState('');
    const navigate = useNavigate();

    async function logar() {
        const resposta = await Api.get('usuarios?email='+login);
        if(resposta.data.length > 0) {
            const dados = resposta.data;
            const usuario = dados[0];
            if(usuario.senha == senha) {
                Message.success("Usuario logado com sucesso");
                setIsLogged(true);
                setUser(usuario);
                navigate('/');
                localStorage.setItem('caixapay@user', JSON.stringify(usuario));

            } else {
                Message.error("Usuario incorreto");
            }
        }
    }

    if(isLogged) {
        return <Navigate to="/" />
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className='mt-3'>
                        <label>Login</label>
                        <input className='form-control' type="text" onChange={e => setLogin(e.target.value)}/>
                    </div>
                    <div className='mt-3'>
                        <label>Senha</label>
                        <input className='form-control' type="password" onChange={e => setSenha(e.target.value)} />
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-success btn-sm' onClick={logar}>Acessar</button>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Login;