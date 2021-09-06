import classes from '../MealsItem/MealItem.module.css'
import CartContext from '../../store/cart-context';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
const MealItem = (props) => {
    const CartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        CartCtx.addItem({
            id:props.id , 
            name:props.name , 
            amount:amount ,
            price:props.price,
        })
    };
    return (
        <li className = {classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className = {classes.description}>{props.description}</div>
                <div className = {classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler}/>
            </div>
        </li>

    )
}
export default MealItem;