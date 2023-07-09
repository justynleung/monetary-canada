import data from '../../asset/data/blog-post'

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
            <img src={img} alt="photo" />
            <p>{content}</p>
        </>
    )
}
export default BlogPostFeed;