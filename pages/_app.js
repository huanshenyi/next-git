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
