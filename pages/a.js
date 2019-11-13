import { withRouter } from "next/router"
import Head from "next/head";
import Link from "next/link";

const A = ({router, name}) => (
    <>
        <Link href="#">
           <a href="#">
              A {router.query.id} {name}
           </a>
        </Link>
        <style jsx>{`
        a{
        color:blue;
        }
        `}</style>
    </>
);

A.getInitialProps = async (ctx)=>{
 const promise = new Promise((resolve)=>{
     setTimeout(()=>{
         resolve({
             name:"jokcy"
         })
     },1000)
 });
    return await promise
};

export default withRouter(A)
