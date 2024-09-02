import "./profile.css";

function Profile() {
    return (
        <div className="profile">
            <a
                href="https://github.com/filin121666"
                target="_blank"
                className="github-link"
            >
                <img
                    src="https://github.com/filin121666.png"
                    alt="icon"
                    className="profileIcon"
                />
                <p className="profileName roboto-medium">filin121666</p>
            </a>
        </div>
    );
}

export default Profile;
