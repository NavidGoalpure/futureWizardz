const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'باشگاه کدنویسی جادوگران آینده', // Navigation and Site Title
  siteTitleAlt: 'کدنویسی', // Alternative Site title for SEO
  siteUrl: 'https://portfolio-cara.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'fa', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'معرفی و ثبت نام در دوره های آموزشی کدنویسی برای نوجوانان',

  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: '@cara', // Twitter Username
  ogSiteName: 'جادوگران آینده', // Facebook Site Name
  ogLanguage: 'fa', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
