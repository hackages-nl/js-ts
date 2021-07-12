module.exports = {
  roots: ["src", "test"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**\\*.(spec|test).(tsx|ts|js)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  watchPathIgnorePatterns: ["<rootDir>/node_modules"],
};
