import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

export default function BottomNavbar({ prevClickFunc, nextClickFunc }) {
    return (
        <Navbar className="bg-body-tertiary fixed-bottom border-top border-1 border-secondary">
            <Container className="justify-content-end">
                <Row>
                    {prevClickFunc && <Col>
                        <Button variant="primary" >Back</Button>
                    </Col>}
                    {nextClickFunc && <Col>
                        <Button variant="primary" onClick={nextClickFunc}>Next</Button>
                    </Col>}
                </Row>
            </Container>
        </Navbar>
    );
}