import "./project.css";

function Project({ title, link, children }) {
    return (
        <div className="project">
            <div className="project-title">
                <h1 className="project-title-h1 roboto-medium">
                    {title}
                </h1>
            </div>
            <div className="project-line" />
            <div className="project-body">
                <p className="project-body-p roboto-regular">
                    {children}
                </p>
            </div>
            <div className="project-line-before-links" />
            <div className="project-link">
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-a roboto-regular">Ссылка на проект</a>
            </div>
        </div>
    );
}

export default Project;