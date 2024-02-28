import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../config/Api';
import Message from '../../config/Message';
import React from 'react';

function Usuarios() {
    const[lista, setLista] = React.useState([]);
    const navigate = useNavigate();
    async function getUsuarios(){
        const response = await Api.get('/usuarios');
        setLista(response.data);
    }

    async function deleteUsuario(id){
        Message.confirmation('Atenção', 'Deseja deletar este registro?', async () => {
            await Api.delete('/usuarios/'+id);
            alert("Usuario excluido com sucesso");
            getUsuarios();
        });
        
    }

    function editarUsuario(id) {
        navigate('/usuarios/editar/'+id);
    }

    React.useEffect(() => {
        getUsuarios();
    }, []);


    return (
        <>
            <div className='mt-3'></div>
            <Row>
                <Col md={10}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Pesquisa" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Link to="/usuarios/novo">
                        <Button variant='success'>Novo Usuário</Button>    
                    </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table hover striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Login</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map((item, indice) => (
                                <tr key={indice}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Button variant='primary' size='sm' onClick={() => editarUsuario(item.id)}>Editar</Button>
                                        {` `}
                                        <Button variant='danger' size='sm' onClick={() => deleteUsuario(item.id)}>Excluir</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>            
        </>
    )
}

export default Usuarios;