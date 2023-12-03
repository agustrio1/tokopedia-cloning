import React from 'react'
import AllCategory from './AllCategory'

type Props = {}

const CategoryMenu = (props: Props) => {
  return (
    <div className='flex flex-row items-center max-w-sm md:max-w-[400px]'>
        <AllCategory/>
    </div>
  )
}

export default CategoryMenu