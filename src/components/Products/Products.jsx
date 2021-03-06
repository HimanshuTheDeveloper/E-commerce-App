import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './productsStyles';

const products = [
    {id: 1 , name : 'Shoes' , description : 'Running shoes' , price : '$5' , image : 'https://source.unsplash.com/user/erondu/300x300'},
    {id: 2 , name : 'Macbook' , description : 'Apple Macbook', price : '$10', image : 'https://source.unsplash.com/random/300x300'}
];


const  Products = ( {products , onAddToCart}) => {
    const classes = useStyles();
    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}

        </Grid>
    </main>
    )
}
export default Products;
