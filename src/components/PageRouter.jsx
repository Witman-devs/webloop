import {PAGE_COMPONENTS} from '../consts';

function Page({pageName, setPageName}){
    let Component = PAGE_COMPONENTS["notfound"] 
    if(PAGE_COMPONENTS[pageName])
        Component = PAGE_COMPONENTS[pageName];
    return (
        <Component setPageName={setPageName} />
    )
}

export default function PageRouter({pageName, setPageName}){

    return(
    <div style={{minHeight:"80vh", minWidth:"90vw"}}>
        <Page pageName={pageName} setPageName={setPageName} />
    </div>
    )
}