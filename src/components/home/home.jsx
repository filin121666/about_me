import "./home.css";
import Head from "../head/head.jsx";
import { useState } from "react";
import { useEffect } from "react";

// const photos = ["/my_photo1.jpg", "/my_photo2.jpg"];
const photos = ["/about_me/my_photo1.jpg", "/about_me/my_photo2.jpg"];


function Home() {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentPhotoIndex(
                    (prevIndex) => (prevIndex + 1) % photos.length
                );
                setFade(false);
            }, 500);
        }, 3500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="home">
            <Head>Обо мне</Head>
            <div className="home-content">
                <div className="home-content-description">
                    <div className="home-content-text-img">
                        <img
                            // src="/greeting.webp"
                            src="/about_me/greeting.webp"
                            alt="greeting"
                            className="home-content-text-greeting"
                        />
                    </div>
                    <p className="home-content-text roboto-regular">
                        Я, Шанин Кирилл Сергеевич, начинающий разработчик из
                        России. Занимаюсь Backend-разработкой на Python. Изучаю
                        Python, C/C++, Arduino C и Computer Science. Помимо
                        программирования также увлекаюсь математикой и физикой.
                    </p>
                </div>
                <div className="home-content-photo">
                    <img
                        src={photos[currentPhotoIndex]}
                        alt="my photo"
                        className={`home-content-photo-img ${
                            fade ? "fade-out" : "fade-in"
                        }`}
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
