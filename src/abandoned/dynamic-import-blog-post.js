
// import React, { useState, useEffect } from 'react';


// import dataDynamicImport from '../asset/data/blog-post-dynamic-import.json';
// import data from '../asset/data/blog-post.js';

// function BlogPostFeed() {
//     const post = data.map(item => {
//         return <BlogPost
//             key={item.id}
//             title={item.title}
//             img={item.img}
//             content={item.content}
//             timestamp={item.timestamp}
//         />
//     })
//     return (
//         <>
//             {post}
//         </>
//     )
// }

// function BlogPost(props) {
//     const { title, img, content, timestamp } = props;
//     return (
//         <>
//             <h3>{title}</h3>
//             <small>{timestamp}</small>
//             <img src={img} alt="photo" />
//             <p>{content}</p>
//         </>
//     )
// }


// function BlogPostDynamicImport(props) {
//     const { title, img, content, timestamp } = props;
//     const [imgSrc, setImgSrc] = useState();

//     useEffect(() => {
//         import(`../../asset/images/Blog-post/${img}`)
//             .then((image) => setImgSrc(image.default))
//             .catch((err) => console.error(err));
//     }, [img]);

//     return (
//         <>
//             <h3>{title}</h3>
//             <small>{timestamp}</small>
//             {imgSrc && <img src={imgSrc} alt="photo" />}
//             <p>{content}</p>
//         </>
//     );
// }


// export default BlogPostFeed;