/*
    html-menu
*/
import $ from "../../util/dom-core.js";

let count = 0;

// 构造函数
function ChangeHtml(editor) {
  this.editor = editor;
  this.$elem = $(
    `<div class="w-e-menu" title="html">
            <i class="w-e-icon-page-break"></i>
        </div>`
  );
  this.type = "click";

  // 当前是否 active 状态
  this._active = false;
}

// 原型
ChangeHtml.prototype = {
  constructor: ChangeHtml,
  // 点击事件
  onClick: function (e) {
    // 点击菜单将触发这里
    count++;
    const editor = this.editor;
    const $elem = this.$elem;
    if (count % 2) {
      this._active = true;
      $elem.addClass("w-e-active");
      const html = editor.txt.html();
      // console.log("html", html);
      editor.txt.texthtml(html);
    } else {
      this._active = false;
      $elem.removeClass("w-e-active");
      const text = editor.txt.texthtml();
      // console.log("text", text);
      editor.txt.html(text);
    }
  },
};

export default ChangeHtml;
