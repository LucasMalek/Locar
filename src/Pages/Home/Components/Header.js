import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    
    img: {
        maxHeight: 62,
        alignSelf: 'center',
        

    },
    grow: {
        flexGrow: 1,
    },
    

});


function Header() {
    const classes = useStyles();
    return (
        <Box style={{display:'flex', paddingBottom: 0}}>
        <AppBar position='fixed' color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="./images/locar.jpg" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
                <Button
                variant="outlained"
                color="primary"
                startIcon={<DirectionsCarIcon />}
                component={Link} to="/Catalogo">Catálogo</Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Header;