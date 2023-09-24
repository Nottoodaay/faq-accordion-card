import React, {useState} from 'react'

import './faqBox.styles.scss'

import { questions } from '../../FaqList/faq'
import { FaqQuestions } from '../faqQuestions/FaqQuestions'

export const FaqBox = () => {
  const [active, setActive] = useState(null)

  return (  
    <div className='faqBox'>
      <div className='img-container'>
        <div className='woman-illustration'></div>
        <div className='box'></div>
      </div>
      <div className='question-container'>
        <div>
          <h2>FAQ</h2>
          </div>
        {questions.map((question)=> <FaqQuestions key={question.id} FaqQuestions={question} active={active} setActive={setActive}/>)}
      </div>
    </div>
  )
}
