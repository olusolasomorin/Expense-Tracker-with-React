function CategoryFilter({ Category, currentFilter, onSetFilter}) {
    return (
        <div className="filter-container card">
            <h3>Filter by Category</h3>
            <div className="filter-buttons">
                {Category.map(category => {
                    const isActive = category ===currentFilter;
                    return (
                        <button
                            key={category}
                            onClick={() => onSetFilter(category)}
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