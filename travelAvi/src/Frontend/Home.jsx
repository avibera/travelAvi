import React from 'react'
import { SwipeSlider } from '../Components/SwipeSlider'
import { SliderShape } from '../Components/SliderShape'
import { BookingForm } from './BookingForm'

export default function Home() {
  return (
    <>
      <SwipeSlider />
      <SliderShape children={<BookingForm />} />
      <div className='h-[200px] w-full ' ></div>
    </>
  )
}
