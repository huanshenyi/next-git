npm i -g create-next-app

yarn add antd babel-plugin-import 

yarn add @zeit/next-css

.babelrc
```text
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd"
      }
    ]
  ]
}
```
