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

#グローバル配置
D:\program\react\nextjs-project\pages\_app.js
```text
import App from "next/app"
import "antd/dist/antd.css"

export default App
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

## 動的ルーティング

```text
1. Link
 import Link from "next/link";
 <Link href="/a?id=1">
       <Button>Index</Button>
 </Link>

2. Router
import Router from "next/router";
  Router.push({
            pathname: "/a",
            query: {
                id : 2
            }
        })
```

##ルーティングのパラメータ取得

```text
import { withRouter } from "next/router"
const A = ({router}) => (
    <h1>{router.query.id}</h1>
);

export default withRouter(A)
```

## ルーティングのreflect
- あんまり良くない(nodejsでミドルウェアとして使用する場合以外)
```text
1. Link
<Link href="/a?id=1" as="/a/1">
        <Button>Index</Button>
</Link>

2. Router
 function gotoTestA() {
        Router.push({
            pathname: "/a",
            query: {
                id : 2
            }
        },"/a/1")
    }
```
## ルーティングのライフサイクル

```text
const events = [
  "routeChangeStart",
  "routeChangeComplete",
  "routeChangeError",
  "beforeHistoryChange",
  "hashChangeStart",
  "hashChangeComplete"  
];
```

# getInitialProps 
データ取得用

```text
import { withRouter } from "next/router"
const A = ({router, name}) => (
    <h1>{router.query.id} {name}</h1>
);

A.getInitialProps = async ()=>{
 const promise = new Promise((resolve)=>{
     setTimeout(()=>{
         resolve({
             name:"jokcy"
         })
     },1000)
 });

export default withRouter(A)
```

# カスタマイズ _app

````text
import App, { Container } from "next/app"
import "antd/dist/antd.css"

import Layout from "../components/Layout";

class MyApp extends App {
    //グローバルのデータ取得
    static async getInitialProps({ Component }){
        //ページ変わるたびに呼び出される
        let pageProps;
        if (Component.getInitialProps){
            pageProps = await Component.getInitialProps();
        }
        return {
            pageProps
        }
    }

    render() {
        //ここにある Componentは各ページ(pagesフォルダにあるファイル)のこと
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </Container>
        )
    }
}

export default MyApp
````

## layoutの使用

```text
import {Button} from "antd";
import Link from "next/link";

export default ({ children }) => (
    <>
        <header>
            <Link href="/a?id=1" as="/a/1">
                <Button>layout</Button>
            </Link>
        </header>
        {children}
    </>
)
```

# _document.jsの使用

```text
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx){
        const props = await Document.getInitialProps(ctx);
        return {
            ...props
        }
    }

    render() {
        return(
            <Html>
                <Head>
                    <title>My App</title>
                    <style>{`.test { color:red }`}</style>
                </Head>
                <body className="test">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
export default MyDocument;
```
