import Image from 'next/image'


import { Hero,SearchBar,CustomFilter} from '@/components'
import { fetchCars } from '@/utilis'


export default async function Home() {

  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  
  
  return (
    <main className="overflow-hidden">
      <Hero /> 
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>

        <div className="">
         {
         !isDataEmpty  ? (
          <section>WE HAVE CARS</section>
         ) :(
            <div className="">
              <h2>Opps , No results</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        
         }
        </div>
      </div>

    </main>
  )
}
