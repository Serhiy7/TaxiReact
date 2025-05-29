import styles from "./VideosOnYouTube.module.sass";

const VideosOnYouTube = () => {
  const videos = [
    {
      id: "WzQBAc8i73E", // Miyagi & Эндшпиль feat. Рем Дигга - I Got Love (Official Video)
      title: "Miyagi & Эндшпиль feat. Рем Дигга - I Got Love (Official Video)",
    },
    {
      id: "KlyXNRrsk4A", // Benassi Bros Feat. Dhany - Every Single Day [Official Video HD]
      title: "Benassi Bros Feat. Dhany - Every Single Day [Official Video HD]",
    },
    {
      id: "Xd7wuXxi7Vk", // Benny Benassi - Satisfaction
      title: "Benny Benassi - Satisfaction",
    },
  ];

  return (
    <section className={styles.videoSection} id="video">
      <h2>Наша музыкальная подборка</h2>
      <h3>Лучшие треки Benny Benassi:</h3>

      <div className={styles.videoWrapper}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videos[2].id}`}
          title={videos[2].title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.smallVideos}>
        {videos.map((video) => (
          <div key={video.id} className={styles.smallVideoWrapper}>
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideosOnYouTube;
