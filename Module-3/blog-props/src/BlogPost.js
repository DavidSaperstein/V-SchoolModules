import React from "react"

export default function BlogPost(props) {
    const {title, subTitle, author, date} = props

    return (
        <li className="blog-card">
            <h1 className="blog-titles blog-hover">{title}</h1>
            <h2 className="blog-subtitles blog-hover">{subTitle}</h2>
            <p className="posted">Posted by <a className="author">{author}</a> on {date}</p>
            <hr></hr>
        </li>
    )
}