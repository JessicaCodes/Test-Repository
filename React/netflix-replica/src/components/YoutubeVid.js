import React from "react";

class YoutubeVid extends React.Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps, "<--- previous propss");
  }

  render() {
    return (
      <iframe
        width="560"
        height="315"
        src={`https://image.tmdb.org/t/p/w500${this.props.vidKey}`}
        title="YouTube video player"
        frameborder="5"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }
}

export default YoutubeVid;