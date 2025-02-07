 import { Fragment } from "react";
 import { useParams, Route, Outlet, Routes } from "react-router-dom";
 import Comments from '../components/comments/Comments'
 const QuoteDetail=()=>{
    const params= useParams();
    return <Fragment><h1> Quote Detail Page</h1>
        <p>{params.quoteId}</p>
        <Routes><Route path="comments" element={<Comments/>}/></Routes>
        <Outlet/>
        </Fragment>
 };

 export default QuoteDetail;