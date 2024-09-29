'use client'
import React, { useEffect, useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { IEstate } from './PropertyList'
import Image from 'next/image'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
const RandomViews: React.FC = () => {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const randomViews = Math.floor(Math.random() * 200) + 1
    setViews(randomViews)
  }, [])

  return (
    <span className='text-md text-[#748790] flex items-center gap-2'>
      {views}
      <span className='text-xl'>
        <IoEyeOutline />
      </span>
    </span>
  )
}

interface PropertyListProps {
  data: IEstate
}

const PropertyCard: React.FC<PropertyListProps> = ({ data }) => {
  const [isFavorited, setIsFavorited] = useState(false)

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  return (
    <div
      tabIndex={0}
      className='relative max-w-[380px] max-h-[428px] rounded overflow-hidden  bg-[#f0f2f3] hover:bg-muted focus:outline-2 focus:outline-offset-0 focus:outline-primary outline-none'
    >
      <div
        onClick={toggleFavorite}
        className='absolute top-6 right-6 cursor-pointer'
      >
        {isFavorited ? (
          <AiFillHeart className='text-accent text-2xl' />
        ) : (
          <AiOutlineHeart className='text-white text-2xl' />
        )}
      </div>

      <Image
        width={300}
        height={300}
        className='w-full h-48 object-cover'
        src={data.image_url}
        alt={data.title}
        priority
      />
      <div className='p-5 flex flex-col gap-3'>
        <h2 className='font-bold text-xl '>{data.title}</h2>
        <h3 className='body_normal'>{data.description}</h3>
        <p>
          <span className='body_small block'>
            ID: {data.id} | {data.city} | {data.country}
          </span>
          <span className='body_small'>
            {data.rooms} Bad | {data.area} m² | {data.purpose}
          </span>
        </p>
        <div className='flex items-center justify-between my-2'>
          <h4 className='text-dark text-xl font-medium '>
            {data?.price?.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR'
            })}
          </h4>
          <RandomViews />
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
