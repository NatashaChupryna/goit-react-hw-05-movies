import React from "react";
// import {useNavigate, useLocation} from 'react-router-dom'
import {ListItem, MovieInfo, MovieTitle, Overview, MovieScore } from './MovieCard.styled'
import defaultMovie from '../../images/defaultMovie.png'

export const MovieCard = ({item}) => {
// const navigate = useNavigate();
// const location = useLocation();
// const fromPage = location.state?from?.pathname; 

  return (
    
    <ListItem key={item.id}>
      <img
        src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : defaultMovie}
        alt=""
        width={300}
      />
      <MovieInfo>
        <MovieTitle>{item.original_title}</MovieTitle>
        <b>Release date : {item.release_date}</b>
        <br />
        <br />
        <b>User score : 
          <MovieScore>{Math.round(item.vote_average * 10)}%</MovieScore>
          </b>
          <br />
          <br />
          {/* <b>Genres : {item.genres.map(genre => (<span key={genre.id}>{genre.name}, </span>))}</b> 
          <br />
          <br /> // не виходить меп жанрів, жанри */}
        <b >Overview :</b>
        <Overview >{item.overview}</Overview>
        
       
      </MovieInfo>
    </ListItem>
  );
};
