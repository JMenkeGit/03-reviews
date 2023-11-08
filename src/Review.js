import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    } else if (number < 0) {
      return people.length - 1
    } else {
      return number
    }
  }
  const prevReview = () => {
    // functional approach with prev state
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const randomReview = () => {
    let value
    do {
      value = Math.floor(Math.random() * people.length)
    } while (value === index)
    setIndex((index) => {
      return value
    })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
        suprise me
      </button>
    </article>
  )
}

export default Review
