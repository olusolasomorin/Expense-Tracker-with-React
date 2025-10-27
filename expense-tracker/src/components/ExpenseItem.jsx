import { useState } from "react";

function ExpenseItem({ expense, onDelete, onSetEditingId, onUpdateExpense, isEditing, formatCurrencyNaira }) {
    const { id, description, amount, category, date } = expense;

    const [editDescription, setEditDescription] = useState(description);
    const [editAmount, setEditAmount] = useState(amount.toString());
    const [error, setError] = useState(null);

    function handleSave() {
        if(editDescription.trim() === '' || editAmount.trim() === '') {
            setError("Description cannot be empty!");
            return;
        }
        if (Number(editAmount) <= 0) {
            setError("Amount must be greater than zero!");
            return;
        }

        onUpdateExpense(id, {
            description: editDescription.trim(),
            amount: Number(editAmount)
        });
        setError(null);
    }

    function handleCancel() {
        onSetEditingId(null);
        setError(null);
    }

    function handleStartEdit() {
        setEditDescription(description);
        setEditAmount(amount.toString());
        setError(null);
        onSetEditingId(id);
    };

    if(isEditing) {
        return (
            <li className="expense-item-edit">
                <div className="edit-form">
                    {error && (
                        <div className="edit-error">{error}</div>
                    )}
                    <input 
                        type="text" 
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="form-input"
                    />
                    <input 
                        type="number" 
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                        className="form-input"
                    />
                    <div className="edit-form-actions">
                        <button
                            onClick={handleCancel}
                            className="edit-btn edit-btn-cancel"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="edit-btn edit-btn-cancel"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </li>
        )
    }

    const colorClass = `category-${category}` || 'category-Others';
  
    return (
        <li className="expense-item">
        <div className="expense-item-info">
            <div className="expense-item-header">
            <span className="expense-item-desc">{description}</span>
            <span className={`expense-item-category ${colorClass}`}>
                {category}
            </span>
            </div>
            <div className="expense-item-footer">
            <p className="expense-item-amount">{formatCurrencyNaira(amount)}</p>
            <p className="expense-item-date">{date}</p>
            </div>
        </div>
        <div className="expense-item-actions">
            <button
            onClick={handleStartEdit}
            className="expense-action-btn edit"
            aria-label="Edit expense"
            >
            Edit
            </button>
            <button
            onClick={() => onDelete(id)}
            className="expense-action-btn delete"
            aria-label="Delete expense"
            >
            Trash
            </button>
        </div>
        </li>
    )
}

export default ExpenseItem;