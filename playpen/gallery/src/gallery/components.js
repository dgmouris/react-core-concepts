import React from 'react';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft  from 'react-icons/lib/fa/angle-left';
 //QUESTIONS:
// question Can I access props some how through the event object?
// can I send props to an anonymous function and then call props not sure what
// this relates to
// export function best practices should this script be a single compoentent using
// export default or
// the way I did it is OK
 

const GalleryHeading = (props) => <h2 className="gallery-heading" key={props.index}>{props.heading}</h2>;

 
const PreviousSlide = (props) => {
    function onChangeSlide(e){
      props.changeSlide(-1);
    }
  return <button data-value="0" onClick={onChangeSlide}><FaAngleLeft className="gallery-icon"/> </button>;
}
 

const NextSlide = (props)  => {
    function onChangeSlide(e){
        props.changeSlide(1 );
      }
return <button data-value="1" onClick={onChangeSlide}> <FaAngleRight className="gallery-icon"/></button>
};


const GalleryImage = (props)=> {
return(<div className="gallery-slide">
    <img  src= {`./slides/${props.path}.jpg`} alt="hello world"/>
</div>)

}
 
 

export   { GalleryImage, GalleryHeading, NextSlide, PreviousSlide }

 
 