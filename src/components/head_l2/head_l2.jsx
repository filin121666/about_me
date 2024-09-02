import "./head_l2.css";

function HeadL2({children}) {
    return (
        <div className="head-l2">
            <h2 className="head-l2-h2 roboto-medium">{children}</h2>
            <hr />
        </div>
    );
}

export default HeadL2;
