import Pagination from '../Pagination/Pagination'
import PropertyCard from './PropertyCard'
export interface IEstate {
  title: string
  price: number
  id: number
  image_url: string
  purpose: string
  type: string
  area: number
  rooms: number
  description: string
}

interface PropertyListProps {
  data: {
    estates: IEstate[]
    pagination: {
      totalPages: number
      page: number
      total: number
    }
  }
}

const PropertyList: React.FC<PropertyListProps> = ({ data }) => {
  return (
    <div className='mt-6 min-h-screen'>
      {data.estates.length > 0 ? (
        <ul className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {data.estates.map(property => (
            <>
              {property.id ? (
                <li
                  key={property.id}
                  className='flex items-center justify-center'
                >
                  <PropertyCard data={property} />
                </li>
              ) : (
                <></>
              )}
            </>
          ))}
        </ul>
      ) : (
        <div className='flex items-center justify-center w-full'>
          <span>No properties found</span>
        </div>
      )}
      <Pagination
        totalPages={data.pagination.totalPages}
        currentPage={data.pagination.page}
      />
    </div>
  )
}

export default PropertyList
