import {PAGE_COMPONENTS} from '../consts';

export default function PageRouter({pageName}){

    return(
    <div style={{minHeight:"80vh"}}>
        {PAGE_COMPONENTS[pageName]}
    </div>
    )
}