import { useEffect, useState } from 'react';
import {PAGE_COMPONENTS} from '../consts';

function Page({pageName, setPageName}){
    let Component = PAGE_COMPONENTS["notfound"] 
    if(PAGE_COMPONENTS[pageName])
        Component = PAGE_COMPONENTS[pageName];
    return (
        <Component setPageName={setPageName} />
    )
}

export default function PageRouter({pageName, setPageName, evidanceBoardOpen}){

    return(
    <> 
        {evidanceBoardOpen?<> <Page pageName={pageName} setPageName={setPageName}/> . </>:<Page pageName={pageName} setPageName={setPageName}/>}
    </>
    )
}