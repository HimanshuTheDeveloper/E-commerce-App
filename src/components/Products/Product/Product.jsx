import React from 'react';
import {Card , CardMedia , CardContent , CardActions , Typography , IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './cartItemstyles';


const Product = ({ product , onAddToCart }) => {
    const classes = useStyles();
    // console.log(product);
    return (
        <Card className={classes.root} >
            {/* {console.log(product.image)} */}
            <CardMedia className={classes.media} image={product.media.source} title={product.name} >
                {/* <img src={product.image}></img> */}
            </CardMedia>
            <CardContent>
                <div className={classes.cardContent}></div>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="h5" gutterbottom>
                        {product.price.formatted_with_symbol}
                    </Typography>

            <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"  color="textSecondary"/>
            </CardContent>
            <CardActions disableSpacing className={classes.cartActions}>
                <IconButton aria-label="Add to Cart" onClick={() =>onAddToCart(product.id , 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
