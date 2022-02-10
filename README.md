# ![img](https://imgtu.com/i/HNIAQH)Joysound视频音效增强
> Joysound视频音效增强是一款基于Tampermonkey的脚本，使用wasm技术对网页中的视频音效进行增强优化，使得声音更加立体饱满

## 注意事项（Attention）
1. joysound来源于acfun
2. 若网页中没有video元素，则不起作用，常见有以下两种情况
    - video元素在iframe中
    - video元素在shadowRoot中
3. 开启和关闭状态会自动进行保存

## 使用（Usage）
1. 首先确保已经安装Tampermonkey
2. [安装本脚本]()
3. 访问网页，点击Tampermonkey图标，在弹出的菜单（Menu）中即可选择开启/关闭音效


## 接口（API）
> 为了方便与其他脚本联动，本项目为用户提供了3个API使用

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
let joysound = getJoysoundByVideoNode(videoNode);
joysound.enable(); // 开启
joysound.disable(); // 关闭
```