import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ModalMovie from "../modalMovie/ModalMovie";
import "../movieList/movie.css"

const SingleMovieCard = styled(Card)`
  width: 20vw;
  height: 100%;
  margin: 2.5vh;
  border-radius: 10%;
`;

const StyledImg = styled(Card.Img)`
  width: 20vw;
  height: 55vh;
  border-top-right-radius: 10%;
  border-top-left-radius: 10%;
`;

const StyledText = styled(Card.Text)`
  font-size: 12px;
  color: white;
`;

const Movie = (props) => {
    const [modalShow, setModalShow] = useState(false);
    // const [isFav, setIsFav] = useState(false);


    const onClickHandler = () => {
        setModalShow(true);
    };

    const onHideHandler = () => {
        setModalShow(false);
        // setIsFav(false);
    };
    
    return (
        <>
            <SingleMovieCard key={props.movie.title}>
                <StyledImg
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w1280/${props.movie.poster_path}`}
                />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <StyledText>{props.movie.overview}</StyledText>
                    <Button variant="secondary" onClick={onClickHandler}>Add To Favorites</Button>
                </Card.Body>
            </SingleMovieCard>
            <ModalMovie
                show={modalShow}
                movieData={props.movie}
                onHide={onHideHandler}
            />
        </>
    );
};

export default Movie;