import React from 'react';
import LeftDrawer from '../Components/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Footer from '../Components/Footer';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const drawerWidth = 240;

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:500px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexGrow: 1
  },
  root2: {
   flexDirection: 'column'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(8,10,2,0),
  },

  logo: {
    maxHeight: 62,
    alignSelf: 'center',
},

container: {
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5)
},
Drawer: {
  flexDirection: 'column',
  alignItems: 'center'
},
foo: {
  width: '100%',
  backgroundColor: 'white',
},
toptext: {
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  paddingTop: 70,
  width: '100%',
  heith: 301,
  backgroundImage: 'url(/images/grey.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
},
image: {
  backgroundImage: 'url(./images/opa.jpg)',
  width: '100%',
  height: '529px',
  backgroundSize: 'cover',
},
back: {
 
  backgroundColor: '#B8B8B8',
}
}));



function Funcionario() {

  const classes = useStyles();

  
    return(
      <div className={classes.root2}>
        <div className={classes.toptext} >
       <ThemeProvider theme={theme}>
       <Typography  style={{paddingLeft: 290, paddingBottom: 10, color: '#E6E6FA'}} variant="h3">Registrar um veículo</Typography>
       </ThemeProvider>
         </div>
      <div className={classes.root}>
        
        <div >
        <LeftDrawer />
        </div>
        <div className={classes.content}>
        
      
       <Grid container spacing={3} 
        justify="center"
        alignItems="center"
       > 
       <Grid
       item
       container
       className={classes.image}
       md={6}
       >

       </Grid>
       <Grid
       item
       container
       md={6}
       className={classes.back}
       >
       <Grid item xs={12} >
      <form className={classes.container}>
        <Typography variant="h6" >Modelo</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="modelo"
        label="Modelo do carro"
        name="Modelo"
        autoComplete="Modelo"
        autoFocus
        >
        </TextField>
      </form>
      </Grid>
      <Grid item xs={6}> 
      <form className={classes.container}>
        <Typography variant="h6" >Quilometragem</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Quilometragem"
        label="Quilometragem"
        name="Quilometragem"
        autoComplete="Quilometragem"
        autoFocus
        InputProps={{
          startAdornment: <InputAdornment position="start">Km</InputAdornment>,
        }}
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={6}>
      <form className={classes.container}>
        <Typography variant="h6" >Ano</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Ano"
        label="Ano do carro"
        name="Ano"
        autoComplete="Ano"
        autoFocus
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={6}> 
      <form className={classes.container}>
        <Typography variant="h6" >Valor</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Quilometragem"
        label="Quilometragem"
        name="Quilometragem"
        autoComplete="Quilometragem"
        autoFocus
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={6}>
      <form className={classes.container}>
        <Typography variant="h6" >Placa</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Plca"
        label="Placa"
        name="Placa"
        autoComplete="Placa"
        autoFocus
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={12}>
          
      <form className={classes.container} >
        <Typography variant="h6" >Informações adicionais</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Info"
        label="Informações adicionais"
        name="Info"
        autoComplete="Info"
        autoFocus
        multiline
        rows = {4}
        >
        </TextField>
      </form>
        </Grid>
       </Grid>
     
       </Grid>
       
        </div>
    </div>
    <div  className={classes.foo}>
    <Footer />
    </div>
    </div>
    )

}

export default Funcionario
