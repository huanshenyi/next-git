import App from "next/app"
import "antd/dist/antd.css"

import Layout from "../components/Layout";

class MyApp extends App {
    //グローバルのデータ取得
    static async getInitialProps({ Component, ctx }){
        //ページ変わるたびに呼び出される
        let pageProps = {};
        if (Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps
        }
    }

    render() {
        //ここにある Componentは各ページ(pagesフォルダにあるファイル)のこと
        const { Component, pageProps } = this.props;
        return (
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
        )
    }
}

export default MyApp
