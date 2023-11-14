import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function LinkButton({ path, text, clickFunc }) {
    return (
        <Link to={path}>
            <Button variant="primary" onClick={clickFunc}>{text}</Button>
        </Link>
    )
}  