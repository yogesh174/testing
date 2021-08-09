module.exports = {
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "../output",
        outputName: "junit-frontend1.xml",
      },
    ],
  ],
};
