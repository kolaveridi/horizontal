import React from 'react';
import  './Card.css';
var imageName = require('./image.jpg');
class Card extends React.Component{
    render(){
        return(
            <div className="card">

            <div className="image">
            <img  
             width="220px"
             height="160px"
             src={imageName}
             />
            </div>

              <div className="matchcard">
              <div>
               CSK   
              </div>
              <div>
                VS
              </div>
              <div>
              MUM
              </div>
                 
             </div>
             
            </div>
        );
    }
}
export default Card;