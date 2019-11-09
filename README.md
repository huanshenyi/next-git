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

# ルーティング
```text
1. Link
 import Link from "next/link";
...
    <Link href="/a">
        <Button>Index</Button>
    </Link>
...

2. Router

import Router from "next/router";

 function gotoTestA() {
        Router.push("/a")
    }
```
