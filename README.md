# Joysound视频音效增强 ![icon](https://s4.ax1x.com/2022/02/11/HNIAQH.png)
> 🎵✨Joysound视频音效增强是一款基于Tampermonkey的脚本，使用wasm技术对网页中的视频音效进行增强优化，使得声音更加立体饱满

## 注意事项（Attention）
1. joysound来源于acfun
2. 若网页中没有video元素，则不起作用，常见有以下两种情况
    - video元素在iframe中
    - video元素在shadowRoot中
3. 开启和关闭状态会自动进行保存
4. **安装脚本后默认全局开启，如果遇到网页视频没有声音的情况，请手动关闭音效**
5. 脚本启动后会将全局挂载的`AudioContext`和`webkitAudioContext`置为null，此举可能会导致原生网页的音效功能失效，请注意。

## 使用（Usage）
1. 首先确保已经安装Tampermonkey
2. [安装本脚本](https://greasyfork.org/zh-CN/scripts/439845)
3. 访问网页，点击Tampermonkey图标，在弹出的菜单（Menu）中即可选择开启/关闭音效
  
![img](https://s4.ax1x.com/2022/02/11/HNIWtK.png)

## 接口（API）
> 为了方便与其他脚本联动，本项目为用户提供了API

### hasInstalledJoysound
```
// 判断是否安装了脚本，true则为已经安装
window.hasInstalledJoysound
```

### enableJoysound
```
// 用于开启音效增强
window.enableJoysound();
```

### disableJoysound
```
// 用于关闭音效增强
window.disableJoysound();
```

### getJoysoundByVideoNode
```
// 对网页中自定义的video元素进行音效增强
let videoNode = document.querySelector("video");
let joysound = window.getJoysoundByVideoNode(videoNode);
joysound.enable(); // 开启
joysound.disable(); // 关闭
```

### 判断是否开启了Joysound
```
localStorage.getItem("Ex_isJoysound"); // 1开启 0关闭
```