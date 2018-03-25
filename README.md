# onMind
一个vue + vue-router + vuex  + webpack + koa2 + scss + es6 搭建的在线思维导图制作平台

## 功能一览

* 图文编辑（流程图、思维导图、文本代码格式化）
* 客户端采用浏览器方式，支持跨平台操作
* 作品的分享、协同编辑等功能

## 开发环境

  win10 

## 技术栈：

vue + vue-router + vuex  + webpack + koa2 + scss + es6


## 总结

### 服务构建

``` bash
# 依赖安装
npm install

# 服务启动
npm run dev

# 打包文件
npm run build

# 文档构建
npm run build --report

# 请求路径
http://127.0.0.1:8080/pages/homePage.html

```

### 容器化

```bash
cd deepnet-web
# 服务构建
docker build -t deepnet-web .
# 运行服务
docker run --name deepnet-web-service -d -p8000:8000 deepnet-web
# 查看服务
docker ps
# 请求路径
http://127.0.0.1:8000/depth/pages/homePage.html
```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
