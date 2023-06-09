import React from "react";
import { Link } from "gatsby";

import { getFormattedDate } from "../utils/helpers";

const monthsEnum = {
  1: "فروردین",
  2: "اردیبهشت",
  3: "خرداد",
  4: "تیر",
  5: "مرداد",
  6: "شهریور",
  7: "مهر",
  8: "آبان",
  9: "آذر",
  10: "دی",
  11: "بهمن",
  12: "اسفند",
};
export const Post = ({ node, prefix, newspaper }) => {
  let formattedDate;

  if (node.date) {
    if (!newspaper) {
      console.log(node.date);
      const dateArr = node.date.split("/");
      console.log(dateArr[2]);
      formattedDate =
        parseInt(dateArr[1]) + " " + monthsEnum[parseInt(dateArr[2])];
    } else {
      formattedDate = getFormattedDate(node.date);
    }
  }
  return (
    <Link to={node.slug} key={node.id} className="post">
      <h3>{node.title}</h3>
      <time>{formattedDate}</time>
    </Link>
  );
};
