# ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAABmJLR0QA/wD/AP+gvaeTAAADOUlEQVQ4jbWST2hcVRTGv3PfzGtsS2Nnkgy21IU0rmyFGGRaCWEsiLUbFwUXFSmiaOmi4NhCMy2+DAVJabAKIkEjVNTFGGqpQSmIY20qqQ1CtNGFNKUUQjvpzCRDmol5757PRdtk/oUu1APf5r7z/d75zr2C/6Dyv3y4yRhsJkK/RjrfmAWA0L8BcsJzS3daBgi+AoUxxo8DuPRA8NzoyZhvzEuA7ACwCYBP4JoQF5U8VbwjRwXce79fIEvehmDSMzOXIz0+cQDEWQhPAXaSKiriPAZwtxGkhWxipdG3K4M5NhCeufT3EMg16gQd0aeTN2pafgNwpnD5/Sdg8ftKaevARb/8AYRcvzD7vCS8gBOeWyite1EEnYCxBMYiBTNc8oMpa6TK61eswlR+yI/2xwF9ISi7L0vCCwqjJ7cWS81/CLAPZJ5qfVE9UIwE4wpsAYkqrTixykGSx9oS++emf3rvEao9B8iR6Pa3BqsG+Ln/VQJnUM0CxK8Hc8JzCzP6rKP+awBgjB4iebrlmeRg8UL/kyp4B4YUw95IPPlpYeREBwX7q8DLd7e8itnbazYCWni463Dx7t91pwE/YtYLqdFhiH4nwDlaDDOTcdTYzwCiWg3AiyE2gywtJaBGrF3M5x4KR0l1I9vf/mT9tuTHpDblHv2rxZrgOqmolDrBYh3YyOI0yRiWydeMY7bE4qlboP6ZH+k7nb/Y9zXIK7F46lYoCG2tvTwJ9GYdOLotNUWl5s4fbwcAJT5XixRJKTurdqrqsFr9puy4u5j1QtZqmiQqdKOlq6ceLCIUgyER+zoAtEYXBiCU/IV3M83zC6vbunsG27p7Bt358rrbjvuVCOM1+x0SkaVFV73w6ZG+DbDBuKNIRBKpK7mst1YctxfkmwTGzd3QHQCaUF1z1HB7W+LQzYZgAJg+f2wPiV46znOxrsOTADA15q0Oz4WTBNO1/ffS7mntTn1ZeWZqm1q7j3xB6gmx/kgum97LTMbZ0OnNQ4JJQFGjgNR9tdCGEy9N/kP6KSvsF+BxAb4lpBng7mWj/CjQg60Jb6xhipXA9yuX9TarSkKE7QQCEbkONd/Hdhy9+iDv/1L/AIktusMiTJKeAAAAAElFTkSuQmCC)Joysound视频音效增强
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