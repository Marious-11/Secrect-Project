import React, { Fragment } from "react";
import CardItem from "../Card/CardItem";

function CategoryGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => ( <Fragment key={index}><CardItem/></Fragment> ))}
    </section>
  );
}

export default CategoryGrid;
