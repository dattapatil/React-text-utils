import React from 'react'

export default function Alert(props) {

  const CapitalizeFirst = (wordn)=>{
        const capsText = wordn.toLowerCase();
        return capsText.charAt(0).toUpperCase() + capsText.slice(1);
  }
  return (
      <div style={{height:"60px", paddingTop:"5px"}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{CapitalizeFirst(props.alert.type)} : </strong>{CapitalizeFirst(props.alert.message)}        
      </div>}
        </div>
  )
}
