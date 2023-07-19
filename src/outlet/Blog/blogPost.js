// Asset
import data from '../../asset/data/blog-post.js';
import placeholderImg from '../../asset/images/placeholder-image.webp';


function BlogPostFeed() {
    const post = data.map(item => {
        return <BlogPost
            key={item.id}
            title={item.title}
            img={item.img}
            content={item.content}
            timestamp={item.timestamp}
        />
    })
    return (
        <>
            {post}
        </>
    )
}

function BlogPost(props) {
    const { title, img, content, timestamp } = props;
    return (
        <div className="blog-post flex_col">
            <img
                src={img}
                alt="photo"
                placeholderSrc={placeholderImg}
            />
            <div className='text-wrapper'>
                <h3>{title}</h3>
                <small>{timestamp}</small>
                <p className="expandable">{content}</p>
            </div>
        </div>
    )
}

export default BlogPostFeed;