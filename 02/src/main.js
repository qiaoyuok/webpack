
import './css/css.css'
import './css/css.less'
// import './css/css.scss'
import 'bootstrap/dist/css/bootstrap.css'



// 需要
// 第一套包：cnpm i  babel-loader babel-core babel-plugin-transform-runtime -D 加载器
//第二套包：cnpm i babel-preset-env babel-preset-stage-0 -D
// 在 webpack.config.js 文件中配置规则
// {test:/\.js$/,use:'babel-loader','exclude':'/node-modules/'}
// 在项目呢根目录新键一个叫做 .babelrc 的babel配置文件，这个配置文件，属于JSON格式，所以在写，.babelrc 配置的时候，必须符合JSON语法规范；不能写注释，字符串必须使用双引号
//   配置如下：
// {
//   "presets":["env","stage-0"],
//   "plugins":["transform-runtime"]
// }
class Person{
  static name = '孙乔雨';
}
