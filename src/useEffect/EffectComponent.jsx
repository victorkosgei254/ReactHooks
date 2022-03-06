import React, { useEffect, useState } from "react";

export default function EffectComponent() {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("USE EFECT TRIGGERED");
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((Response) => Response.json())
      .then((response) => {
        // console.log(response); //
        setData(response);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <div>
      <h3>Tutorial Three,use Effect</h3>
      <p>Perform a network fetch request when page loads</p>
      <p>
        Return an array of <b>{data.length}</b>
      </p>
    </div>
  );
}
