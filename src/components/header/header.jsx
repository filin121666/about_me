import Profile from "./profile/profile.jsx";
import Navigation from "./navigation/navigation.jsx";
import Timer from "./timer/timer.jsx";
import "./header.css";

function Header({ page, setPage }) {
    return (
        <header className="header">
            <div className="profile-container">
                <Profile />
            </div>
            <div className="navigation-container">
                <Navigation page={page} setPage={setPage}/>
            </div>
            <div className="timer-container">
                <Timer />
            </div>
        </header>
    );
}

export default Header;
