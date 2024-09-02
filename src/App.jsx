import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import { useState } from "react";
import Skills from "./components/skills/skills.jsx";
import Achievements from "./components/achievements/achievements.jsx";

function App() {
    const [page, setPage] = useState("home");

    return (
        <>
            <Header page={page} setPage={setPage}></Header>
            {page === "home" && <Home />}
            {page === "skills" && <Skills />}
            {page === "achievements" && <Achievements />}
        </>
    );
}

export default App;
