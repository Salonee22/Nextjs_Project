import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';


const useStyles = makeStyles(theme => ({
  Login:{
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
  Header: {
    backgroundColor: 'MeduimSeaGreen'
  }

  
}));


function Login(){
  const [userID,setUserID] = useState("");
  const [password,setPassword]= useState("");

  const classes = useStyles();

  const verifyUser=()=>{
    if (userID === localStorage.getItem("email") && password === localStorage.getItem("password")){
      alert("Login Successful");
      Router.push("/Profile");
      
    }
    else{
      alert("Please Enter correct username and password")
    }
  }
  const doRegister = () => {
    Router.push("/Register");
  }
    return(
        <Card className={classes.Login}>
          <CardHeader className={classes.Header} title="Login Page" titleTypographyProps="Login Page">
            
          </CardHeader>
        
          <CardContent className={classes.CardContent}>
            <TextField id="user_id" label="User Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
            value={userID} onChange={event => setUserID(event.target.value)}/>
            <TextField type="password" id="password" label="Password" variant="outlined" color="primary" className="password"style={{padding:9}}
            value={password} onChange={event => setPassword(event.target.value)}/>
            
              <div className={classes.ButtonClass}>
                <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={verifyUser}>Login</Button>
                <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doRegister}>Register</Button>
              </div>
              
              
              {}
          </CardContent>
          
  
        </Card>
        
        
    )
}

export default Login;