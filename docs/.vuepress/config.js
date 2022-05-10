module.exports = {
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  host: '192.168.6.186',
  port: '9092',
  title: 'Qmagician 个人博客', // 网站的标题
  description: '前端、组件库、后端、全栈项目及其学习记录', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
}