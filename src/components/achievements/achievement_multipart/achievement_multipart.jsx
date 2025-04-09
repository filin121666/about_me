import "./achievement_multipart.css";

function AchievementMultiPart({ title, childrens }) {
    return (
        <div className="achievement-multipart">
            <div className="achievement-title">
                <h1 className="achievement-title-h1 roboto-medium">{title}</h1>
            </div>
            <div className="achievement-line" />
            <div className="achievement_list">
                {childrens.map((child, index) => (
                    <div key={index} className="achievement-item">
                        <p className="achievement-item-p roboto-regular">
                            {child[0]}
                        </p>
                        <a href={child[1]} target="_blank">
                            <p className="achievement-item-p roboto-regular">
                                Ссылка на сертификат
                            </p>
                        </a>
                        {index < childrens.length - 1 && (
                            <div className="achievement-line" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AchievementMultiPart;
