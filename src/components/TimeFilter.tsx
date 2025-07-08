
import React from 'react';

interface TimeFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({ selectedFilter, onFilterChange }) => {
  const filters = [
    { value: 'all', label: 'All Time' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' }
  ];

  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={
            selectedFilter === filter.value
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 px-2 py-1 rounded"
              : "border-purple-200 text-purple-600 hover:bg-purple-50 px-2 py-1 rounded bg-white"
          }
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TimeFilter;
