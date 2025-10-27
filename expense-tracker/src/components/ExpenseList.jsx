import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDelete, onSetEditingId, onUpdateExpense, editingId, formatCurrencyNaira }) => {
  return (
    <div className="expense-list-container card">
       <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p className="expense-list-empty">No expenses found. Add one to get started!</p>
      ) : (
        <ul className="expense-list">
          {expenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={onDelete}
              onSetEditingId={onSetEditingId}
              onUpdateExpense={onUpdateExpense}
              isEditing={editingId === expense.id}
              formatCurrencyNaira={formatCurrencyNaira}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;