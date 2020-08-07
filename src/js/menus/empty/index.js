/*
    empty-menu
*/
import $ from '../../util/dom-core.js'

// 构造函数
function Empty(editor) {
    this.editor = editor
    this.$elem = $(
        `<div class="w-e-menu" title="清空">
            <i class="w-e-icon-trash-o"></i>
        </div>`
    )
    this.type = 'click'

    // 当前是否 active 状态
    this._active = false
}

// 原型
Empty.prototype = {
    constructor: Empty,
    // 点击事件
    onClick: function (e) {
        // 点击菜单将触发这里
        const editor = this.editor
        editor.txt.clear();
        editor.change && editor.change()
    }
}

export default Empty