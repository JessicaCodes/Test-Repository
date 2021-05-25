import React, { Component } from 'react';
import './MovieCategory.css'
import MovieCard from '../MovieCard/MovieCard'

class MovieCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            left: -1000
        }
    }
    
    renderMovieList(list){
        return list.map(movieObj => (
            
        <MovieCard movie={movieObj} key={movieObj.id}/>

        ))
      }

      previousScroll = () => {
          this.setState({left:this.state.left+300})
      }

      nextScroll = () => {
        this.setState({left:this.state.left-300})
    }

    render() {
        return(
            <div className="category-container">
                <p>{this.props.title}</p>
                <button className="previous" onClick={this.previousScroll}>{"<"}</button>
                <button className="next" onClick={this.nextScroll}>{">"}</button>
                <section className="category-inner-container" style={{left: this.state.left}}>
                    { this.renderMovieList(this.props.movies.concat(this.props.movies)) }
                    
                </section>
            </div>
        )
    }
}

export default MovieCategory;