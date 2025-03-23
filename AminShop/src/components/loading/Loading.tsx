import React from 'react'
import styled from './loading.module.css'

function Loading() {
  return (
    <div className='flex items-center justify-center bg-neutral-600 opacity-80 w-full h-80'>
      <span className={`${styled.loader}`}></span>
    </div>
  )
}

export default Loading
