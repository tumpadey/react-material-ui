import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardContent';


import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      border:'2px solid gray',
      margin:'10px',
      padding: '5px'
      },
  
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
      color:'black',
      fontSize:14

    },
  });


const Comments = (props) => {
    const classes = useStyles();
    const {   postId, id, email, body} = props.comment;
    return (
             
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
                   postId: {postId}
          </Typography>
           <Typography className={classes.title} color="textSecondary" gutterBottom>
                   id: {id}
          </Typography> 
         
         
          <Typography className={classes.pos} color="textSecondary">
           {email}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
           {body}
          </Typography>
          
        </CardContent>
       
      </Card>



        
    );
};

export default Comments;