import './CartWidget.css';


import carritoIcon from './carrito.svg';

const CartWidget = () =>{

    return(
        <figure id="carrito">
            <img src={carritoIcon} alt=""/>
        </figure>
    )
}

export default CartWidget;