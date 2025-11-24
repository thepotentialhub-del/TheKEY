import { useState, useMemo } from 'react';
import { properties, Property } from '../data/properties';

interface FilterState {
  operation: string;
  type: string;
  city: string;
  priceRange: [number, number];
}

export function useFilteredProperties() {
  const [filters, setFilters] = useState<FilterState>({
    operation: 'Todos',
    type: 'Todos',
    city: 'Todos',
    priceRange: [0, 5000000000]
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Filter by Operation
      if (filters.operation !== 'Todos' && property.operation !== filters.operation) {
        return false;
      }

      // Filter by Type
      if (filters.type !== 'Todos' && property.type !== filters.type) {
        return false;
      }

      // Filter by City
      if (filters.city !== 'Todos' && property.city !== filters.city) {
        return false;
      }

      // Filter by Price
      if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const setFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return {
    properties: filteredProperties,
    filters,
    setFilter,
    totalProperties: filteredProperties.length
  };
}
