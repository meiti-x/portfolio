export function getSimplifiedPosts(posts, options = {}) {
  return posts.map((post) => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.frontmatter.slug,
    tags: post.node.frontmatter.tags,
    categories: post.node.frontmatter.categories,
    title:  post.node.frontmatter.title,
    shortTitle: post.node.frontmatter.shortTitle,
    description: post.node.frontmatter.description,
    ...(options.thumbnails && {
      thumbnail: post.node.frontmatter?.thumbnail?.childImageSharp?.fixed,
    }),
  }));
}
export function georgianToPersianDigits(text) {
  if (!text) return;
  text = String(text);
  return text.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
export function getTaxonomyFromPosts(posts, taxonomy) {
  return posts
    .reduce((acc, post) => {
      return [...new Set([...acc, ...(post[taxonomy] || [])])];
    }, [])
    .sort();
}

export function slugify(string) {
  return (
    string &&
    `${string}`
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-")
  );
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function appendComments() {
  const commentDiv = document.getElementById("append-comments-here");
  const commentScript = document.createElement("script");
  const theme = localStorage.getItem("theme");

  commentScript.async = true;
  commentScript.src = "https://utteranc.es/client.js";
  commentScript.setAttribute("repo", "taniarascia/comments");
  commentScript.setAttribute("issue-term", "pathname");
  commentScript.setAttribute("id", "utterances");
  commentScript.setAttribute(
    "theme",
    theme === "dark" ? "github-dark" : "github-light"
  );
  commentScript.setAttribute("crossorigin", "anonymous");

  if (!commentDiv.firstChild) {
    commentDiv.appendChild(commentScript);
  } else {
    console.error("Error adding utterances comments");
  }
}

export function getFormattedDate(date) {
  const dateArr = date.split("/");
  const formattedDate =
    parseInt(dateArr[2]) +
    " " +
    monthsEnum[parseInt(dateArr[1])] +
    " " +
    dateArr[0];

  return georgianToPersianDigits(formattedDate)   ;
}
export const monthsEnum = {
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
