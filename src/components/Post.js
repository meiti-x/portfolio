import React from "react";
import { Link } from "gatsby";

import {
  georgianToPersianDigits,
  getFormattedDate,
  monthsEnum,
} from "../utils/helpers";

export const Post = ({ node, prefix, newspaper }) => {
  let formattedDate;
  console.log(node);
  if (node.date) {
    if (!newspaper) {
      const dateArr = node.date.split("/");
      formattedDate =
        parseInt(dateArr[2]) + " " + monthsEnum[parseInt(dateArr[1])];
    } else {
      formattedDate = getFormattedDate(node.date);
    }
  }
  return (
    <Link to={node.slug} key={node.id} className="post">
      <h3>{node.shortTitle}</h3>
      <time>{georgianToPersianDigits(formattedDate)}</time>
    </Link>
  );
};
