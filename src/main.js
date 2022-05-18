"use strict"
// ==UserScript==
// @name         Joysound视频音效增强
// @author       qianjiachun
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjIgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+am95c291bmQvc2VsZWN0ZWQ8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YwQ0I5NSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTlCRTgwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImpveXNvdW5kL3NlbGVjdGVkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjc4NTc1MCwgMC43MTQyMjUpIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTYuNDI4NiwwIEwxNi40Mjg2LDkuNjQzIEMxNi40Mjg2LDE0LjEzNDU1MjcgMTIuODIzMzY2NywxNy43ODQyODggOC4zNDg5MzYxOCwxNy44NTYxNjk2IEw4LjE4NzE4MTUzLDE3Ljg1NzI1NjEgTDguMTg3MTgxNTMsMTcuODU3MjU2MSBMNy44NTcxLDE3Ljg1NzI1NjEgTDcuODU3MTM4OTYsMTcuODQ5NjQxIEMzLjQ5MjM4MDEzLDE3LjY2MjA3NDQgMCwxNC4wNTMxMzQxIDAsOS42NDMwNSBDMCw1LjExMzExNTA1IDMuNjg0NDAwMiwxLjQyODU1IDguMjE0MjUsMS40Mjg1NSBDOS43MDA3OTkxMywxLjQyODU1IDExLjA5NjI5ODUsMS44MjUzNTUwMiAxMi4zMDA0MTUxLDIuNTE4NjIzMzEgQzEyLjc0OTU2ODcsMS4wNjAxNjYwMSAxNC4xMDgyMjM2LDAgMTUuNzE0MzUsMCBMMTYuNDI4NiwwIFogTTguMjE0MjUsMi40Mjg1NSBDNC4yMzY2OTQ5NiwyLjQyODU1IDEsNS42NjUzODk3OCAxLDkuNjQzMDUgQzEsMTMuNTAwNzUwOCA0LjA0NDc3MzgsMTYuNjYxNzMzMyA3Ljg1NzA4ODk5LDE2Ljg0ODU2NjggTDcuODU3MDYyNTQsMTQuNTc1MDE3IEM2Ljc3Mjk4NjcxLDE0LjQ5NzMxMDMgNS43ODQ2MTcxOSwxNC4wNjg3NDc3IDUuMDA1MTgzMTEsMTMuNDAyNTU3OCBMNC45MjI0NzY5NywxMy4zMzAyNzYyIEw0LjgwNDkyNDY4LDEzLjIyMTc5NDEgQzMuODU5Mjk3NTksMTIuMzIwNjI4MyAzLjI2OTI1LDExLjA0OTU0OTYgMy4yNjkyNSw5LjY0MzAyNSBDMy4yNjkyNSw2LjkxNTg4MjYzIDUuNDg3MTA3NjMsNC42OTgwMjUgOC4yMTQyNSw0LjY5ODAyNSBDOS44MTQwMDc1Niw0LjY5ODAyNSAxMS4yMzg0NTI3LDUuNDYxMjEyMzMgMTIuMTQyNzY0NSw2LjY0MjcxMjE1IEwxMi4xNDI3NjQ1LDMuNTk0NjQ0OTEgQzExLjAxMTU4OTYsMi44NTczNjc2NSA5LjY2MTk5NDQ5LDIuNDI4NTUgOC4yMTQyNSwyLjQyODU1IFogTTguMjE0MjUsNS42OTgwMjUgQzYuMDM5MzkyMzcsNS42OTgwMjUgNC4yNjkyNSw3LjQ2ODE2NzM3IDQuMjY5MjUsOS42NDMwMjUgQzQuMjY5MjUsMTEuNjY5NTM3MyA1LjgwNjQ4MjY0LDEzLjM0NDc0OTggNy43NzU4ODgxNSwxMy41NjM1NjcyIEw3Ljg1NzEsMTMuNTcxNSBMOC4yMTQzNSwxMy41NzE1IEMxMC4zNDk2LDEzLjU3MTUgMTIuMDg2ODUsMTEuODY4IDEyLjE0MTYsOS43NDYgTDEyLjE0MjY0NjgsOS42NDMgTDEyLjE0MjY0NjgsOS4yODIzMzIzMyBDMTEuOTU5ODU4NSw3LjI3NTc1MDI2IDEwLjI2NzQ4MjMsNS42OTgwMjUgOC4yMTQyNSw1LjY5ODAyNSBaIE04LjIxNDI1LDcuNTAwMDI1IEM5LjM5NjE5Mjg0LDcuNTAwMDI1IDEwLjM1Nyw4LjQ2MDkzMzA5IDEwLjM1Nyw5LjY0MzAyNSBDMTAuMzU3LDEwLjgyNDkxNzQgOS4zOTYxNDIzNywxMS43ODU3NzUgOC4yMTQyNSwxMS43ODU3NzUgQzcuMDMyMTgyMTUsMTEuNzg1Nzc1IDYuMDcxNSwxMC44MjQ5OTE5IDYuMDcxNSw5LjY0MzAyNSBDNi4wNzE1LDguNDYwODU4NTUgNy4wMzIxMzE2OSw3LjUwMDAyNSA4LjIxNDI1LDcuNTAwMDI1IFogTTguMjE0MjUsOC41MDAwMjUgQzcuNTg0NDYzNDgsOC41MDAwMjUgNy4wNzE1LDkuMDEzMDk2MjcgNy4wNzE1LDkuNjQzMDI1IEM3LjA3MTUsMTAuMjcyNzMwNyA3LjU4NDQ5MDQyLDEwLjc4NTc3NSA4LjIxNDI1LDEwLjc4NTc3NSBDOC44NDM4NTc2MywxMC43ODU3NzUgOS4zNTcsMTAuMjcyNjMyNiA5LjM1Nyw5LjY0MzAyNSBDOS4zNTcsOS4wMTMxOTQzMyA4Ljg0Mzg4NDU3LDguNTAwMDI1IDguMjE0MjUsOC41MDAwMjUgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+
// @namespace    https://github.com/qianjiachun/joysound-tampermonkey
// @version      2022.05.18.01
// @description  🎵✨通用网页视频音效增强/优化。Enhance/Optimize video sound in web.
// @match        *://*/*
// @include      *://*/*
// @connect      yximgs.com
// @resource asyncPlayerPlugins https://static.yximgs.com/udata/pkg/acfun-player/asyncPlayerPlugins.b678fa.js
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_getResourceText
// @grant        GM_openInTab
// @license MIT
// ==/UserScript==

let Joysound = null;

let joysoundList = [];
let hasLoadedJs = false; // 是否已加载js
const LOCAL_NAME = "Ex_isJoysound"; // 是否开启joysound
const LOCAL_JS = "Ex_joysoundJs"; // 本地js代码
const LOCAL_JS_VERSION = "Ex_joysoundJsVersion"; // 本地js版本号
const JS_VERSION = "2022.03.21"; // js版本号，如有变动请修改这个值重新获取

class CustomJoysound {
    constructor(node) {
        this.item = new Joysound();
        this.item.init(node);
    }
    enable() {
        this.item.setEnabled(1);
    }
    disable() {
        this.item.setEnabled(0);
    }
}

async function enableJoysound() {
    // 开启joysound
    if (!hasLoadedJs) {
        loadJs();
    }
    if (joysoundList.length > 0) {
        for (let i = 0; i < joysoundList.length; i++) {
            joysoundList[i].setEnabled(1);
        }
    } else {
        let videoNodes = document.querySelectorAll("video");
        for (let i = 0; i < videoNodes.length; i++) {
            let item = new Joysound();
            item.init(videoNodes[i]);
            item.setEnabled(1);
            joysoundList.push(item);
        }
        if (videoNodes.length <= 0) {
            alert("【Joysound音效增强】未找到video元素，可能是在iframe或shadowRoot下");
        } else {
            unsafeWindow.AudioContext = null;
            unsafeWindow.webkitAudioContext = null;
        }
    }
    localStorage.setItem(LOCAL_NAME, 1);
}

function disableJoysound() {
    for (let i = 0; i < joysoundList.length; i++) {
        joysoundList[i].setEnabled(0);
    }
    localStorage.setItem(LOCAL_NAME, 0);
}

unsafeWindow.hasInstalledJoysound = true;
unsafeWindow.enableJoysound = enableJoysound;
unsafeWindow.disableJoysound = disableJoysound;
unsafeWindow.getJoysoundByVideoNode = function (node) {
    return new CustomJoysound(node);
};

GM_registerMenuCommand("开启", enableJoysound);
GM_registerMenuCommand("关闭", disableJoysound);
GM_registerMenuCommand("Github", openGithub);

function init() {
    if (!isEnabledJoysound()) {
        return;
    }
    let count = 0;
    let timer = setInterval(() => {
        if (hasVideoNode()) {
            clearInterval(timer);
            enableJoysound();
        }
        if (count >= 240) {
            clearInterval(timer);
        }
        count++;
    }, 500);
}

function getJs() {
    const STR = "b.safari";
    let ret = GM_getResourceText("asyncPlayerPlugins");
    let index = ret.indexOf(STR) + STR.length + 3;
    let js = ret.slice(0, index) + "Joysound=e;" + ret.slice(index);
    return js;
}

function loadJs() {
    // 判断有没有加载过js
    let js = GM_getValue(LOCAL_JS);
    let jsVersion = GM_getValue(LOCAL_JS_VERSION);
    if (js && jsVersion == JS_VERSION) {
        eval(js);
    } else {
        let js = getJs();
        GM_setValue(LOCAL_JS, js);
        GM_setValue(LOCAL_JS_VERSION, JS_VERSION);
        eval(js);
    }
    hasLoadedJs = true;
}

function hasVideoNode() {
    let videoNodes = document.querySelectorAll("video");
    return videoNodes.length > 0;
}

function isEnabledJoysound() {
    return localStorage.getItem(LOCAL_NAME) == 1;
}

function openGithub() {
	GM_openInTab("https://github.com/qianjiachun/joysound-tampermonkey", {
		active: true
	});
}

(async function () {
    init();
})();