### HuaTianXiaoQi

对React Native开发APP感兴趣，照着 **花田小憩APP** 开发了几个页面, 只测试过ios环境，欢迎指导。

![alt text](./info.gif "info")

目录结构:

- App - RN 总目录
  - components - 用于存放组件
  - images - 用于存放图片
  - pages - 用于存放页面

### 开发记录

1.初始化RN项目

```
react-native init HuaTianXiaoQi
```

2.使用组件

- 底部导航
```
npm install react-native-tab-navigator --save
```

- 图片轮播
```
npm install react-native-viewpager --save
```

### 遇到的问题

- 模块路径存在，但找不到模块。

It tries to require the package from home directory instead of the project's node_modules directory, and the following wrror appears,

Unable to resolve module some-module from /Users/username/projectname/AwesomeProject/index.js: Invalid directory /Users/node_modules/some-module
Currently, the workarounds seem to be,

Delete the node_modules folder
```
rm -rf node_modules && npm install
```
Reset packager cache
```
rm -fr $TMPDIR/react-* or node_modules/react-native/packager/packager.sh --reset-cache
```
Clear watchman watches
```
watchman watch-del-all
```

- webview 不能访问 http 请求
iOS9引入了新特性App Transport Security (ATS)。详情：[App Transport Security (ATS)](https://developer.apple.com/library/prerelease/ios/releasenotes/General/WhatsNewIniOS/Articles/iOS9.html#//apple_ref/doc/uid/TP40016198-DontLinkElementID_13)
新特性要求App内访问的网络必须使用HTTPS协议。
使用http协议的解决办法：
在Info.plist中添加NSAppTransportSecurity类型Dictionary。
在NSAppTransportSecurity下添加NSAllowsArbitraryLoads类型Boolean,值设为YES
