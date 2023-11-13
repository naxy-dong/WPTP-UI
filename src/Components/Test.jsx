
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Test() {
    return (
        <Modal >
            <Modal.Header >
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" >
                    Close
                </Button>
                <Button variant="primary" >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
