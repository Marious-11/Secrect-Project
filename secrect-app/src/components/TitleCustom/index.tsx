import React from "react";

function TitleCustom({
  title,
  justify,
}: {
  title: string;
  justify: "start" | "center" | "end";
}) {
  return (
    <section className={`w-[70%] flex text-3xl font-semibold border-b-4 border-black pb-1  justify-${justify}`}>{title}</section>
  );
}

export default TitleCustom;
