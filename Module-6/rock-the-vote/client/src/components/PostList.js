import React, { useContext } from 'react'
import { IssueContext } from './../context/IssueProvider.js'
import Post from './Post.js'

export default function PostList(props){

  const { issues } = useContext(IssueContext)
  return(
    <div className='issue-container'>
      {issues.map(issue => 
        <Post 
          title={issue.title} 
          description={issue.description}
        />
      )}
    </div>
  )
}