import Profile from "./profile/profile.jsx";
import Navigation from "./navigation/navigation.jsx";
import Timer from "./timer/timer.jsx";
import "./header.css";
import React, { useState } from "react";

function Header({ page, setPage }) {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 500;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    if (width > breakpoint) {
        return (
            <header className="header">
                <div className="profile-block">
                    <Profile />
                </div>
                <div className="right-block">
                    <div className="timer-block">
                        <Timer />
                    </div>
                    <div className="navigation-block">
                        <Navigation page={page} setPage={setPage} />
                    </div>
                </div>
            </header>
        );
    }
    return (
        <header className="header">
            <div className="profile-block">
                <Profile />
            </div>
            <div className="right-block">
                <div className="navigation-block">
                    <Navigation page={page} setPage={setPage} />
                </div>
            </div>
        </header>
    );
}

export default Header;
