import classes from '../MealsItem/MealItemForm.module.css'
import Input from '../../UI/Input'
import {useRef,useState} from 'react'
const MealItemForm = (props) => {
    const [amountIsValid , setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredNumber<1 || enteredNumber>5) {
            setAmountIsValid(false);
            return ; 
        }
        props.onAddToCart(enteredNumber);
    };
    return (
        <form className = {classes.form} onSubmit = {submitHandler}>
            <Input ref = {amountInputRef}
                label = 'Amount' input={{
                id:'amount',
                type:'number',
                min : '1', // make sure that the amount can be small than 1
                max : '5',
                step : '1',
                defaultValue : '1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter valid numbers (1-5)</p>}
        </form>
    )
}

export default MealItemForm;