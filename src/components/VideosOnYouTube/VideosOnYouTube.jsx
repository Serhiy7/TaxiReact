import styles from "./VideosOnYouTube.module.sass";

/**
 * Компонент отображает ТОП-7 песен Miyagi в виде встроенных YouTube видео.
 * @component
 * @returns {JSX.Element}
 */
const VideosOnYouTube = () => {
  const videos = [
    {
      id: "7pdN18RfGQw",
      title: "Ollane feat. Miyagi - Touch The Sky (Official Audio)",
    },

    {
      id: "4Ua1g8hU81A",
      title: "Miyagi - Captain (2018)",
    },
    {
      id: "jJpKYZs6Av0",
      title: "Miyagi - Самурай (Official Audio)",
    },
    {
      id: "vN12KY7eR8U",
      title: "Miyagi & Andy Panda - YAMAKASI (Official Video)",
    },
    {
      id: "xZEVGJszvo0",
      title: "Miyagi & Andy Panda - Freeman (Official Video)",
    },
    {
      id: "xZEVGJszvo0",
      title: "Miyagi & Эндшпиль - Bounty (Official Audio)",
    },
    {
      id: "DTz5k-8AzJo",
      title: "Miyagi feat. Mav-d, Ollane - Music is Love (Official Audio)",
    },
    {
      id: "iK7qs-1wTK8",
      title: "Mr Lambo - Mango (Official Video)",
    },
    {
      id: "af_Fnq39WQk",
      title: "Miyagi & Эндшпиль - RudeBoys (Official Audio)",
    },
    {
      id: "nidQCt_HEsY",
      title: "Miyagi & Эндшпиль feat. Рем Дигга - I Got Love (Official Video)",
    },
  ];

  return (
    <section className={styles.videoSection} id="video">
      <h2>Miyagi</h2>
      <h3>ТОП песени :</h3>

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
