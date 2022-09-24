//components are just javascript functions
//must be upper case names for custom components 
import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022,1,28);
    const expenseTitle = 'Grocceries';
    const expenseAmount = 10;

    return (
        <div className="expense-item">
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item_description">
                <h2>{ expenseTitle}</h2>
                <div className="expense-item_price">{ expenseAmount}</div>
                </div>
        </div>
    );
}

export default ExpenseItem;
