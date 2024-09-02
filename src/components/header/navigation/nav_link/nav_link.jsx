import "./nav_link.css";

function NavLinkButton({ isActive, onClick, children}) {
    return (
        <button
            className={
                "nav-link-button" +
                (isActive ? " active" : "") +
                " roboto-regular"
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default NavLinkButton;
