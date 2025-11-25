module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/login"
    ],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 0.9 }]
      }
    },
    upload: {
      target: "filesystem", 
      outputDir: "./lhci-results"
    }
  }
};
