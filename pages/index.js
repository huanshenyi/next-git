import Link from "next/link";
import Router from "next/router";
import {Button} from "antd";

const events = [
  "routeChangeStart",
  "routeChangeComplete",
  "routeChangeError",
  "beforeHistoryChange",
  "hashChangeStart",
  "hashChangeComplete"
];

export default () => {
    function gotoTestA() {
        Router.push({
            pathname: "/a",
            query: {
                id : 2
            }
        },"/a/1")
    }
    return (
        <>
        <Link href="/a?id=1" as="/a/1">
            <Button>Index</Button>
        </Link>
        <Button onClick={gotoTestA}>test a</Button>
        </>
    )
}
