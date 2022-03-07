import { Modal, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import "../movieList/movie.css"

const StyledModal = styled(Modal)`
  height: 350px; 
  position: absolute;
  z-index: 1000;
  left: 42%;
  sub: 50%;
  top: 10%;
  width: 300px;
`;

const Img = styled.img`
  width: 250px;
`;

const ModalMovie = (props) => {

    return (
        <StyledModal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.movieData.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Img
                    src={`https://image.tmdb.org/t/p/w1280/${props.movieData.poster_path}`}
                />
                <p>{props.movieData.overview}</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your comment"
                        />

                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {/* onClick={handleComment} */}
                        Submit
                    </Button>
                    <Button>
                        Add to Favorites
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </StyledModal>
    );
};

export default ModalMovie;