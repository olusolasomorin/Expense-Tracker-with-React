// import CATEGORIES from "./AddExpenseForm";
import AddExpenseForm from "./AddExpenseForm";

function CategoryFilter({ Category, currentFilter, onSetfilter}) {
    return (
        <div className="filter-container card">
            <h3>Filter by Category</h3>
            <div className="filter-buttons">
                {Category.map(category => {
                    const isActive = category ===currentFilter;
                    // const activeClasses = "acive";
                    // const inActiveClasses = "in-active"
                    return (
                        <button
                            key={category}
                            onClick={() => onSetfilter(category)}
                            className={`filter-btn ${isActive ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryFilter;