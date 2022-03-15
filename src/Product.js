import React from 'react'
import "./Product.css"
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>Producto Descripcion</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>19.22</strong>
                </p>
                <div className='product__rating'>
                    <StarIcon color="action" />
                    <StarIcon color="action" />
                    <StarIcon color="action" />
                </div>
            </div>
            <img
                src='https://www.editorialjuventud.es/wp-content/uploads/2020/04/cover-LIBRO-DE-LOS-ERRORES.jpg'
                alt=''
            />
            <button>Add to Basket</button>
        </div>
    );
}

export default Product