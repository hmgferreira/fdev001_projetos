import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Api from '../../config/Api';

function Receitas() {

    const[lista, setLista] = useState([]);
    const navigate = useNavigate();

    // FUNCAO
    function novaReceita() {
        navigate('/receitas/novo');
    }

    async function getData() {
        const response = await Api.get('receitas');
        setLista(response.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <Link to="/receitas/novo">Nova Receita</Link>
            <Button 
                variant='success' 
                size='sm'
                onClick={novaReceita}
                >Nova Receita</Button>

            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DESCRICAO</th>
                                <th>VALOR</th>
                                <th>DATA</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* interacoes com array */}
                            {lista.map((item, indice) => (
                                <tr key={indice}>
                                    <td>{item.id}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.data}</td>
                                    <td>
                                        <Button variant='primary'>Editar</Button>
                                        <Button variant='danger'>Excluir</Button>
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

export default Receitas;