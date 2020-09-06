import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      border:'2px solid lightBlue',
      margin:'auto',
      width:'50%',
      marginTop:20,
      },
  
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      color:'black',
      fontSize:20

    },
  });

const Post = (props) => {
    const classes = useStyles();
    const { id, title} = props.post;
    const history = useHistory();
    const handleClick = (postId) =>{
        history.push(`/post/${postId}`);
    }
   
    return (
        <Card className={classes.root}>
            <CardContent>
            
             <Typography className={classes.pos} color="textSecondary">
              id:{id}
              </Typography>
              
              <Typography className={classes.pos} color="textSecondary">
              {title}
              </Typography>
            
              </CardContent>
              <CardActions>
              
              <Button  variant="contained" color="primary"onClick={() =>handleClick(id)} >
              SEE MORE:
                  </Button>
            </CardActions>
        </Card>

        
      
    );
};

export default Post;