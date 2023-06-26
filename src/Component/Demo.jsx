import React, { useState } from "react";
import data from "../data.json";
const Demo = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div style={{ margin: "100px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {data
          .filter((list) => {
            return search.toLowerCase().startsWith("s")
              ? list.name.toLowerCase().includes(search)
              : false;
          })

          .map((list) => {
            return (
              <div className="box" key={list.id}>
                <h3> {list.name} </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Demo;
