import "./skills.css";
import Head from "../head/head.jsx";
import HeadL2 from "../head_l2/head_l2.jsx";
import SkillPart from "./skill_part/skill_part.jsx";
function Skills() {
    return (
        <section className="skills">
            <Head>Мои навыки, инструменты и прочее</Head>
            <HeadL2>Языки программирования</HeadL2>
            <SkillPart
                img={"/skills/python-logo.svg"}
                url={"https://www.python.org"}
            >
                Python (3). Я знаю базовые конструкции языка (переменные, циклы,
                функции, типы данных), ООП. Этот язык я очень хорошо знаю и
                использую как основной язык, в большинстве проектов, для
                backend-а или быстрого (по времени написания кода) решения
                задачи.
            </SkillPart>
            <SkillPart
                img={"/skills/javascript-logo.svg"}
                url={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
            >
                Javascript. Я знаю базовые конструкции языка (переменные, циклы,
                функции, типы данных). Редко использую его в чистом виде (это не
                очень удобно), но в связке с WEB framework-ом работать
                становится проще.
            </SkillPart>
            <SkillPart
                img={"/skills/cpp-logo.svg"}
                url={"https://isocpp.org/std/the-standard"}
            >
                C++. Я знаю базовые конструкции языка (переменные, циклы,
                функции, типы данных), ООП (с шаблонами), работу с памятью (с
                аллокатором памяти), частично знаю STL (стандартную библиотеку
                шаблонов). Использую при необходимости высокой
                производительности и скорости программы.
            </SkillPart>
            <SkillPart
                img={"/skills/c-logo.svg"}
                url={"https://c-language-documentation.vercel.app"}
            >
                C. Я знаю базовые конструкции языка (переменные, типы данных,
                циклы, функции), структуры данных (struct), перечисления (enum),
                объединения (union), работу с аллокаторами памяти и указателями.
                Я хорошо знаю этот язык и использую, если нужна большая
                производительность, но нет временных рамок написания кода.
            </SkillPart>
            <HeadL2>Фронтенд (базовые навыки)</HeadL2>
            <SkillPart
                img={"/skills/html-logo.svg"}
                url={"https://developer.mozilla.org/ru/docs/Web/HTML"}
            >
                HTML (5). Знаю основные тэги.
            </SkillPart>
            <SkillPart
                img={"/skills/css-logo.svg"}
                url={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            >
                CSS (3). Знаю базовые стили для текстовых и блочных элементов,
                медиа запросы.
            </SkillPart>
            <HeadL2>WEB frameworks (и библиотеки)</HeadL2>
            <SkillPart
                img={"/skills/fastapi-logo.svg"}
                url={"https://fastapi.tiangolo.com"}
            >
                FastAPI. Знаю базовые концепции и пишу backend приложений на нём
                (в том числе и асинхронный) + использую для валидаци данных
                Pydantic, в качестве ORM - SQLAlchemy. Я хорошо знаю этот
                framework.
            </SkillPart>
            <SkillPart img={"/skills/react-logo.svg"} url={"https://react.dev"}>
                React. Знаю базовые концепции, умею пользоваться базовым State и
                делить приложение на компоненты. Этот сайт написан на React.
            </SkillPart>
            <HeadL2>ORM</HeadL2>
            <SkillPart
                img={"/skills/sqlalchemy-logo.svg"}
                url={"https://www.sqlalchemy.org"}
            >
                SQLAlchemy (2). Я умею работать с таблицами (моделями) и
                записями, в том числе и в асинхронном виде. Я использую эту ORM
                для своего backend-а на FastAPI.
            </SkillPart>
            <HeadL2>Валидация данных</HeadL2>
            <SkillPart
                img={"/skills/pydantic-logo.svg"}
                url={"https://docs.pydantic.dev/latest/"}
            >
                Pydantic. Умею валидировать данные также умею создавать
                кастомные валидаторы для полей.
            </SkillPart>
            <HeadL2>Базы данных</HeadL2>
            <SkillPart
                img={"/skills/postgres-logo.svg"}
                url={"https://www.postgresql.org"}
            >
                PostgreSQL. Использую как основную реляционную базу данных, по
                причине высокой надёжности и скорости.
            </SkillPart>
            <SkillPart
                img={"/skills/mongodb-logo.svg"}
                url={"https://www.mongodb.com"}
            >
                MongoDB. Использую в качестве нереляционной базы данных.
            </SkillPart>
            <SkillPart
                img={"/skills/redis-logo.svg"}
                url={"https://master--redis-doc.netlify.app/docs/about/"}
            >
                Redis. Использую как нереляционную базу данных для кеширования.
            </SkillPart>
            <HeadL2>Контроль зависимостей</HeadL2>
            <SkillPart
                img={"/skills/pip-logo.svg"}
                url={"https://pypi.org/project/pip/"}
            >
                Pip. Умею управлять зависимостями и замораживать их.
            </SkillPart>
            <SkillPart
                img={"/skills/poetry-logo.svg"}
                url={"https://python-poetry.org"}
            >
                Poetry. Умею настраивать зависимости и проект.
            </SkillPart>
            <SkillPart
                title={"Venv"}
                url={"https://docs.python.org/3/library/venv.html"}
            >
                Venv (Virtual environments). Умею создавать виртуальную среду и
                работать с ней.
            </SkillPart>
            <SkillPart
                img={"/skills/npm-logo.svg"}
                url={"https://www.npmjs.com"}
            >
                Npm. Умею управлять зависимостями.
            </SkillPart>
            <HeadL2>DevOps</HeadL2>
            <SkillPart img={"/skills/git-logo.svg"} url={"https://git-scm.com"}>
                Git. Умею создавать репозитории и управлять ими на базовом
                уровне.
            </SkillPart>
            <SkillPart
                img={"/skills/github-logo.svg"}
                url={"https://github.com/"}
            >
                Github. Храню свои репозитории с кодом проектов здесь.
            </SkillPart>
            <SkillPart
                img={"/skills/docker-logo.svg"}
                url={"https://www.docker.com"}
            >
                Docker. Запускаю некоторые проекты с его помощью.
            </SkillPart>
            <SkillPart
                img={"/skills/docker-compose-logo.webp"}
                url={"https://docs.docker.com/compose/"}
            >
                Docker-compose. Умею создавать системы из нескольких docker
                контейнеров.
            </SkillPart>
            <HeadL2>Компиляторы C/C++</HeadL2>
            <SkillPart
                img={"/skills/llvm-logo.svg"}
                url={
                    "https://bcain-llvm.readthedocs.io/projects/llvm/en/latest/ProgrammersManual/"
                }
            >
                LLVM (Clang).
            </SkillPart>
            <SkillPart img={"/skills/gcc-logo.svg"} url={"https://gcc.gnu.org"}>
                GCC. Использую оригинальную на WSL 2 и версию MinGW для Windows.
            </SkillPart>
            <HeadL2>Редакторы кода</HeadL2>
            <SkillPart
                img={"/skills/vs-code-logo.svg"}
                url={"https://code.visualstudio.com"}
            >
                VS Code (Visual Studio Code). Мой универсальный редактор кода
                для любого нужного мне языка.
            </SkillPart>
            <SkillPart
                img={"/skills/visual-studio-logo.svg"}
                url={"https://visualstudio.microsoft.com/ru/"}
            >
                Visual Studio. Мой редактор кода для C/C++ (не часто его
                использую).
            </SkillPart>
            <HeadL2>Микроконтроллеры</HeadL2>
            <SkillPart
                img={"/skills/arduino-logo.svg"}
                url={"https://www.arduino.cc"}
            >
                Arduino. Знаю базово Arduino C. Имел опыт программировать Arduino Nano, Arduino Uno.
            </SkillPart>
            <SkillPart
                img={"/skills/platformio-logo.svg"}
                url={"https://platformio.org"}
            >
                PlatformIO. Иногда использую в качестве IDE.
            </SkillPart>
            <SkillPart
                img={"/skills/esp32-logo.svg"}
                url={"https://www.espressif.com/en/"}
            >
                Esp. Имел опыт программировать esp32 и esp8266.
            </SkillPart>
        </section>
    );
}

export default Skills;
