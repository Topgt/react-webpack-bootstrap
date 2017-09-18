# react-webpack-bootstrap

> 这个是在GitHub上看到的一个模仿京东的页面,自己刚好学习webpack和react不久，想练习一下。
就把别人项目的图片和数据拷贝了一份，然后页面和webpack.config.js根据自己理解从新写了一下，
这里引入了bootstrap，但是只用了一个轮播器和一些字体图标。webpack打包还有很大的优化空间以后
在慢慢修改一下。

> 接下来我可能想写一下dockerfile把这个小demo放到docker中运行，因为看了很多docker的资料
还没有真正实践过。

#### 运行截图
![screenshot](screenshot.png)

#### webpack 打包
- $ cd app
- $ npm install
- $ npm run start
### 启动node服务
- $ cd server
- $ npm install
- $ npm run start
> 做完以上两个步在浏览器中输入localhost:8088 就可以看到效果

#### 如何在docker中运行
**如果你的电脑安装有docker并且是联网状态，那你可以直接build Dockerfile**

- 把项目的node_moudles目录删除(如果存在)
> 因为不把它删除拷贝到docker中太慢了。
- 根据Dockerfile文件生成docker镜像
	- $ docker build -t testreact .
	- > testreact是名字随便起，别忘了后面的`.`
- 运行docker镜像生成docker容器
	- $ docker run -d -p 3000:3000 testreact
	- > 端口不要改就是本机3000端口对应容器3000端口，具体原因是因为端口写死了。改了就运行不了。
- 查看效果
	浏览起访问 localhost:3000
