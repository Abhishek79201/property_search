/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { debounce } from 'lodash'

const Pagination = ({
  totalPages,
  currentPage
}: {
  totalPages: number
  currentPage: number
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [page, setPage] = useState(currentPage)

  useEffect(() => {
    if (currentPage < 1 || !totalPages) {
      setPage(1)
      updatePageQueryParams(1)
    } else if (currentPage > totalPages) {
      setPage(totalPages)
      updatePageQueryParams(totalPages)
    } else if (page !== currentPage) {
      setPage(currentPage)
    }
  }, [currentPage, page, totalPages])

  const updatePageQueryParams = useCallback(
    debounce((newPage: number) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', newPage.toString())
      router.push(`${pathname}?${params.toString()}`)
    }, 300),
    [router, pathname, searchParams]
  )

  const handlePageChange = (newPage: number) => {
    // Prevent setting the page to 0 or less
    if (newPage < 1) {
      setPage(1)
      updatePageQueryParams(1)
      return
    }
    // Prevent setting the page to a number greater than total pages
    if (newPage > totalPages) return
    setPage(newPage)
    updatePageQueryParams(newPage)
  }

  return (
    <div className='flex justify-center items-center space-x-2 my-20'>
      <button
        className={`px-3 py-1 rounded-md border flex items-center ${
          page === 1
            ? 'text-gray-500 cursor-not-allowed'
            : 'border-primary font-medium hover:border-secondary text-primary hover:text-secondary'
        }`}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        <span className='text-[24px]'>
          <MdNavigateBefore />
        </span>
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNum = index + 1
        return (
          <button
            key={pageNum}
            className={`px-3 py-1 rounded-md border ${
              page === pageNum
                ? 'bg-dark text-white  hover:bg-secondary'
                : 'border-primary font-medium hover:border-secondary text-primary hover:text-secondary'
            }`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        )
      })}
      <button
        className={`px-3 py-1 rounded-md border flex items-center ${
          page === totalPages
            ? 'text-secondary cursor-not-allowed'
            : 'border-primary font-medium hover:border-secondary text-primary hover:text-secondary'
        }`}
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next{' '}
        <span className='text-[24px]'>
          <MdNavigateNext />
        </span>
      </button>
    </div>
  )
}

export default Pagination
