import Head from "../head/head.jsx";
import AchievementPart from "./achievement_part/achievement_part.jsx";
import AchievementMultiPart from "./achievement_multipart/achievement_multipart.jsx";
import * as achievementsJson from "./achievements.json";
import "./achievements.css";

function Achievements() {
    return (
        <section className="achievements">
            <Head>Мои достижения</Head>
            <AchievementPart achievement={achievementsJson.future_code} />
            <AchievementMultiPart
                title="Stepic"
                childrens={achievementsJson.stepic}
            />
            <AchievementMultiPart
                title="Сириус Курсы"
                childrens={achievementsJson.sirius_courses}
            />
            <AchievementMultiPart
                title="Sololearn"
                childrens={achievementsJson.sololearn}
            />
            <AchievementMultiPart
                title="Урок цифры"
                childrens={achievementsJson.lesson_of_digits}
            />
            <AchievementPart
                achievement={achievementsJson.physics_with_Pigalitsyn}
            />
            <AchievementPart achievement={achievementsJson.path_to_it} />
            <AchievementPart achievement={achievementsJson.hackathon_maxitet} />
        </section>
    );
}

export default Achievements;
