import React from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar>
            <Container>
                <Nav>
                    <img src="https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" style={{ width: 100, marginTop: -7 }} />
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">TV Shows</Nav.Link>
                    <Nav.Link href="/">Movies</Nav.Link>
                    <Nav.Link href="/fav">My List</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;