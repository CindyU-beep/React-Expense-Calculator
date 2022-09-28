import './ExpenseForm.css';

const ExpenseForm = () => {
    return <form>
        <div className="new-expense_controls">
            <div className="new-expense_controls"> 
                <label>Title</label>
                <input type="text"/>
            </div>

            <div className="new-expense_controls">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"/>
            </div>

            <div className="new-expense_controls">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2022-12-31  "/>
            </div>

            <div className="new-expense_actions">
                <button type="submit">Add New Expense</button>
            </div>

        </div>
    </form>;


    //title 
    //date
    //amount
}

export default ExpenseForm;