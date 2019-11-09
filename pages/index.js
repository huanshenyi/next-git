import Link from "next/link";
import Router from "next/router";
import {Button} from "antd";

export default () => {
    function gotoTestA() {
        Router.push("/a")
    }
    return (
        <>
        <Link href="/a">
            <Button>Index</Button>
        </Link>
        <Button onClick={gotoTestA}>test a</Button>
        </>
    )
}
