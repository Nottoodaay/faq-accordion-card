import React from 'react'

import './faqQuestions.styles.scss'

export const FaqQuestions = ({FaqQuestions, active, setActive}) => {
  const { id,question, answer} = FaqQuestions

  return (
    <div className='faq-item' onClick={()=>{
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
