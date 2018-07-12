const presets = [
  [
    "@babel/env", {
      targets: {
        browsers: ["last 2 versions", "not ie <= 10"]
      },
      useBuiltIns: "usage"
    }
  ],
  [
    "@babel/preset-react"
  ]
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  [
    "import", 
    { 
      "libraryName": "antd", 
      "libraryDirectory": "es", 
      "style": "css" 
    }
  ]
]

module.exports = { presets, plugins }