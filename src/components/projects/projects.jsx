import "./projects.css";
import Head from "../head/head.jsx";
import Project from "./project/project.jsx";

function Projects() {
    return (
        <section className="projects">
            <Head>
                Мои проекты
            </Head>
            <Project
                title={"Linux sbrk аллокатор"}
                link={"https://github.com/filin121666/c_linux_sbrk_malloc"}
            >
                Аллокатор памяти C использующий sbrk Linux.
            </Project>
            <Project
                title={"Fruits CRUD"}
                link={"https://github.com/filin121666/fruits_crud"}
            >
                Telegram бот с backend-ом на REST API реализующее CRUD (create, read, update, delete) операции над фруктами.
            </Project>
            <Project
                title={"Future code"}
                link={"https://github.com/filin121666/future_code"}
            >
                Код решений задач, которые я решал во время обучения в проекте "Код будущего", от "Университет 2035".
            </Project>
            <Project
                title={"Answers to tasks"}
                link={"https://github.com/filin121666/answers_to_tasks"}
            >
                Код решений задач.
            </Project>
        </section>
    );
}

export default Projects;