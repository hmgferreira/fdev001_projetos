import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Api from '../../config/Api';
import Message from '../../config/Message';
function UsuarioForm() {

    const[data, setData] = useState({
        nome: '',
        email: '',
        senha: ''
    });
    const params = useParams();

    async function enviarForm(values, funcoes) {
        if(params.id) {

            Message.confirmation(
                "Atenção", 
                "Deseja atualizar estes registros?", 
                async function() {
                    const response = await Api.put('/usuarios/'+params.id, values);
                    funcoes.resetForm();
                    Message.success("Usuario Atualizado com Sucesso");
                    setData(response.data);
                }
            );
            
        } else {
            await Api.post('/usuarios', values);
            funcoes.resetForm();
            Message.success("Usuario Cadastro com Sucesso");
        }
    }

    async function getData() {
        const response = await Api.get('/usuarios/'+params.id);
        setData(response.data);
    }
    
    useEffect(() => {
        if(params.id) {
            getData();
        }
    }, []);

    return (
        <>
            <div className='mt-3'></div>
            <Link to="/usuarios">
                <Button variant='warning'>Voltar</Button>    
            </Link>
            <Row>
                <Col>
                    
                    <Formik 
                        initialValues={data}
                        enableReinitialize
                        onSubmit={(values, funcoes) => {
                            enviarForm(values, funcoes);
                        }}
                        validationSchema={Yup.object().shape({
                            nome: Yup.string().required('Campo obrigatório'),
                            email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
                            senha: Yup.string().required('Campo obrigatório').min(8, 'No mínimo 8 digitos.')
                        })}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <form>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    name='nome' 
                                    value={values.nome}
                                    onChange={handleChange} 
                                />
                                <p className='required'><ErrorMessage name='nome' /></p>
                                
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control 
                                    type='email' 
                                    name='email' 
                                    value={values.email}
                                    onChange={handleChange} 
                                />
                                <p className='required'><ErrorMessage name='email' /></p>

                                <Form.Label>Senha</Form.Label>
                                <Form.Control 
                                    type='password' 
                                    name='senha' 
                                    value={values.senha}
                                    onChange={handleChange} 
                                />
                                <p className='required'><ErrorMessage name='senha' /></p>

                                <Button variant='primary' type='button' onClick={handleSubmit}>Enviar</Button>
                            </form>    
                        )}
                    </Formik>
                    
                </Col>
            </Row>
        </>
    )
}

export default UsuarioForm;