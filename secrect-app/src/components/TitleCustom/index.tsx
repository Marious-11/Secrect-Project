import React from "react";

function TitleCustom({
  title,
  justify,
}: {
  title: string;
  justify: "start" | "center" | "end";
}) {
  return (
    <section
      className={`w-full ${
        justify == "center" && "items-center" }  mx-auto  flex text-3xl font-semibold flex-col gap-4 pb-1 justify-${justify}`}
    >
      <p>{title}</p>
      <div className="h-1 w-[40%] bg-black"></div>
    </section>
  );
}

export default TitleCustom;
