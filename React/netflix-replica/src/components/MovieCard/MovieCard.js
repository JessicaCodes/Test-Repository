import React, { Component } from 'react';
import { getVideosById } from '../../tmdbRequests';
import './MovieCard.css';

class MovieCard extends Component {
    constructor(props){
        super(props);
            this.state = {
                expanded: false,
                vidos: []

            }
        }

        handleClick = () => {
         this.setState({expanded:!this.state.expanded})
        }
        render(){
            return (
                <div onClick={this.handleClick} className="movie-obj">
                <h2>{this.props.movie.title}</h2>
                {this.state.expanded && <p>{this.props.movie.overview}</p>}
                <img className="poster" src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>
                </div>
            )
    }
}

export default MovieCard;