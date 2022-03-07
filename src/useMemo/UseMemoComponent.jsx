import React, { useEffect, useMemo, useState } from "react";

export default function UseMemoComponent() {
  const [data, setData] = useState(null);
  const [toogle, setToggle] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((Response) => Response.json())
      .then((results) => {
        setData(results);
        console.log(results);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const getLongestName = (data) => {
    let longestName = "";
    console.log("longestName");
    if (data == null) return "0";
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.length > longestName.length) {
        longestName = data[i].name;
      }
    }
    return longestName;
  };

  const getLongestNameMemo = useMemo(() => getLongestName(data), [data]);
  return (
    <div>
      <h4>Tutorial Eight, use Memo</h4>
      <p>
        Function <code>getLongestName(data) </code>
      </p>

      <p>
        <b>Results : {getLongestNameMemo}</b>
      </p>

      <button onClick={() => setToggle(!toogle)}>toggle</button>
      <p hidden={toogle}>Play with me !! Im Tooogle :)</p>
      <p>
        Initialy upon click of a button the page reloads and the 500 comments
        are re fetched and an algorithm above runs every comment to find
        longest. This is bad as we are abusing system resources
      </p>

      <code>
        const getLongestNameMemo = useMemo(() => getLongestName(data), [data]);
      </code>
    </div>
  );
}
