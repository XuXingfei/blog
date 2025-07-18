# 前端

## 浏览器

### Bookmarklet

#### vue输入账号密码

```js
javascript: (function(phone = 13315511111, pwd = '123123') {
    document.querySelectorAll('uni-input').forEach((i, idx) => {
        if (idx < 4) {
            if (i.__vue__) {
                if (idx == 0) {
                    i.__vue__.$emit('update:value', phone)
                } else {
                    i.__vue__.$emit('update:value', pwd)
                }
            }

            if (i.__vnode) {
                if (idx == 0) {
                    i.__vnode.ctx.emit('update:modelValue', phone)
                } else {
                    i.__vnode.ctx.emit('update:modelValue', pwd)
                }
            }

            i.dispatchEvent(new Event('input'))
        }
    });
})();
```

#### 输出扩展属性

```js
javascript:(function() {    var iframe = document.createElement("iframe");    document.body.appendChild(iframe);    var originWindow = iframe.contentWindow,        currentWindow = window;    var origin = Object.keys(originWindow),        current = Object.keys(currentWindow),        extendAttr = {};    current.forEach((key) => {        if (originWindow[key] === undefined) {            extendAttr[key] = currentWindow[key]        };    });    console.log(`origin window:${origin.length},current window:${current.length},extentAttr:${Object.keys(extendAttr).length}`);    console.log(`extendAttr:`,  extendAttr );    document.body.removeChild(iframe);})();
```
