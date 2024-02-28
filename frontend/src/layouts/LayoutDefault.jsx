import { Col, Container, Row } from "react-bootstrap";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import './style.css';

function LayoutDefault(props) {

    return (
        <Container fluid>
            <Row>
                <Col md={2} className="barra">
                    <Menu />
                </Col>
                <Col md={10}>
                    <Row className="header">
                        <Col>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {props.children}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="footer">
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}

export default LayoutDefault;