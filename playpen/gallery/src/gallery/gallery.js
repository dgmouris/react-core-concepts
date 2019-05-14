import React, {Component} from 'react';
import './skin/gallery.css';
import { GalleryImage, GalleryHeading, NextSlide, PreviousSlide } from './components';
import  './data';
//to import artwork use import logo from './logo.svg';
// to import style use import './App.css';

class Gallery extends Component {
  
    constructor(props) {
      
      const appdata = window.appdata;
   
      super(props);
      this.state = {
        index : 0,
        max: appdata.slides.length-1,
        slides: appdata.slides
      };

      this.changeSlide = this.changeSlide.bind(this);
    }


    changeSlide(direction) {
        if(direction === 1){
          if(this.state.index < this.state.max){
            this.setState({index: this.state.index + direction})
          }
        }

        if(direction === -1){
          if(this.state.index > 0){
            this.setState({index: this.state.index + direction})
          }
        }
      
      
    }




    render() {
      return (
        <div className="gallery">
          <GalleryHeading heading={this.state.index}/>
          <GalleryImage path={this.state.slides[this.state.index].img}/>
          <PreviousSlide changeSlide={ this.changeSlide}/>
          <NextSlide changeSlide={ this.changeSlide} />
        </div>
     
    );
    }
  }

  export default Gallery;