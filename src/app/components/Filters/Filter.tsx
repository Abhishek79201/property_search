// 'use client'
// import React from 'react'
// import location from '@/app/assets/location.svg'
// import map from '@/app/assets/map.svg'
// const FilterBar = () => {
//   return (
//     <section className='mt-10 md:mt-12 xl:mt-16 flex gap-2 items-center justify-between '>
//       <div className='relative flex items-center '>
//         <span className='absolute left-3 text-muted'>
//           <img src={location.src} />
//         </span>
//         <input
//           type='text'
//           placeholder='State, City or Postal Code'
//           className='pl-10 pr-4 py-2  w-[380px] rounded-[4px] border border-muted focus:border-primary focus:ring-primary focus:ring-1 text-base text-text'
//         />
//       </div>

//       <select
//         defaultValue='buy'
//         className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full'
//       >
//         <option value='buy'>Buy</option>
//         <option value='rent'>Rent</option>
//       </select>

//       <select
//         defaultValue='type'
//         className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full'
//       >
//         <option value='house'>House</option>
//         <option value='apartment'>Apartment</option>
//         <option value='land'>Land</option>
//       </select>

//       <select
//         defaultValue='price'
//         className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full'
//       >
//         <option value='low'>Low to High</option>
//         <option value='high'>High to Low</option>
//       </select>

//       <select
//         defaultValue='area'
//         className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full'
//       >
//         <option value='small'>Small to Large</option>
//         <option value='large'>Large to Small</option>
//       </select>

//       <select
//         defaultValue='rooms'
//         className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full'
//       >
//         <option value='1'>1 Room</option>
//         <option value='2'>2 Rooms</option>
//         <option value='3'>3 Rooms</option>
//         <option value='4+'>4+ Rooms</option>
//       </select>

//       <button className='px-3 py-2 rounded-[4px] border  border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary'>
//         <img src={map.src} className=' w-[130px]' />
//       </button>
//     </section>
//   )
// }

// export default FilterBar
// 'use client'
// import React, { useState } from 'react'
// import location from '@/app/assets/location.svg'
// import map from '@/app/assets/map.svg'

// const FilterBar = () => {
//   const [filters, setFilters] = useState({
//     location: '',
//     purpose: 'buy',
//     type: 'type',
//     price: 'low',
//     area: 'small',
//     rooms: '1'
//   })

//   const handleInputChange = e => {
//     const { name, value } = e.target
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [name]: value
//     }))
//     console.log(filters)
//   }

//   return (
//     <section className='mt-10 md:mt-14 xl:mt-16 flex flex-col lg:flex-row gap-2 items-center justify-between'>
//       <div className='relative flex items-center w-full '>
//         <span className='absolute left-3 text-muted'>
//           <img src={location.src} alt='Location' />
//         </span>
//         <input
//           type='text'
//           name='location'
//           placeholder='State, City or Postal Code'
//           value={filters.location}
//           onChange={handleInputChange}
//           className='pl-10 pr-4 py-2 w-full rounded-[4px] border border-muted focus:border-primary focus:ring-primary focus:ring-1 text-base placeholder-secondary'
//         />
//       </div>
//       <div className='flex w-full gap-2 flex-col sm:flex-row'>
//         <div className='flex w-full gap-2'>
//           <select
//             name='purpose'
//             value={filters.purpose}
//             onChange={handleInputChange}
//             className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px] '
//           >
//             <option value='buy'>Buy</option>
//             <option value='rent'>Rent</option>
//           </select>

//           <select
//             name='type'
//             value={filters.type}
//             onChange={handleInputChange}
//             className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//           >
//             <option value='house'>House</option>
//             <option value='apartment'>Apartment</option>
//             <option value='land'>Land</option>
//           </select>

//           <select
//             name='price'
//             value={filters.price}
//             onChange={handleInputChange}
//             className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//           >
//             <option value='low'>Low to High</option>
//             <option value='high'>High to Low</option>
//           </select>
//         </div>

//         <div className='flex w-full gap-2'>
//           <select
//             name='area'
//             value={filters.area}
//             onChange={handleInputChange}
//             className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//           >
//             <option value='small'>Small to Large</option>
//             <option value='large'>Large to Small</option>
//           </select>

//           <select
//             name='rooms'
//             value={filters.rooms}
//             onChange={handleInputChange}
//             className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//           >
//             <option value='1'>1 Room</option>
//             <option value='2'>2 Rooms</option>
//             <option value='3'>3 Rooms</option>
//             <option value='4+'>4+ Rooms</option>
//           </select>

//           <img
//             src={map.src}
//             className='p-[7px] rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary '
//             alt='Map'
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FilterBar

// 'use client'
// import React, { useState } from 'react'
// import location from '@/app/assets/location.svg'
// import map from '@/app/assets/map.svg'
// import crossIcon from '@/app/assets/close.svg' // Assume you have a cross icon asset

// const FilterBar = () => {
//   const [filters, setFilters] = useState({
//     location: '',
//     purpose: 'buy',
//     type: 'type',
//     price: 'low',
//     area: 'small',
//     rooms: '1'
//   })

//   const handleInputChange = e => {
//     const { name, value } = e.target
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [name]: value
//     }))
//   }

//   const removeFilter = name => {
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [name]: name === 'location' ? '' : name === 'purpose' ? 'buy' : 'type'
//     }))
//   }

//   return (
//     <>
//       <section className='mt-10 md:mt-14 xl:mt-16 flex flex-col lg:flex-row gap-2 items-center justify-between'>
//         <div className='relative flex items-center w-full '>
//           <span className='absolute left-3 text-muted'>
//             <img src={location.src} alt='Location' />
//           </span>
//           <input
//             type='text'
//             name='location'
//             placeholder='State, City or Postal Code'
//             value={filters.location}
//             onChange={handleInputChange}
//             className='pl-10 pr-4 py-2 w-full rounded-[4px] border border-muted focus:border-primary focus:ring-primary focus:ring-1 text-base placeholder-secondary'
//           />
//         </div>

//         <div className='flex w-full gap-2 flex-col sm:flex-row'>
//           <div className='flex w-full gap-2'>
//             <select
//               name='purpose'
//               value={filters.purpose}
//               onChange={handleInputChange}
//               className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//             >
//               <option value='buy'>Buy</option>
//               <option value='rent'>Rent</option>
//             </select>

//             <select
//               name='type'
//               value={filters.type}
//               onChange={handleInputChange}
//               className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//             >
//               <option value='house'>House</option>
//               <option value='apartment'>Apartment</option>
//               <option value='land'>Land</option>
//             </select>

//             <select
//               name='price'
//               value={filters.price}
//               onChange={handleInputChange}
//               className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//             >
//               <option value='low'>Low to High</option>
//               <option value='high'>High to Low</option>
//             </select>
//           </div>

//           <div className='flex w-full gap-2'>
//             <select
//               name='area'
//               value={filters.area}
//               onChange={handleInputChange}
//               className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//             >
//               <option value='small'>Small to Large</option>
//               <option value='large'>Large to Small</option>
//             </select>

//             <select
//               name='rooms'
//               value={filters.rooms}
//               onChange={handleInputChange}
//               className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
//             >
//               <option value='1'>1 Room</option>
//               <option value='2'>2 Rooms</option>
//               <option value='3'>3 Rooms</option>
//               <option value='4+'>4+ Rooms</option>
//             </select>

//             <img
//               src={map.src}
//               className='p-[7px] rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary '
//               alt='Map'
//             />
//           </div>
//         </div>
//       </section>
//       {/* Render selected filters as tags */}
//       <div className='flex flex-wrap gap-2 mt-2 lg:mt-0'>
//         {filters.location && (
//           <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
//             {filters.location}
//             <img
//               src={crossIcon.src}
//               alt='Remove'
//               className='ml-1 cursor-pointer'
//               onClick={() => removeFilter('location')}
//             />
//           </div>
//         )}
//         {filters.purpose && (
//           <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
//             {filters.purpose}
//             <img
//               src={crossIcon.src}
//               alt='Remove'
//               className='ml-1 cursor-pointer'
//               onClick={() => removeFilter('purpose')}
//             />
//           </div>
//         )}
//         {filters.type && (
//           <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
//             {filters.type}
//             <img
//               src={crossIcon.src}
//               alt='Remove'
//               className='ml-1 cursor-pointer'
//               onClick={() => removeFilter('type')}
//             />
//           </div>
//         )}
//         {filters.price && (
//           <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
//             {filters.price}
//             <img
//               src={crossIcon.src}
//               alt='Remove'
//               className='ml-1 cursor-pointer'
//               onClick={() => removeFilter('price')}
//             />
//           </div>
//         )}
//         {filters.area && (
//           <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
//             {filters.area}
//             <img
//               src={crossIcon.src}
//               alt='Remove'
//               className='ml-1 cursor-pointer'
//               onClick={() => removeFilter('area')}
//             />
//           </div>
//         )}
//         {filters.rooms && (
//           <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
//             {filters.rooms}
//             <img
//               src={crossIcon.src}
//               alt='Remove'
//               className='ml-1 cursor-pointer'
//               onClick={() => removeFilter('rooms')}
//             />
//           </div>
//         )}
//       </div>
//     </>
//   )
// }

// export default FilterBar

'use client'
import React, { useState } from 'react'
import location from '@/app/assets/location.svg'
import map from '@/app/assets/map.svg'
import crossIcon from '@/app/assets/close.svg' // Assume you have a cross icon asset

const FilterBar = () => {
  const [filters, setFilters] = useState({
    location: '',
    purpose: '', // Set to empty to allow selecting 'buy' or 'rent'
    type: '', // Set to empty to allow selecting a type
    price: '', // Set to empty to allow selecting a price
    area: '', // Set to empty to allow selecting an area
    rooms: '' // Set to empty to allow selecting rooms
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }))
  }

  const removeFilter = name => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: ''
    }))
  }

  return (
    <section className='flex flex-col gap-2'>
      <section className='mt-10 md:mt-14 xl:mt-16 flex flex-col lg:flex-row gap-2 items-center justify-between'>
        <div className='relative flex items-center w-full'>
          <span className='absolute left-3 text-muted'>
            <img src={location.src} alt='Location' />
          </span>
          <input
            type='text'
            name='location'
            placeholder='State, City or Postal Code'
            value={filters.location}
            onChange={handleInputChange}
            className='pl-10 pr-4 py-2 w-full rounded-[4px] border border-muted focus:border-primary focus:ring-primary focus:ring-1 text-base placeholder-secondary'
          />
        </div>

        <div className='flex w-full gap-2 flex-col sm:flex-row'>
          <div className='flex w-full gap-2'>
            <select
              name='purpose'
              value={filters.purpose}
              onChange={handleInputChange}
              className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
            >
              <option value='' disabled>
                Select Purpose
              </option>
              <option value='buy'>Buy</option>
              <option value='rent'>Rent</option>
            </select>

            <select
              name='type'
              value={filters.type}
              onChange={handleInputChange}
              className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
            >
              <option value='' disabled>
                Select Type
              </option>
              <option value='house'>House</option>
              <option value='apartment'>Apartment</option>
              <option value='land'>Land</option>
            </select>

            <select
              name='price'
              value={filters.price}
              onChange={handleInputChange}
              className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
            >
              <option value='' disabled>
                Select Price
              </option>
              <option value='low'>Low to High</option>
              <option value='high'>High to Low</option>
            </select>
          </div>

          <div className='flex w-full gap-2'>
            <select
              name='area'
              value={filters.area}
              onChange={handleInputChange}
              className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
            >
              <option value='' disabled>
                Select Area
              </option>
              <option value='small'>Small to Large</option>
              <option value='large'>Large to Small</option>
            </select>

            <select
              name='rooms'
              value={filters.rooms}
              onChange={handleInputChange}
              className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
            >
              <option value='' disabled>
                Select Rooms
              </option>
              <option value='1'>1 Room</option>
              <option value='2'>2 Rooms</option>
              <option value='3'>3 Rooms</option>
              <option value='4+'>4+ Rooms</option>
            </select>

            <img
              src={map.src}
              className='p-[7px] rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary'
              alt='Map'
            />
          </div>
        </div>
      </section>

      {/* Render selected filters as tags */}
      <div className='flex flex-wrap gap-2 mt-2 lg:mt-0'>
        {filters.location && (
          <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
            {filters.location}
            <img
              src={crossIcon.src}
              alt='Remove'
              className='ml-1 cursor-pointer'
              onClick={() => removeFilter('location')}
            />
          </div>
        )}
        {filters.purpose && (
          <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
            {filters.purpose}
            <img
              src={crossIcon.src}
              alt='Remove'
              className='ml-1 cursor-pointer'
              onClick={() => removeFilter('purpose')}
            />
          </div>
        )}
        {filters.type && (
          <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
            {filters.type}
            <img
              src={crossIcon.src}
              alt='Remove'
              className='ml-1 cursor-pointer'
              onClick={() => removeFilter('type')}
            />
          </div>
        )}
        {filters.price && (
          <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
            {filters.price}
            <img
              src={crossIcon.src}
              alt='Remove'
              className='ml-1 cursor-pointer'
              onClick={() => removeFilter('price')}
            />
          </div>
        )}
        {filters.area && (
          <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
            {filters.area}
            <img
              src={crossIcon.src}
              alt='Remove'
              className='ml-1 cursor-pointer'
              onClick={() => removeFilter('area')}
            />
          </div>
        )}
        {filters.rooms && (
          <div className='flex items-center border-secondary border-2 text-secondary  text-text rounded-[4px] px-2 py-1'>
            {filters.rooms}
            <img
              src={crossIcon.src}
              alt='Remove'
              className='ml-1 cursor-pointer'
              onClick={() => removeFilter('rooms')}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default FilterBar
