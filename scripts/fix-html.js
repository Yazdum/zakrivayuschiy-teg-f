const fs = require("fs");
const path = require("path");

// Удаляем trailing slashes из void элементов HTML
const htmlFile = path.join(__dirname, "..", "index.html");
let content = fs.readFileSync(htmlFile, "utf8");

// Void элементы в HTML5 не требуют закрывающего слэша
const voidElements = [
  "meta",
  "link",
  "img",
  "input",
  "br",
  "hr",
  "base",
  "col",
  "embed",
  "param",
  "source",
  "track",
  "wbr",
  "area",
];

voidElements.forEach((tag) => {
  const regex = new RegExp(`<(${tag})([^>]*?)\\s*/>`, "gi");
  content = content.replace(regex, `<$1$2>`);
});

fs.writeFileSync(htmlFile, content, "utf8");
console.log("HTML trailing slashes fixed");
