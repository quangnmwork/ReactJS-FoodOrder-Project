import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext ,useState,useEffect} from 'react';
import CartContext from '../store/cart-context';
const HeaderCartButton = (props) => {
    const CartCtx = useContext(CartContext);
    const [btnIsHighlighted,setBtnIsHighlighted] =  useState(false);
    const numberOfItems = CartCtx.items.reduce((curNumber,item) => {
        return curNumber+item.amount;
    },0);
    const {items} = CartCtx;
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump :``}`
    useEffect( () => {
        if(items.length === 0) {return;}
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        },300)
        return () => {
            clearTimeout(timer);
        }
    },[items])
    return (
        <button className = {btnClasses} onClick = {props.onClick}>
            <span className = {classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className = {classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton;