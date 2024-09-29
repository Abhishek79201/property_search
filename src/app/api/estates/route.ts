import dbConnect from '@/app/lib/dbConnect'
import { EstateFilters } from '@/app/lib/definations'
import { Estate } from '@/app/models/Estates'
import { NextResponse } from 'next/server'

export async function GET (req: Request) {
  await dbConnect()

  const { searchParams } = new URL(req.url)

  const filters: EstateFilters = {
    location: searchParams.get('location') || undefined,
    purpose:
      (searchParams
        .get('purpose')
        ?.toLowerCase() as EstateFilters['purpose']) || undefined,
    type:
      (searchParams.get('type')?.toLowerCase() as EstateFilters['type']) ||
      undefined,
    price: searchParams.get('price') || undefined,
    area: searchParams.get('area') || undefined,
    rooms: searchParams.get('rooms') || undefined
  }

  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = parseInt(searchParams.get('limit') || '10', 10)

  const queryFilters: Record<string, unknown> = {}

  // Location filter
  if (typeof filters.location === 'string') {
    queryFilters.$or = [
      { city: { $regex: filters.location, $options: 'i' } },
      { country: { $regex: filters.location, $options: 'i' } },
      { title: { $regex: filters.location, $options: 'i' } }
    ]
  }

  // Purpose filter
  if (filters.purpose) {
    queryFilters.purpose = { $regex: new RegExp(`^${filters.purpose}$`, 'i') }
  }

  // Type filter
  if (filters.type) {
    queryFilters.type = { $regex: new RegExp(`^${filters.type}$`, 'i') }
  }

  // Price filter (handle cases like '3000001+' or '200000-500000')
  if (typeof filters.price === 'string') {
    if (filters.price.includes('+')) {
      const minPrice = parseInt(filters.price.replace('+', ''), 10)
      queryFilters.price = { $gte: minPrice }
    } else {
      const [minPrice, maxPrice] = filters.price.split('-').map(Number)
      queryFilters.price = { $gte: minPrice, $lte: maxPrice }
    }
  }

  // Area filter (handle cases like '300+' or '200-500')
  if (typeof filters.area === 'string') {
    if (filters.area.includes('+')) {
      const minArea = parseInt(filters.area.replace('+', ''), 10)
      queryFilters.area = { $gte: minArea }
    } else {
      const [minArea, maxArea] = filters.area.split('-').map(Number)
      queryFilters.area = { $gte: minArea, $lte: maxArea }
    }
  }

  // Rooms filter (already handled)
  if (filters.rooms) {
    if (filters.rooms === '4+') {
      queryFilters.rooms = { $gte: 4 } // For "4+", filter for 4 or more rooms
    } else {
      const roomCount = parseInt(filters.rooms, 10)
      if (!isNaN(roomCount)) {
        queryFilters.rooms = roomCount // Convert string to number for filtering
      }
    }
  }

  const estates = await Estate.find(queryFilters)
    .skip((page - 1) * limit)
    .limit(limit)

  const totalEstates = await Estate.countDocuments(queryFilters)
  const totalPages = Math.ceil(totalEstates / limit)

  return NextResponse.json({
    estates,
    pagination: {
      total: totalEstates,
      page,
      totalPages
    }
  })
}
