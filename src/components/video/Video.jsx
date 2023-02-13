import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchDataFromAPI } from "../../util/FetchDataFromAPI";
import styles from "./video.module.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";

export default function Video() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    FetchDataFromAPI(`video/details/?id=${id}`).then((data) => setData(data));
  }, [id]);

  return (
    <div className={styles.videoPage}>
      <div className={styles.video}>
        {data && (
          <div className={styles.videoDetails}>
            <h4 className={styles.videoName}>{data.title}</h4>
            <div className={styles.author}>
              <div className="d-flex">
                <a
                  href={data.author.canonicalBaseUrl}
                  className={styles.channelURL}
                >
                  <img
                    src={`${data.author.avatar[0].url}`}
                    alt={data.author.title}
                    className={styles.channelImg}
                  />
                  <div className={styles.authorInfo}>
                    <span>
                      <b>{data.author.title}</b>
                    </span>
                    <span>{data.author.stats.subscribersText}</span>
                  </div>
                </a>
                <button className={styles.subscribeBtn}>Subscribe</button>
              </div>
              <div className={styles.channelOptions}>
                <>
                  <button className={`${styles.likebtn} ${styles.btn}`}>
                    <AiOutlineLike />
                    {data.stats.likes}
                  </button>
                  <button className={`${styles.dislikebtn} ${styles.btn}`}>
                    <AiOutlineDislike />
                  </button>
                </>
                <button className={`${styles.btn} ${styles.shareBtn} `}>
                  <FaRegShareSquare />
                  Share
                </button>
              </div>
            </div>
            <div className={styles.description}>
              <b>{`${data.stats.views} views ${data.publishedDate}`}</b>
              <p style={{ color: "#878787" }}>{data.superTitle.items[0]}</p>

              <p>{data.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
