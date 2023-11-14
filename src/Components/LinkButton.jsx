import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
    
export default function LinkButton({ path, text }) {
    return (
        <Link to={path}>
            <Button variant="primary">{text}</Button>
        </Link>
    )
}  