import React, { Fragment ,lazy,Suspense} from 'react';
const  CPageOne = lazy(()=>import('../components/CPageOne.jsx'));
import LazyLoader from "../../helper/LazyLoader";

const PageOne = () => {
    return (
    <Fragment>
        <Suspense fallback={<LazyLoader/>}>
            <CPageOne/>
        </Suspense>
    </Fragment>
    );
};

export default PageOne;