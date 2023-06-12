import React from 'react'

export default function Alert(props) {
  return (
    props.message && <div className="container alert alert-primary d-flex align-items-center" style={{marginBottom:".4rem"}} role="alert">
     <div>
        {props.message}
    </div>
    </div>
  )
}
