multipages_scaffold（多页面脚手架）
==================
---
> 开发文件目录说明
## website

* .gitignore git黑名单
* package.json 项目配置
* config.js webpack配置的动态查找所有入口文件

##### build
    + webpack.common.js webpack的统一配置
    + webpack.dev.js webpack的开发环境配置
    + webpack.prod.js webpack的打包环境配置

##### dist 打包后的文件存放目录

##### src

* pages

    + pageOne 页面一的demo
        - entryJs 入口文件所在文件夹
        - imgs 图片资源
        - style 样式文件
        - unit 公用js和工具库
        - index.html 入口文件的html模板（要求名字要和入口文件的js名字一致）

    + pageTwo 页面二的demo
        - entryJs 入口文件所在文件夹
        - index.html 入口文件的html模板（要求名字要和入口文件的js名字一致）


---

> 项目本地开发（当创建其他页面时也要参照如下配置）

  页面一 npm run pageOnedev  //package.json的script需要配置 "pageOnedev": "webpack-dev-server --env.project=pageOne --dev --open --progress --config build/webpack.dev.js",
  页面二 npm run pageTwodev  //package.json的script需要配置 "pageTwodev": "webpack-dev-server --env.project=pageTwo --dev --open --progress --config build/webpack.dev.js"

> 项目打包（当创建其他页面时也要参照如下配置）

  页面一：npm run pageOne  //package.json的script需要配置 "pageOne": "webpack --env.project=pageOne --config build/webpack.prod.js",
  页面二：npm run pageTwo  //package.json的script需要配置 "pageTwo": "webpack --env.project=pageOne --config build/webpack.prod.js",