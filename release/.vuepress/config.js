module.exports = {
  base: "/siiri-release/",
  title: "移动端更新日志",
  lang: "zh-CN",
  themeConfig: {
    logo: "/logo.png",
    lastUpdated: true,
    lastUpdatedText: "最后更新时间",
    contributors: false,
    nav: [
      {
        text: "项目",
        items: [
          { text: "BMCS", link: "/BMCS/" },
          { text: "EPCM", link: "/EPCM/" },
        ],
      },
    ],
    sidebar: [
      {
        text: "BMCS", // 必要的
        link: "/BMCS/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          { text: "生产", link: "/BMCS/release/" },
          { text: "测试", link: "/BMCS/test/" },
        ],
      },
      {
        text: "EPCM", // 必要的
        link: "/EPCM/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
      },
    ],
  },
};
