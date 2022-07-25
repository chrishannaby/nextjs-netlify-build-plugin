const redirects = [
  {
    from: "/netlify",
    to: "https://www.netlify.com",
    status: 301,
    force: true,
  },
];

module.exports = {
  onPreBuild({ netlifyConfig }) {
    for (const redirect of redirects) {
      netlifyConfig.redirects.push(redirect);
    }
  },
};
