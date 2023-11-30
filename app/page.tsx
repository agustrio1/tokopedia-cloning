import React from 'react'
import Header from './components/Header'

type Props = {}

const Home = async (props: Props) => {
  return (
    <div className='px-5 max-w-[600px] mx-auto'>
      <Header/>
    </div>
  )
}

export default Home