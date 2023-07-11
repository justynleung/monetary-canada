// React
import { useEffect } from 'react';

// Components
import BlogPost from './blogPost'
import BlogNav from './blogNav'
import LoadingPage from '../../root-layout/LoadingPage';

// Custom Hook
import { DelayedMountUnmount } from '../../hook/DelayedMountUnmount';

// Style
import '../../css/blog.css';


export default function App() {
    const delayTime = 1500; // 1500ms
    const [state, setState] = DelayedMountUnmount(delayTime);
    useEffect(() => {
        if (state === "unmounted") {
            setState("mounting")
            setTimeout(() => {
                setState("mounted")
            }, delayTime);
        }
    })
    return (
        <>
            <LoadingPage className={state === "unmounted" ? "" : state === "mounting" ? "hiding" : "hide"} />
            <div className="blog-wrapper">
                <div className='banner'><h2>Blog</h2></div>
                <div className='wrapper-width-60 flex_row'>
                    <div className='flex_col'>
                        <BlogPost />
                    </div>
                    {/* <div className='flex_col'>
                    <BlogNav />
                </div> */}
                </div>
            </div>
        </>
    )
}