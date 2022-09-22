//components are just javascript functions
//must be upper case names for custom components 
import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Date</div>
            <div className="expense-item_description">
                <h2>Title</h2>
                <div className = "expense-item_price">Amount</div>
                </div>
        </div>
    );
}

export default ExpenseItem;
