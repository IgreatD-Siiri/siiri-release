module.exports = {
  base: "/siiri-release/",
  title: "移动端更新日志",
  themeConfig: {
    logo: "/logo.png",
    lastUpdated: "最后更新时间",
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
        title: "BMCS", // 必要的
        path: "/BMCS/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          { title: "生产", path: "/BMCS/release/" },
          { title: "测试", path: "/BMCS/test/" },
        ],
      },
      {
        title: "EPCM", // 必要的
        path: "/EPCM/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
      },
    ],
  },
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
  ],
};
