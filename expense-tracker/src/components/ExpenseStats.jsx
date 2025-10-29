import StatCard from "./StatCard";

function ExpenseStats({ stats, formatCurrencyNaira, categoryChartColors }) {
    const { totalAmount, totalCount, highestExpense, categoryBreakdown } = stats;

    return (
        <div className="stats-container card">
            <h2>Statistics</h2>
            <div className="stats-grid">
                <StatCard
                    title="Total Spent"
                    value={formatCurrencyNaira(totalAmount)}
                />
                <StatCard
                    title="Total Expenses"
                    value={totalCount}
                />
                <StatCard
                    title="Highest Expense"
                    value={formatCurrencyNaira(highestExpense)}
                />
            </div>
        </div>
    )
}

export default ExpenseStats;