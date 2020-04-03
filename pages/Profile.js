import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import FormDialog from './Edit';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles(theme => ({
    Profile:{
      backgroundColor: '#fff',
      minHeight: '381px',
      width: '500px',
      margin: '40px auto'

    },
    CardContent:{
        display: 'flex',
        justifyContent : 'center',
        flexDirection : 'column'
    },
    ButtonClass:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        
    },
    button: {
        margin:'10px'
    },
    Header : {
        backgroundColor: 'DodgerBlue'
    }
  }));


function Profile(){

    const [isopen,setIsopen] = useState(false);

    const classes = useStyles();

    const getName = () =>{
        const fullName= localStorage.getItem("firstName") +" " +localStorage.getItem("lastName");
        return fullName;

    };
    const doBack = () =>{
        Router.push("/Login");;

    };
    const doEdit =() =>{
        setIsopen(!isopen);
    }


    return(
        <Card className={classes.Profile}>
                <CardHeader className={classes.Header} title="Profile Page" titleTypographyProps="Profile Page">
                

                </CardHeader>
                    <CardContent className={classes.CardContent}>

                        <Typography variant="h6" gutterBottom>
                            Name : {getName()}
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            Phone Number :   {localStorage.getItem("phoneNum")}                  
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            City :   {localStorage.getItem("city")}                  
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            Email Id :   {localStorage.getItem("email")}                  
                        </Typography>
                        
                        

                        
                        <div className={classes.ButtonClass}>
                            <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doBack}>Back</Button>
                        
                        </div>
                        <div className={classes.ButtonClass}>
                            <Button variant="contained" color="primary" className={classes.button} type="submit"  style={{padding:9}} onClick={doEdit}>Edit</Button>
                        
                        </div>
                    </CardContent>
                    <FormDialog  isopen={isopen} onEdit={doEdit}/>


                
                {/* <FormDialog />  */}

            </Card>

    )
}

export default Profile;