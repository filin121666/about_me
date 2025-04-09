import "./achievement_part.css";

function AchievementPart({ achievement }) {
    return (
        <div className="achievement">
            <div className="achievement-title">
                <h1 className="achievement-title-h1 roboto-medium">
                    {achievement.title}
                </h1>
            </div>
            <div className="achievement-line" />
            <div className="achievement-body">
                <p className="achievement-body-p roboto-regular">
                    {achievement.body}
                </p>
                {achievement.url && (
                    <a
                        href={achievement.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="achievement-body-p roboto-regular">
                            Ссылка на сертификат
                        </p>
                    </a>
                )}
            </div>
        </div>
    );
}

export default AchievementPart;
