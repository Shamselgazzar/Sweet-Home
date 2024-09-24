'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { SearchBar } from '../components/SearchBar'
import { ApartmentList } from '../components/ApartmentList'
import { Pagination } from '../components/Pagination'
import { fetchApartments } from '../lib/api'
import { ApartmentsResponse } from '../types/ApartmentsResponse'
import { Apartment } from '../types/Apartment'
import { AddApartmentForm } from '../components/AddApartmentForm'
import { FilterSheet } from '../components/FilterSheet'

export default function Home() {
  const [apartments, setApartments] = useState<Apartment[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)
  const [totalPages, setTotalPages] = useState(0)
  const [totalApartments, setTotalApartments] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('name')

  
  const loadApartments = useCallback(async () => {
    setIsLoading(true)
    try {
      const response: ApartmentsResponse = await fetchApartments(currentPage, itemsPerPage, searchQuery, searchType)
      setApartments(response.apartments)
      setTotalPages(response.totalPages)
      setCurrentPage(response.currentPage)
      setTotalApartments(response.totalApartments)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, itemsPerPage, searchQuery, searchType])

  useEffect(() => {
    loadApartments()
  }, [loadApartments, currentPage, itemsPerPage, searchQuery, searchType])

  const handleSearch = (query: string, type: string) => {
    setSearchQuery(query)
    setSearchType(type)
    setCurrentPage(1) // Reset to first page when searching
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto py-6">
        <div className="flex items-center justify-between mb-4 px-4 sm:px-6 md:px-8 pt-2">
          <SearchBar onSearch={handleSearch} />
        </div>

        <hr className="block sm:hidden border-t border-muted-foreground my-4" />

        <div className="flex items-center justify-between mb-4 px-4 sm:px-6 md:px-8 pt-2 ">
          <p><b>Apartments: </b> {isLoading ? '...' : `${totalApartments? totalApartments : 0} results`}</p>

          <div className="flex items-center justify-end mb-4 px-4 sm:px-6 md:px-8">
            <div className="mx-2">
              <AddApartmentForm />
            </div>
            <div className="mx-2">
              <FilterSheet />
            </div>
          </div>
        </div>

        <ApartmentList
          apartments={apartments}
          isLoading={isLoading}
          itemsPerPage={itemsPerPage}
        />

        {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>
    </div>
  )
}