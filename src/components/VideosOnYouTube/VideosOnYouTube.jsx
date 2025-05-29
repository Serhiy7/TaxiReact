import styles from "./VideosOnYouTube.module.sass";

const VideosOnYouTube = () => {
  const videos = [
    {
      id: "X_MMoTsc_mQ",
      title: "Видео 1",
    },
    {
      id: "igqSHHCIixk",
      title: "Видео 2",
    },
    {
      id: "VIDEO_ID_3",
      title: "Видео 3",
    },
  ];

  return (
    <section className={styles.videoSection} id="video">
      <h2>Смотрите наши видео на YouTube</h2>
      <h3>Посмотрите наш обзор сервиса и машин:</h3>

      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/Ts4vw0FcTjQ?start=938"
          title="Основное видео о сервисе"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.smallVideos}>
        {videos.map((video) => (
          <div key={video.id} className={styles.smallVideoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
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
