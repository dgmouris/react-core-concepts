/*
Gallery Display- outputs index state 
*/

function GalleryDisplay(props){
   return <div className="display-counter" key={props.index}><p>Current Index {props.index}</p></div>
} 

/*
NextSlide - increment 
*/
 function NextSlide(props){
    function onUpdateCounter(e){
     props.incrementCounter();
    }
    return <button class="ui-btn-blue" onClick={onUpdateCounter}><i class="material-icons">chevron_right</i> </button>
 }
/*
PreviousSlide - decrement 
*/
 function PreviousSlide(props){
    function onUpdateCounter(e){
     props.decrementCounter();
    }
    return <button class="ui-btn-blue" onClick={onUpdateCounter}><i class="material-icons">chevron_left</i>  </button>
 }
 /*
GalleryImage - increment 
*/
 function GalleryImage(props){
   return <img src= {`img/${props.path}.png`}  />
 }
  var Gallery = createReactClass({

      getInitialState: function(){
        var productData = window.AppData;
       
        var defaultProduct= productData.bikes[0];
        return {
            index:0,
            max: productData.bikes.length-1,
            min: 0,
            products: productData,
            path: defaultProduct.image
        }
         
      },
      incrementCounter:function(){
          if(this.state.index <  this.state.max){
             this.state.index = this.state.index +1;
          }else{
           this.state.index = this.state.max;
          }
         this.setState({
             index: this.state.index
         })
         this.state.path = this.state.products.bikes[this.state.index].image
      },
      decrementCounter:function(){
          if(this.state.index <= 0){
             this.state.index=0;
          }else{
              this.state.index = this.state.index-1;
          }
          this.state.path = this.state.products.bikes[this.state.index].image
        this.setState({
            index: this.state.index
        })
      },
      render: function(){
        return(
            <div className="gallery">
            <div className="galery-image">
               <GalleryImage path={this.state.path}/>
            </div>
            <div className="gallery-controls">
                <PreviousSlide decrementCounter={this.decrementCounter}/>
                <NextSlide incrementCounter={this.incrementCounter}/>
            </div>
            <div className="gallery-display">
                <GalleryDisplay index={this.state.index}/>
            </div>
            </div>
        ) 
      }
  })
 
 
  ReactDOM.render(<Gallery/>, document.getElementById('root'));