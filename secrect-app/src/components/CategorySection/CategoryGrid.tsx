import React, { Fragment } from "react";
import CardItem from "../Card/CardItem";
import { Models } from "appwrite";


const dataDemo= [
  {id:1}
]

function CategoryGrid({ data }: { data: Models.Document[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {data.map((item, index) => (
        <Fragment key={index}>
          <CardItem data={item} />
        </Fragment>
      ))}
    </section>
  );
}

export default CategoryGrid;
