import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../store/cart-context'
import { useContext } from 'react';
import CartItem from './CartItem'
const Cart = (props) => {

    const CartCtx = useContext(CartContext);

    const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`
    const hasItem = CartCtx.items.length>0;
    const cartItemRemoveHandler = (id) => {
        CartCtx.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        CartCtx.addItem({...item,amount:1})
    }
    const cartItems = (<uL className = {classes['cart-items']}>
        {
           CartCtx.items.map(item =>(
                <CartItem key = {item.id} price = {item.price} amount = {item.amount}
                 name = {item.name}
                 onRemove = {cartItemRemoveHandler.bind(null,item.id)}
                 onAdd = {cartItemAddHandler.bind(null,item)}
                 />
           ))
        }
        </uL>
    );
    return (
        <Modal onClose = {props.onClose}>
            {cartItems}
            <div className = {classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className = {classes.actions}>
                <button className = {classes['button--alt']} onClick = {props.onClose}>Close</button>
                {hasItem && <button className = {classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;