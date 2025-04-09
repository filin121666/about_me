import "./projects.css";
import Head from "../head/head.jsx";
import Project from "./project/project.jsx";

function Projects() {
    return (
        <section className="projects">
            <Head>Мои проекты</Head>
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
                Telegram бот с backend-ом на FastAPI реализующее CRUD (create,
                read, update, delete) операции над фруктами.
            </Project>
            <Project
                title={"Future code"}
                link={"https://github.com/filin121666/future_code"}
            >
                Код решений задач, которые я решал во время обучения в проекте
                "Код будущего", от "Университет 2035".
            </Project>
            <Project
                title={"Answers to tasks"}
                link={"https://github.com/filin121666/answers_to_tasks"}
            >
                Код решений задач по программированию.
            </Project>
            <Project
                title={"Aigame"}
                link={"https://github.com/Mistik21/Aigame"}
            >
                Код проекта который я с командой разрабатывал во время участия в
                хакатоне по разработке решений, которые будут использовать
                технологии ИИ для улучшения процесса обучения, хакатон
                проводился IT-колледжем Maxitet совместно с "Maximum Education".
                К сожалению разработка проекта не была завершена.
            </Project>
            <Project
                title={"About me"}
                link={"https://github.com/filin121666/about_me"}
            >
                Код этого сайта.
            </Project>
        </section>
    );
}

export default Projects;
