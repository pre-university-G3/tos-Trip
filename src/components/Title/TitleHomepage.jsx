import React from 'react'

const TitleHomepage = (title) => {
  return (
  <div className='text-center py-3 md:py-10'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <h2 className='text-xl sm:text-2xl md:text-3xl text-heade font-semibold'>
          {title.title}
        </h2>
        <button className='bg-Primary hover:bg-Primary-dark text-white
        text-base md:text-lg px-6 md:px-10 py-2 
        rounded-sm transition-colors duration-300
        shadow-md hover:shadow-lg'>
          រុករក
        </button>
      </div>
    </div>
    
  )
}

export default TitleHomepage
