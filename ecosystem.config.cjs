require("dotenv").config();

module.exports = {
  deploy: {
    prod: {
      user: "holyxey",
      host: process.env.DEPLOY_HOST,
      ref: "origin/main",
      repo: "git@github.com:Holyxey/holyxey-test-kollektiv.git",
      path: "/var/www/apps/holyxey-test-kollektiv",
      "pre-deploy":
        "export PATH=$PATH:/home/linuxbrew/.linuxbrew/bin && bun install",
      "post-deploy":
        "export PATH=$PATH:/home/linuxbrew/.linuxbrew/bin && bun nuxt cleanup && bun nuxt generate",
    },
  },
};
