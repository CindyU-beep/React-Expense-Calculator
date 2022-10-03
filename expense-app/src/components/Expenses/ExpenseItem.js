import ExpenseDate from "./ExpenseDate";
import Card from '../UI/CardObj';
import "./ExpenseItem.css";

//Stateless component
function ExpenseItem(props) {

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item_description'>
                <h2>{props.title} </h2>
                <div className='expense-item__price'>${props.amount}</div> 
            </div>
        </Card>
    );
}
export default ExpenseItem;