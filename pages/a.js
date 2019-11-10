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
    return await promise
};

export default withRouter(A)
