module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
