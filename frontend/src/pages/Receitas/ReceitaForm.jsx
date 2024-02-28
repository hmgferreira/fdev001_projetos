import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Api from '../../config/Api';

function ReceitaForm() {
    return (
        <>
                <div className='mt-3'></div>
        <Row>
            <Col md={10}>
                <Form>
                    <h6>Nome</h6>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Nome" /> <br />
                    <h6>Valor</h6>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="R$:" /> <br />
                    </Form.Group>
                    <h6>Data</h6>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="____/____/____" /> <br />
                    </Form.Group>
                <Link to="/usuarios/novo">
                    <Button variant='success'>Enviar</Button>    
                </Link>
                </Form>
            </Col>
            {/* <Col>
                <Link to="/usuarios/novo">
                    <Button variant='success'>Enviar</Button>    
                </Link>
    </Col> */}
        </Row>
        </>
    );
}

export default ReceitaForm;