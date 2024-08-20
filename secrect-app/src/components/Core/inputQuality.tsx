"use client";
import React, { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { database } from "../../../appwrite";

const sizeBox = [
  { key: "lg", value: 50 },
  { key: "md", value: 40 },
  { key: "sm", value: 30 },
];
function InputQuality({
  size = "md",
  defalutValue,
  id,
}: {
  size?: "sm" | "md" | "lg";
  defalutValue: number;
  id?: string;
}) {
  const DB_ID = process.env.DATABASE_ID;
  const cartID = process.env.CART_TABLE_ID;
  const [count, setCount] = useState<number>(defalutValue);

  useEffect(() => {
    async function changeQuality() {
      if (DB_ID && cartID) {
        const changes = await database.updateDocument(
          DB_ID,
          cartID as string,
          "66b72dfe000fded29fb7",
          {
            count: count,
          }
        );
      }
    }

    changeQuality();
  }, [count]);
  return (
    <div>
      <div
        className={`flex border rounded-xl items-center w-[200px] h-[${
          sizeBox.find((item) => item.key === size)?.value
        }px]  px-2`}
      >
        <Button
          className={`h-[${
            Number(sizeBox.find((item) => item.key === size)?.value) - 10
          }px]`}
          onClick={() => count > 1 && setCount(count - 1)}
        >
          <FiMinus size={18} className="" />
        </Button>
        <Input
          type="number"
          className={`border-none outline-none h-[${
            Number(sizeBox.find((item) => item.key === size)?.value) - 10
          }px] text-center `}
          value={count}
          max={999}
          min={1}
          inputMode="numeric"
          onChange={(e) =>
            Number(e.target.value) > 999 || Number(e.target.value) < 1
              ? setCount(1)
              : setCount(Number(e.target.value))
          }
        />
        <Button
          className={`h-[${
            Number(sizeBox.find((item) => item.key === size)?.value) - 10
          }px]`}
          onClick={() => setCount(count + 1)}
        >
          <FiPlus size={18} className="  " />
        </Button>
      </div>
    </div>
  );
}

export default InputQuality;
