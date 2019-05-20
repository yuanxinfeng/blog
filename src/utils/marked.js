import marked from "marked";
import Hljs from "highlight.js";
const renderer = new marked.Renderer();

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return Hljs.highlightAuto(code).value;
  }
});

// 段落解析
const paragraphParse = text => {
  const textIsImage = text.includes("<img");
  if (textIsImage) return `<div class="image-package">${text}</div>`;
  return `<p>${text}</p>`;
};

// 对图片进行弹窗处理, 及懒加载处理
const imageParse = (src, title, alt) => {
  return `<img
            src="${src}?imageMogr2/auto-orient/interlace/1/blur/1x0/quality/75|watermark/2/text/amtjaGFvLmNu/font/5qW35L2T/fontsize/720/fill/I0ZERkRGRA==/dissolve/100/gravity/SouthEast/dx/10/dy/10|imageslim"
            title="${title || alt || "blog.lcylove.cn"}"
            data-src="${src}"
            class="img-pop"/>
          `;
};

// 外链
const linkParse = (href, title, text) => {
  return `<a href="${href}"
             target="${href.substr(0, 1) === "#" ? "_self" : "_blank"}" 
             class="${href.substr(0, 1) === "#" ? "" : "c-link"}"
             title="访问 ${text} | Welcome to Pawn's blog!">
             ${
               href.substr(0, 1) === "#"
                 ? text
                 : text.length > 40
                 ? text.slice(0, 40) + "..."
                 : text
             }
          </a>`
    .replace(/\s+/g, " ")
    .replace("\n", "");
};

renderer.link = linkParse;
renderer.paragraph = paragraphParse;
renderer.image = imageParse;

export default (content, tags, parseHtml = false) => {
  if (typeof content !== "string") {
    return "";
  }
  marked.setOptions({ sanitize: !parseHtml });
  let index = 0;
  renderer.heading = function(text, level) {
    return `<h${level} id="titleAnchor-${index++}">${text}</h${level}>\n`;
  };

  let html = marked(content, { renderer });

  // 返回解析内容
  return html;
};
