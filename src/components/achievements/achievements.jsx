import Head from "../head/head.jsx";
import AchievementPart from "./achievement_part/achievement_part.jsx";
import "./achievements.css";

function Achievements() {
    return (
        <section className="achievements">
            <Head>Мои достижения</Head>
            <AchievementPart title="Код будущего">
                Освоил дополнительную общеобразовательную программу ФГАОУ ВО
                «Санкт-Петербургский государственный университет
                аэрокосмического приборостроения» "Программирование на языке
                Python" (продвинутый уровень). Подтверждено сертификатом.
            </AchievementPart>
            <AchievementPart title="Stepic. Программирование на Golang">
                Завершил с отличием курс "Программирование на Golang" на
                платформе Stepic. Подтверждено сертификатом.
            </AchievementPart>
            <AchievementPart
                title={`Stepic. "Поколение Python": курс для начинающих`}
            >
                Завершил с отличиес курс "Поколение Python: курс для начинающих"
                от "Поколение Python" и Благотворительного фонда "Айкью Опшн" на
                платформе Stepic. Подтверждено сертификатом.
            </AchievementPart>
            <AchievementPart
                title={"Stepic. Погружение в JavaScript: для начинающих"}
            >
                Завершил с отличием курс "Погружение в JavaScript: для
                начинающих" на платформе Stepic. Подтверждено сертификатом.
            </AchievementPart>
            <AchievementPart title={"Stepic. Быстрый старт в FastAPI Python"}>
                Завершил с отличием курс "Быстрый старт в FastAPI Python" на
                платформе Stepic. Подтверждено сертификатом.
            </AchievementPart>
            <AchievementPart title={"SoloLearn"}>
                На этой платформе я завершил курсы по введению в SQL, C++, C#,
                C, Java, JavaScript, HTML, Python; по среднему уровню C, C++,
                Python; "Python разработчик". Завершение всех этих курсов
                подтверждается сертификатами.
            </AchievementPart>
            <AchievementPart title={"Путь в IT"}>
                Участвовал в олимпиаде по математике и программированию «Путь в
                IT» от "Maximum Education" в 2023/2024 учебном году.
                Подтверждено сертификатом.
            </AchievementPart>
            <AchievementPart title={"Хакатон Maxitet"}>
                Участвовал в хакатоне по разработке решений, которые будут
                использовать технологии ИИ для улучшения процесса обучения,
                хакатон проводился IT-колледжем Maxitet совместно с "Maximum
                Education". Подтверждено сертификатом призёра.
            </AchievementPart>
        </section>
    );
}

export default Achievements;
