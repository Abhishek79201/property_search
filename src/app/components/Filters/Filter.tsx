/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import location from '@/app/assets/location.svg'
import map from '@/app/assets/map.svg'
import crossIcon from '@/app/assets/close.svg'
import Image from 'next/image'
import { debounce } from 'lodash'
import { EstateFilters } from '@/app/lib/definations'

const FilterSelect = ({
  name,
  value,
  options,
  onChange,
  placeholder
}: {
  name: string
  value: string
  options: { label: string; value: string }[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder: string
}) => (
  <>
    <label htmlFor={name} className='sr-only'>
      {name}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className='px-3 py-2 rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-[132px]'
    >
      <option value='' disabled hidden>
        {placeholder}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </>
)

const AppliedFilterTag = ({
  label,
  value,
  onRemove
}: {
  label: string
  value: string
  onRemove: () => void
}) => (
  <div className='flex items-center border-secondary border-2 text-secondary rounded-[4px] px-2 py-1'>
    {label} {value}
    <Image
      width={24}
      height={24}
      src={crossIcon.src}
      alt='Remove'
      className='ml-1 cursor-pointer'
      onClick={onRemove}
    />
  </div>
)

const FilterBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState<EstateFilters>({
    location: '',
    purpose: '',
    type: '',
    price: '',
    area: '',
    rooms: ''
  })

  const updateQueryParams = useCallback(
    debounce((updatedFilters: EstateFilters) => {
      const params = new URLSearchParams(window.location.search)

      Object.keys(updatedFilters).forEach(key => {
        if (updatedFilters[key]) {
          params.set(key, updatedFilters[key]!)
        } else {
          params.delete(key)
        }
      })
      router.push(`${pathname}?${params.toString()}`)
    }, 300),
    [router, pathname]
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)
    updateQueryParams(newFilters)
  }

  const removeFilter = (name: string) => {
    const newFilters = { ...filters, [name]: '' }
    setFilters(newFilters)
    updateQueryParams(newFilters)
  }

  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams.entries())
    setFilters({
      location: currentParams.location || '',
      purpose: currentParams.purpose || '',
      type: currentParams.type || '',
      price: currentParams.price || '',
      area: currentParams.area || '',
      rooms: currentParams.rooms || ''
    })
  }, [searchParams])

  const purposeOptions = [
    { label: 'Buy', value: 'buy' },
    { label: 'Rent', value: 'rent' }
  ]
  const typeOptions = [
    { label: 'House', value: 'house' },
    { label: 'Apartment', value: 'apartment' },
    { label: 'Land', value: 'land' }
  ]
  const priceOptions = [
    { label: '$0 - $500,000', value: '0-500000' },
    { label: '$500,001 - $1,000,000', value: '500001-1000000' },
    { label: '$1,000,001 - $1,500,000', value: '1000001-1500000' },
    { label: '$1,500,001 - $2,000,000', value: '1500001-2000000' },
    { label: '$2,000,001 - $2,500,000', value: '2000001-2500000' },
    { label: '$2,500,001 - $3,000,000', value: '2500001-3000000' },
    { label: '$3,000,000+', value: '3000001+' }
  ]
  const areaOptions = [
    { label: '0 - 50 sqm.', value: '0-50' },
    { label: '51 - 100 sqm.', value: '51-100' },
    { label: '101 - 150 sqm.', value: '101-150' },
    { label: '151 - 200 sqm.', value: '151-200' },
    { label: '201 - 250 sqm.', value: '201-250' },
    { label: '251 - 300 sqm.', value: '251-300' },
    { label: '300+ sqm.', value: '300+' }
  ]
  const roomsOptions = [
    { label: '1 Room', value: '1' },
    { label: '2 Rooms', value: '2' },
    { label: '3 Rooms', value: '3' },
    { label: '4+ Rooms', value: '4+' }
  ]

  return (
    <section className='flex flex-col gap-2 z-0 '>
      <section className='mt-12 md:mt-14 xl:mt-16 flex flex-col lg:flex-row gap-2 items-start justify-between'>
        <div className='relative flex items-center w-full lg:max-w-sm'>
          <span className='absolute left-3 text-muted'>
            <Image src={location.src} alt='Location' width={20} height={20} />
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
          <FilterSelect
            name='purpose'
            value={filters.purpose || ''}
            options={purposeOptions}
            onChange={handleInputChange}
            placeholder='Purpose'
          />
          <FilterSelect
            name='type'
            value={filters.type || ''}
            options={typeOptions}
            onChange={handleInputChange}
            placeholder='Type'
          />
          <FilterSelect
            name='price'
            value={filters.price || ''}
            options={priceOptions}
            onChange={handleInputChange}
            placeholder='Price'
          />
          <FilterSelect
            name='area'
            value={filters.area || ''}
            options={areaOptions}
            onChange={handleInputChange}
            placeholder='Area'
          />
          <FilterSelect
            name='rooms'
            value={filters.rooms || ''}
            options={roomsOptions}
            onChange={handleInputChange}
            placeholder='Rooms'
          />
          <Image
            width={48}
            height={48}
            src={map.src}
            className='p-[7px] rounded-[4px] border border-muted text-base text-text focus:outline-none focus:ring-2 focus:ring-primary'
            alt='Map'
          />
        </div>
      </section>

      <div className='flex flex-wrap gap-2 mt-2 lg:mt-0'>
        {filters.location && (
          <AppliedFilterTag
            label='Location:'
            value={filters.location}
            onRemove={() => removeFilter('location')}
          />
        )}
        {filters.purpose && (
          <AppliedFilterTag
            label='Purpose:'
            value={filters.purpose}
            onRemove={() => removeFilter('purpose')}
          />
        )}
        {filters.type && (
          <AppliedFilterTag
            label='Type:'
            value={filters.type}
            onRemove={() => removeFilter('type')}
          />
        )}
        {filters.price && (
          <AppliedFilterTag
            label='Price:'
            value={filters.price}
            onRemove={() => removeFilter('price')}
          />
        )}
        {filters.area && (
          <AppliedFilterTag
            label='Area:'
            value={filters.area}
            onRemove={() => removeFilter('area')}
          />
        )}
        {filters.rooms && (
          <AppliedFilterTag
            label='Rooms:'
            value={filters.rooms}
            onRemove={() => removeFilter('rooms')}
          />
        )}
      </div>
    </section>
  )
}

export default FilterBar
