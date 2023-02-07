import React from "react";
import {ListItem, MovieInfo, MovieTitle, Overview, MovieScore } from './MovieCard.styled'
import defaultMovie from '../../images/defaultMovie.png'

export const MovieCard = ({item}) => {
console.log('item',item)

  return (
    
    <ListItem key={item.id}>
      <img
        src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : defaultMovie}
        alt=""
        width={400}
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
          {!item?.genres?.length ?<p>no info</p> : item.genres.map(genre => (<span key={genre.id}>{genre.name}, </span>))}
          <br />
          <br /> 
        <b >Overview :</b>
        <Overview >{item.overview}</Overview>
        
       
      </MovieInfo>
    </ListItem>
  );
};
