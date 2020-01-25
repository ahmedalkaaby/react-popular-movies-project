import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {fetchMoviesList} from '../actions';
import {URL_IMAGE_BASE} from '../constants';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap';

const HomePage = props => {
  const Movies=useSelector(state => state.home.movies);
  const dispatch=useDispatch();
  dispatch(fetchMoviesList());
  document.title = "Popular Movies - Your all-in-one movies home!";
return <>
<div className="Container">
<div className="movie_poster">
   {Movies.map(item=>
    <Link to={"/movie/" + item.id}><Card>
     <Card.Img src={URL_IMAGE_BASE + item.poster_path}  variant="top"/>
     <Card.Body>
     <h4>{item.title}</h4>
     <h5>{item.release_date}</h5>
     </Card.Body>
     </Card></Link>
   )} 
   </div>
  </div>
</>
};


export default HomePage;
