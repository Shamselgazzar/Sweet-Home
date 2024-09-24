import { Apartment } from '../types/Apartment'
import { ApartmentCard } from './ApartmentCard'
import { Skeleton } from '@/components/ui/skeleton'

interface ApartmentListProps {
  apartments: Apartment[]
  isLoading: boolean
  itemsPerPage: number
}

export function ApartmentList({ apartments, isLoading, itemsPerPage }: ApartmentListProps) {
  const ApartmentSkeleton = () => (
    <div className="space-y-4">
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  )

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array(itemsPerPage).fill(0).map((_, index) => (
            <ApartmentSkeleton key={index} />
          ))
        ) : !apartments || apartments?.length === 0 ? (
          <div className="col-span-full flex items-center justify-center">
            <p className="text-muted-foreground font-semibold uppercase tracking-wide">No Results Found</p>
          </div>
        ) : (
          apartments?.map((apartment) => (
            <ApartmentCard
              key={apartment._id}
              apartment={apartment}
            />
          ))
        )}
      </div>
    </main>
  )
}