# 前端

## uni-app

### 报错

#### 老项目 sass 报错

[css预处理器支持](https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#css-preprocessor)

```json
"sassImplementationName" : "node-sass"
```

## 小程序

### 微信小程序

- 信息查询
- 图片编辑

## 浏览器

### Bookmarklet

#### uni-app输入账号密码

```js
javascript:(function(phone=13315511111,pwd="123123"){document.querySelectorAll("uni-input").forEach((i,idx)=>{if(idx<4){if(i.__vue__){if(idx==0){i.__vue__.$emit("update:value",phone)}else{i.__vue__.$emit("update:value",pwd)}}if(i.__vnode){if(idx==0){i.__vnode.ctx.emit("update:modelValue",phone)}else{i.__vnode.ctx.emit("update:modelValue",pwd)}}i.dispatchEvent(new Event("input"))}})})();
```

#### 输出扩展属性

```js
javascript:(function() {    var iframe = document.createElement("iframe");    document.body.appendChild(iframe);    var originWindow = iframe.contentWindow,        currentWindow = window;    var origin = Object.keys(originWindow),        current = Object.keys(currentWindow),        extendAttr = {};    current.forEach((key) => {        if (originWindow[key] === undefined) {            extendAttr[key] = currentWindow[key]        };    });    console.log(`origin window:${origin.length},current window:${current.length},extentAttr:${Object.keys(extendAttr).length}`);    console.log(`extendAttr:`,  extendAttr );    document.body.removeChild(iframe);})();
```

#### kmDoc1

```js
javascript:(function(){$(document).ready(function(){$("table").on("dblclick",function(){let data={};$(this).find("tbody tr").each(function(){const key=$(this).find("td").first().text().trim();data[key]=""});const jsonString=JSON.stringify(data,null,4).replace(/"(\w+)":/g,"$1:").replace(/"/g,"'");console.log(jsonString);copyToClipboard(jsonString)});$("pre").on("dblclick",function(){const content=$(this).text().trim();copyToClipboard(content)});function copyToClipboard(text){const tempInput=document.createElement("textarea");document.body.appendChild(tempInput);tempInput.value=text;tempInput.select();document.execCommand("copy");document.body.removeChild(tempInput)}})})();
```

#### kmDoc2

```js
javascript:(function(){ try { function expandAll() { var plusIcons = document.querySelectorAll('.treeview .expand-icon.glyphicon-plus'); if (plusIcons.length > 0) { plusIcons.forEach(function(icon) { icon.click(); }); setTimeout(expandAll, 200); } else { var hiddenNodes = document.querySelectorAll('.treeview .list-group-item[style*="display: none"], .treeview .list-group-item[style*="display:none"]'); hiddenNodes.forEach(function(node) { node.style.display = 'block'; }); alert('✅ 所有菜单层级已展开完成！'); } } expandAll(); } catch(e) { console.error('展开失败:', e); alert('❌ 展开失败: ' + e.message); } })();
```
