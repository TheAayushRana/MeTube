import React from "react";
import Styles from "./leftBar.module.css";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { RiHistoryLine, RiAccountCircleLine } from "react-icons/ri";

export default function LeftBar() {
  return (
    <div className={Styles.leftBar}>
      <div className={Styles.leftBarlinks}>
        <a href="">
          <AiOutlineHome /> Home
        </a>
        <a href="">
          <AiOutlineHome /> Shorts
        </a>
        <a href="">
          <AiOutlineHome /> Subscriptions
        </a>
        <hr />
        <a href="">
          <MdOutlineVideoLibrary /> Library
        </a>
        <a href="">
          <RiHistoryLine /> History
        </a>
      </div>
      <hr className={Styles.lines} />
      <div className={Styles.signInfo}>
        <p>Sign in to like videos, comment, and subscribe.</p>
        <button type="button" className="signInBtn" style={{}}>
          <RiAccountCircleLine /> Sign In
        </button>
      </div>
      <hr className={Styles.lines} />
      <div className={Styles.explore}>
        <p>Explore</p>
        <div className={Styles.leftBarlinks}>
          <a href="">
            <AiOutlineHome /> Trending
          </a>
          <a href="">
            <AiOutlineHome /> Shopping
          </a>
          <a href="">
            <AiOutlineHome /> Music
          </a>
          <a href="">
            <MdOutlineVideoLibrary /> Movies
          </a>
          <a href="">
            <MdOutlineVideoLibrary /> News
          </a>
          <a href="">
            <RiHistoryLine /> Gaming
          </a>
          <a href="">
            <MdOutlineVideoLibrary /> Live
          </a>
          <a href="">
            <MdOutlineVideoLibrary /> Sports
          </a>
          <a href="">
            <MdOutlineVideoLibrary /> Learning
          </a>
        </div>
      </div>
      <p className={Styles.footer}>© 2023 Google LLC</p>
    </div>
  );
}
