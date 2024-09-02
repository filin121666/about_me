import "./home.css";
import Head from "../head/head.jsx";

function Home() {
    return (
        <section className="home">
            <Head>Обо мне</Head>
            <div className="home-content">
                <div className="home-content-description">
                    <div className="home-content-text-img">
                        <img
                            src="/greeting.webp"
                            alt="greeting"
                            className="home-content-text-greeting"
                        />
                    </div>
                    <p className="home-content-text roboto-regular">
                        Я, Шанин Кирилл Сергеевич, Backend разработчик из
                        России. Занимаюсь Backend-разработкой на Python. Изучаю
                        Python, C/C++, Arduino C и Computer Science.
                    </p>
                </div>
                <div className="home-content-photo">
                    <img
                        src="/my_photo.jpg"
                        alt="my photo"
                        className="home-content-photo-img"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
