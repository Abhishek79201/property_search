import PropertyList from '@/app/components/PropertyList/PropertyList'
import FilterBar from '@/app/components/Filters/Filter'
import { EstateFilters } from './lib/definations'

type HomeProps = {
  searchParams: EstateFilters
}

export default async function Home ({ searchParams }: HomeProps) {
  const page = searchParams?.page || '1'
  const limit = searchParams?.limit || '9'
  const queryParams = new URLSearchParams({
    page,
    limit,
    ...Object.fromEntries(
      Object.entries(searchParams).filter(
        ([, value]) => value !== undefined && value !== null
      )
    )
  }).toString()
  const res = await fetch(
    `${process.env.NEXT_BACKEND_URL!}/estates?${queryParams}`,
    {
      next: { revalidate: 3600 }
    }
  )

  const data = await res.json()
  return (
    <section className='container'>
      <FilterBar />
      <PropertyList data={data} />
    </section>
  )
}
