import React, {useState} from 'react'

import './faqBox.styles.css'

import { questions } from '../../FaqList/faq'
import { FaqQuestions } from '../faqQuestions/FaqQuestions'

export const FaqBox = () => {
  const [active, setActive] = useState(null)

  return (  
    <div className='faqBox'>
      {questions.map((question)=> <FaqQuestions key={question.id} FaqQuestions={question} active={active} setActive={setActive}/>)}
    </div>
  )
}
