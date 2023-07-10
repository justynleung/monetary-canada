// Style
import '../../css/blog.css';

// Components
import BlogPost from './blogPost'
import BlogNav from './blogNav'
export default function App() {

    return (
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

    )
}