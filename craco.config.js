const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@assets": resolvePath("./src/assets/"),
      "@hooks": resolvePath("./src/hooks/"),
      "@utils": resolvePath("./src/utils/"),
      "@json": resolvePath("./src/json/"),
    },
  },
};
