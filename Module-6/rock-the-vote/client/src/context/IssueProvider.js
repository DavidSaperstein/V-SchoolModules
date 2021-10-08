import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const IssueContext = React.createContext()

export default function IssueProvider(props){

  const initState = {
    issues: []
  }

  const [issueState, setIssueState] = useState(initState)

  function getIssues(){
    axios.get("/api/")
      .then(res => {
        setIssueState(res.data)
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <IssueContext.Provider 
      value={{
        ...issueState,
        getIssues,
      }}>
      {props.children}
    </IssueContext.Provider>
  )
}