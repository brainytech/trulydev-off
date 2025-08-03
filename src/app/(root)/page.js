import Header from '@/components/Layout/Header'
import About from '@/components/section/AboutUs'
import Hero from '@/components/section/Hero'
import Image from 'next/image'

export default function Home () {
  return (
    <div className='min-h-screen'>
      <div>
        <Header />
      </div>
      <main className='sm:mt-20 mt-[150px]'>
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
      </main>
    </div>
  )
}
