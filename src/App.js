// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Card from './Card';
// class App extends React.Component{
//   render(){
//     return(
//       <Card  
//       viewers = {'74.1k'}
//       hometeam ={'CSK'}
//       awayTean={'kkr'}
//      />

//     );

//   }
// }
// export default App;


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

import tileData from './tileData';
var imageName = require('./image.png');
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    width:"100%",
    background:"white",
    color:"black",
    display:"flex",
    paddingLeft:"5px",
    justifyContent:"center"

  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  live:{
    width:"100px",
    height:"10px",
    background:"red"
  },
  imgFullHeight:{
    height:"50%"
  },
  header :{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  titleWrap:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
  }
  
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
class App extends React.Component {
  onClick =()=>{
    console.log('working');
  }
  render(){
    const { classes ,tile} = this.props;
     console.log('this.props',this.props);
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile   key={tile.title}>

              <img   className ={classes.imgFullHeight} src={imageName } alt={tile.title}  onClick ={this.onClick} />
              <div className={classes.header}>
              <p> 70k Views </p>
              <p ><strong> Live</strong></p>
              </div>
            
               
              <GridListTileBar  
                title={'CSK vs MUM '}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                  titleWrap:classes.titleWrap
                }}

              />
            </GridListTile>
          ))}
          
        </GridList>
      </div>
    );
  }
  
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);