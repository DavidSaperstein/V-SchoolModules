import React from "react"

export default function BlogPost(props) {
    const {title, subTitle, author, date} = props

    return (
        <li>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>Posted by {author} on {date}</p>
        </li>
    )
}