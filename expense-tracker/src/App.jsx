import { useState } from "react";
import { useMemo } from "react";
import Header from "./components/Header";
import AddExpenseForm from "./components/AddExpenseForm";
import CategoryFilter from "./components/CategoryFilter";
// import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import './App.css'

const categoryChartColors = {
  Food: "#F87171", // red-500
  Transport: "#60A5FA", // blue-500
  Bills: "#FBBF24", // yellow-500
  Entertainment: "#A78BFA", // purple-500
  Others: "#9CA3AF", // gray-400
};

// Sample Data
const sampleExpenses = [
  {
    id: 1,
    description: "Lunch at Mama Put",
    amount: 1500,
    category: "Food",
    date: "2025-10-24"
  },
  {
    id: 2,
    description: "BRT bus fare",
    amount: 500,
    category: "Transport",
    date: "2025-10-23"
  },
  {
    id: 3,
    description: "MTN Data subscription",
    amount: 3000,
    category: "Bills",
    date: "2025-10-22"
  },
  {
    id: 4,
    description: "Movie ticket",
    amount: 4500,
    category: "Entertainment",
    date: "2025-10-21"
  },
];

const formatCurrencyNaira = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(amount);
};


function App() {
  const CATEGORIES = ["All", "Bills", "Transport", "Food", "Entertainment", "Others"]
  // return (
  //   <div>
  //     <Header />
  //     <AddExpenseForm
  //       Category={CATEGORIES}
  //     />
  //     <CategoryFilter 
  //       Category={CATEGORIES}
  //     />
  //   </div>
  // )

  const [expenses, setExpenses] = useState(sampleExpenses);
  const [currentFilter, setCurrentFilter] = useState('All');
  const [editingId, setEditingId] = useState(null);
  
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  );

  // --- Handlers ---

  const handleAddExpense = (newExpense) => {
    setExpenses(prevExpenses => [newExpense, ...prevExpenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(prevExpenses => prevExpenses.filter(ex => ex.id !== id));
  };

  const handleUpdateExpense = (id, updatedData) => {
    setExpenses(prevExpenses =>
      prevExpenses.map(ex =>
        ex.id === id ? { ...ex, ...updatedData } : ex
      )
    );
    setEditingId(null); // Exit edit mode
  };

  const handleSetFilter = (category) => {
    setCurrentFilter(category);
  };
  
  const handleSetEditingId = (id) => {
    setEditingId(id);
  };

  // --- Derived State (Memoized) ---

  const filteredExpenses = useMemo(() => {
    if (currentFilter === 'All') {
      return expenses;
    }
    return expenses.filter(ex => ex.category === currentFilter);
  }, [expenses, currentFilter]);

  const stats = useMemo(() => {
    const totalAmount = filteredExpenses.reduce((sum, ex) => sum + ex.amount, 0);
    const totalCount = filteredExpenses.length;
    const highestExpense = Math.max(0, ...filteredExpenses.map(ex => ex.amount));
    
    const categoryBreakdown = CATEGORIES.slice(1) 
      .map(category => ({
        name: category,
        value: filteredExpenses
          .filter(ex => ex.category === category)
          .reduce((sum, ex) => sum + ex.amount, 0)
      }))
      .filter(item => item.value > 0); 

    return { totalAmount, totalCount, highestExpense, categoryBreakdown };
  }, [filteredExpenses]);
  
  const sortedExpenses = useMemo(() => {
    return [...filteredExpenses].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [filteredExpenses]);

  return (
    <div className="app-container">
      {/* GlobalStyles component is removed, CSS is imported */}
      
      <Header currentDate={currentDate} />
      
      <main className="main-layout">
        
        <div className="main-content">
          {/* <ExpenseStats 
            stats={stats} 
            formatCurrencyNaira={formatCurrencyNaira}
            categoryChartColors={categoryChartColors}
          /> */}
          <CategoryFilter
            currentFilter={currentFilter}
            onSetFilter={handleSetFilter}
            Category={CATEGORIES}
          />
          <ExpenseList
            expenses={sortedExpenses}
            onDelete={handleDeleteExpense}
            onSetEditingId={handleSetEditingId}
            onUpdateExpense={handleUpdateExpense}
            editingId={editingId}
            formatCurrencyNaira={formatCurrencyNaira}
          />
        </div>

        <div className="sidebar">
          <AddExpenseForm 
            onAddExpense={handleAddExpense} 
            Category={CATEGORIES}
          />
        </div>

      </main>
    </div>
  )
}

export default App;