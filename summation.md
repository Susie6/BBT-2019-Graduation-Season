# 毕业季总宣任务总结

## 前端

### 遇到的问题与解决过程

1.背景图过大的解决方法：TinyPNG这个网站很好用，压缩很多遍都不会使图片失真，但反复压很浪费时间
2.页面排版时因为手机分辨率的不同，用百分比写的图片大小有可能会导致短屏手机上出现图片被压缩的情况，可以加`min-height`和`min-width`来防止压缩
3.主页面上的小人动画，一开始采用了雪碧图的方法，通过改变`background-position`来显示动画，但出现了`background-position`具体百分比很难找准、不同分辨率手机上显示不一样的问题，后来就改成了js动态改变小人图片的src来显示小人动画
4.loading动画里面有个自行车轮子转动的动画，轮子图片和自行车图片是分开的，用百分比来写大小的话有可能出现崩掉的情况，而且其实自行车的大小很小，用px来写死大小也没有问题，最后就是写死大小，就不会崩掉了
5.loading动画的进度条，我在网上查了很多资料，但发现是没有办法获取网页的真正加载进度的，所以最后学习了`preload.js`，用加载图片的速度来模拟网页加载速度。而且为了提高用户体验，我设置了主页面图片在loading页面的时候加载，加载完立刻跳转到主页面，然后同时开始加载导航页面和子页面的图片

### 反思 
页面上线之后修改过一次代码，是因为点击按钮图片后图片会放大然后才跳转，应该要加上preventDefault