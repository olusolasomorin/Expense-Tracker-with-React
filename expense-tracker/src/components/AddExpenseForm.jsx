import { useState } from "react";

function AddExpenseForm({ Category, onAddExpense }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(null);

    // const CATEGORIES = ["All", "Bills", "Transport", "Food", "Entertainment", "Others"]

    const handleSubmit = (e) => {
        e.preventDefault();

        if (amount.trim() === '' || description.trim() === '' || category === '') {
            setError('All fields are required!');
            return;
        }

        if (Number(amount) <= 0) {
            setError("Amount must be greater than zero!");
            return;
        }

        const newExpense = {
            id: Date.now(),
            description: description.trim(),
            amount: Number(amount),
            category,
            date: new Date().toISOString().split('T')[0]
        }

        onAddExpense(newExpense);

        setAmount('');
        setCategory('');
        setDescription('');
        setError(null);        
    }

    return (
        <div className="add-expense-form card">
            <h2>Add New Expense</h2>
            {error && (
                <div className="form-error">{error}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="e.g., Groceries" 
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount (₦)</label>
                    <input 
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="e.g., 1000" 
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select 
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-input"
                    >
                        <option value="" disabled>Select a category</option>
                        {Category.slice(1).map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn-submit">Add Expense</button>
            </form>
            
        </div>
    )
}

export default AddExpenseForm;