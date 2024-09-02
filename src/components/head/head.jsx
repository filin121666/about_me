import "./head.css";

function Head({children}) {
    return (
        <div className="head">
            <h1 className="head-h1 roboto-medium">{children}</h1>
            <hr />
        </div>
    );
}

export default Head;
