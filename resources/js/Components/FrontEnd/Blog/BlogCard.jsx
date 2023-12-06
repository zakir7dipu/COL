import React from 'react';
import {Link} from "@inertiajs/react";

function BlogCard({link, image, data, author, category, title, brief}) {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="single-blog-02">
                <div className="blog-img">
                    <Link href={link}><img src={image} alt=""/></Link>
                </div>
                <div className="blog-content">
                    <div className="meta">
                        <p className="date">{data}</p>
                        <span className="blog-meta blog-meta-1"> {author} </span>
                        <span className="blog-meta">{category}</span>
                    </div>
                    <h3 className="title"><Link href={link}>{title}</Link></h3>
                    <p className="text">{brief}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
