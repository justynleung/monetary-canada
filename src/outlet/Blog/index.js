// Style
import '../../css/blog.css';

// Components
import BlogPost from './blog-post'

export default function App() {

    return (
        <>
            <div className='banner'></div>
            <div className='wrapper-width-60'>
                <div className='flex_col'>
                    <BlogPost />
                </div>

            </div>
        </>

    )
}