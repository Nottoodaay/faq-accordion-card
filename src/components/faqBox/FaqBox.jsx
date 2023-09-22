import React from 'react'

import './faqBox.styles.css'

import { questions } from '../../FaqList/faq'
import { FaqQuestions } from '../faqQuestions/FaqQuestions'

export const FaqBox = () => {
  return (  
    <div className='faqBox'>
      {questions.map((question)=> <FaqQuestions key={question.id} FaqQuestions={question}/>)}
    </div>
  )
}
