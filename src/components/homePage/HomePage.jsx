import React from "react";
import FetchDataFromAPI from "../../util/FetchDataFromAPI";

export default function HomePage() {
  FetchDataFromAPI("auto-complete/?q=desp");
  return (
    <div style={{ width: "78%" }}>
      <h1>HomePage</h1>
    </div>
  );
}
