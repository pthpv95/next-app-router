"use client";
import { startTransition, useState } from "react";

function TabContainer() {
  const [tab, setTab] = useState("about");
  console.log("🚀 ~ file: page.tsx:6 ~ TabContainer ~ tab:", tab);

  function selectTab(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  return (
    <div>
      <button onClick={() => selectTab("1")}>Tab 1</button>
      <button onClick={() => selectTab("2")}>Tab 2</button>
    </div>
  );
}

export default TabContainer;
