import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeButton from './MyButton';

export default function Home() {
    return (
        <>
            <h2>Your Tests</h2>
            {/* <Footer /> */}
            <HomeButton hasImage={false} />
            <br />
            <h2>Practice and Prepare</h2>
            <Container style={{ margin: '0px' }}>
                <Link to="/SAT">
                    <HomeButton hasImage={true} title="Test Preview" />
                </Link>
                <HomeButton hasImage={true} title="Full-length practice" />
            </Container>
        </>
    )
}