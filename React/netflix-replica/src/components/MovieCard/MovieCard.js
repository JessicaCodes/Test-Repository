import React, { Component } from 'react';
import { getVideosById } from '../../tmdbRequests';
import './MovieCard.css';

class MovieCard extends Component {
    constructor(props){
        super(props);
            this.state = {
                expanded: false,
                videos: []

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
                <h2>Release Date: {this.props.movie.release_date}</h2>
                <h2>Runtime: {this.props.movie.runtime}</h2>
                <h2>Average Votes: {this.props.movie.vote_average}</h2>
                </div>
            )
    }
}

export default MovieCard;