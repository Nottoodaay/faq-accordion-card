import React, { useState } from 'react'

export const FaqQuestions = ({FaqQuestions}) => {
  const [active, setActive] = useState(null)
  const { id,question, answer} = FaqQuestions

  return (
    <div onClick={()=>{
      if(active === id){
        setActive(null)
      }else{
        setActive(id)
      }
    }}>
      <h3>{question}</h3>
      {active === id ? <p>{answer}</p> : null }
    </div>
  )
}
