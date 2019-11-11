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
