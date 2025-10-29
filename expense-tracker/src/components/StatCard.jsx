function StatCard({ title, value, icon }) {
    return (
        <div className="stat-card">
            <div className="stat-card-icon">
                {icon}
            </div>
            <div className="stat-card-info">
                <p>{title}</p>
                <p>{value}</p>
            </div>
        </div>
    );
};

export default StatCard;