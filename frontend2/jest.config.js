module.exports = {
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "../output",
        outputName: "junit-frontend2.xml",
      },
    ],
  ],
};
