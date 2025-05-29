import styles from "./VideosOnYouTube.module.sass";

/**
 * Top 5 Miyagi tracks in embedded YouTube iframes
 * @component
 * @returns {JSX.Element}
 */
const VideosOnYouTube = () => {
  const videos = [
    {
      id: "WzQBAc8i73E", // I Got Love
      title: "Miyagi & Эндшпиль feat. Рем Дигга – I Got Love",
    },
    {
      id: "WENR1e5yaXA", // Captain
      title: "Miyagi – Captain (Official Video)",
    },
    {
      id: "MNBcIBnU3a8", // Samurai
      title: "Miyagi – Samurai (Official Video)",
    },
    {
      id: "9Ri7TcukAJ8", // YAMAKASI
      title: "Miyagi – YAMAKASI (Official Video)",
    },
    {
      id: "yeBvVvH4tfM", // Freeman
      title: "Miyagi – Freeman (Official Video)",
    },
  ];

  return (
    <section className={styles.videoSection} id="video">
      <h2>Наша музыкальная подборка</h2>
      <h3>ТОП-5 песен Miyagi:</h3>

      <div className={styles.videoWrapper}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videos[0].id}`}
          title={videos[0].title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.smallVideos}>
        {videos.slice(1).map((video) => (
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
