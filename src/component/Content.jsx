import { Card, CardContent, Typography,CardMedia,CardActions,Button } from "@mui/material";
import React, {useState} from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Content(props) {
    const [open,setOpen] = useState(false);

    function handleClick(){
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }
 
    return(
        <Card sx={{maxWidth: 345}} >

        <CardMedia   
        sx={{height: 140}}
        image={props.image} title="recipe"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {props.name}
            </Typography> 
            <Typography variant="body2" component="text.secondary">
             {props.description}
             </Typography>
        </CardContent> 
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" onClick={handleClick}>Learn More</Button>
        </CardActions>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Recipe"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>





        </Card>   
        

    )

}

export default Content;

