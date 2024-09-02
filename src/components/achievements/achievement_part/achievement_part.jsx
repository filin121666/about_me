import "./achievement_part.css";

function AchievementPart({ title, children }) {
    return (
        <div className="achievement">
            <div className="achievement-title">
                <h1 className="achievement-title-h1 roboto-medium">{title}</h1>
            </div>
            <div className="achievement-line" />
            <div className="achievement-body">
                <p className="achievement-body-p roboto-regular">{children}</p>
            </div>
        </div>
    );
}

export default AchievementPart;
