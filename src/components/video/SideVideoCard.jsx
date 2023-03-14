import React from "react";
import style from "./sideVideoCard.module.css";

function SideVideoCard({ video }) {
  console.log("video", video);
  return (
    <div className="d-flex" style={{ marginBottom: "10px" }}>
      {video && (
        <>
          <img
            src={video.thumbnails[0].url}
            alt={video.author.title}
            style={{ marginRight: "20px" }}
          />
          <div>
            <h5>{video.title}</h5>
            <p className={style.info}>{video.author.title}</p>
            <span className={style.info}>
              {video.stats.views} Views <span>{video.publishedTimeText}</span>
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default SideVideoCard;
