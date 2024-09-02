import "./skill_part.css";

function SkillPart({ img, url, title, children }) {
    return (
        <div className="skill">
            <div className="skill-icon">
                {img && (
                    <>
                        <a
                            href={url}
                            className="skill-icon-link"
                            target="_blank"
                        >
                            <img
                                src={img}
                                alt="skill-icon"
                                className="skill-icon-img"
                            />
                        </a>
                    </>
                )}
                {!img && !title ? (
                    <>
                        <img
                            src={img}
                            alt="skill-icon"
                            className="skill-icon-img"
                        />
                    </>
                ) : (
                    <></>
                )}
                {!img && title && (
                    <>
                        <a href={url} target="_blank" className="skill-h2-link">
                            <div className="skill-h2-link-container">
                                <h2 className="skill-h2-link-text roboto-medium">{title}</h2>
                            </div>
                        </a>
                    </>
                )}
            </div>
            <div className="skill-part-line" />
            <div className="skill-content">
                <p className="skill-content-text roboto-regular">{children}</p>
            </div>
        </div>
    );
}

export default SkillPart;
