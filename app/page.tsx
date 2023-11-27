import React from 'react'
import Header from './components/Header'
import { getCurrentUser } from './lib/session'

type Props = {}

const Home = async (props: Props) => {
  const user = await getCurrentUser()
  return (
    <div className='px-5 max-w-[600px] mx-auto'>
      <Header/>
    </div>
  )
}

export default Home