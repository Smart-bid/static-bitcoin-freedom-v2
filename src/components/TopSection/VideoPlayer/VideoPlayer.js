import React, { Component } from 'react'
import ReactPlayer from 'react-player'

 
export default class VideoPlayer extends Component {

  render () {
    return (
      <div className="VideoPlayer">
        <ReactPlayer url={this.props.link} playing={false} controls={true} muted width='100%' height='100%' onClick={this.props.trackVideoPlay}/>
      </div>
    )
  }
}