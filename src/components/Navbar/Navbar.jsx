import React from 'react';
import {AppBar, Toolbar , IconButton, Badge, MenuItem , Menu , Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import useStyles from './navbarStyles';
import logo from '../../assets/commerce.png';

const Navbar = ( {totalItems}) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appbar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                    My E-Commerce
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="Show Cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
