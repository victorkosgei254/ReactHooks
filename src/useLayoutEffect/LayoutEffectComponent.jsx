import React, { useEffect, useLayoutEffect } from "react";

export default function LayoutEffectComponent() {
  useEffect(() => {
    console.log("Use Effect Called");
  });
  useLayoutEffect(() => {
    console.log("Use Layout Effect Called");
  });
  return (
    <div>
      <h3>Tutorial Five, Use Layout Effect</h3>
      <p>Use Layout effect is called before Use effect.</p>
    </div>
  );
}
