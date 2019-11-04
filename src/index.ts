import SpaceGroteskLightTwo from "./assets/fonts/SpaceGrotesk-Light.woff2";
import SpaceGroteskLight from "./assets/fonts/SpaceGrotesk-Light.woff";

const classSafeStrings = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-".split(
  ""
);

const usingStrings = (classSafeStrings.join("") + "/:.+=").split("");

const randomString = (count: number): string => {
  return [...Array(count)]
    .map(() => usingStrings[Math.floor(Math.random() * usingStrings.length)])
    .join("");
};

const randomStringClassSafe = (count: number): string => {
  return [...Array(count)]
    .map(
      () =>
        classSafeStrings[Math.floor(Math.random() * classSafeStrings.length)]
    )
    .join("");
};

const makeStyle = (className: string): string => {
  console.log(
    randomString(Math.floor(Math.random() * usingStrings.length * 10))
  );
  return `.${className}::before { content: "${randomString(
    Math.floor(Math.random() * usingStrings.length * 10)
  )}"; } .${className}::after { content: "${randomString(
    Math.floor(Math.random() * usingStrings.length * 10)
  )}"; } `;
};

const makeBody = (text: string): string => {
  const texts = text.split("");
  const classes = texts.map(() =>
    randomStringClassSafe(
      Math.floor(Math.random() * classSafeStrings.length * 10)
    )
  );

  const style = `
  @font-face {
    font-family: "Space Grotesk Light";
    font-weight: 400;
    font-style: normal;
    src: url(${SpaceGroteskLightTwo}),url(${SpaceGroteskLight}) format("woff2");
  }
  body {
    background-color: #000;
    color: #fff;
    word-break: break-all;
    font-family: 'Space Grotesk Light',sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 0.8;
  } ${classes.map(cl => makeStyle(cl)).join("")}`;

  const body = `${texts
    .map((c, i) => `<span class="${classes[i]}">${c}</span>`)
    .join("")}`;

  const html = `<!DOCTYPE html>
    <html lang="js">
      <head>
        <meta charset="utf-8">
        <style>${style}</style>
      </head>
      <body>${body}</body>
    </html>`.replace(/ +(?= )/g, "");
  return html;
};

const content = ["naari3", "NAARI3", "http://github.com/naari3"];

document.querySelector("html").innerHTML = makeBody(
  content[Math.floor(Math.random() * content.length)]
);
