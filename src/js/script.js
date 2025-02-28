// addit. task

const changeCase = function (string) {
  let changeString = "";
  for (const elem of string) {
    changeString +=
      elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase();
  }
  return changeString;
};

console.log(changeCase("JavaScript"));

// 2 addit. task

const slugify = function (string) {
  const slug = string.toLowerCase().split(" ").join("-");
  return slug;
};

console.log(slugify("Top 10 benefits of React framework"));
