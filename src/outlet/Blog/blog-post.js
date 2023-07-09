// Asset
import data from '../../asset/data/blog-post.js';
import placeholderImg from '../../asset/images/placeholder-image.webp';

// Library
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
        <>
            <h3>{title}</h3>
            <small>{timestamp}</small>
            <LazyLoadImage height={480} width={720}
                src={img}
                alt="photo"
                placeholderSrc={placeholderImg}
            />
            <p>{content}</p>
        </>
    )
}

export default BlogPostFeed;