import TableRender from "@/components/TableRender/TableRender";
import React from "react";
import { database } from "../../../appwrite";

async function page() {
  // 66b47832002f57b31a79
  const baseUrl = process.env.DATABASE_ID;
  const cartID = process.env.CART_TABLE_ID;

  // call api
  const cartData = await database.listDocuments(
    baseUrl as string,
    cartID as string
  );

  return (
    <section className="container min-h-[70vh] ">
      <TableRender data={cartData.documents} />
    </section>
  );
}

export default page;
