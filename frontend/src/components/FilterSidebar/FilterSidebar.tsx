import React from 'react';
import { X, Star } from 'lucide-react';
import { categories, brands } from '../../data/products';
import { FilterState } from '../ProductGrid/ProductGrid';
import styles from './FilterSidebar.module.css';

interface FilterSidebarProps {
  isOpen: boolean;
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  filters,
  onFilterChange,
  onClose
}) => {
  const handlePriceChange = (value: string, index: number) => {
    const newRange = [...filters.priceRange] as [number, number];
    newRange[index] = parseInt(value) || 0;
    onFilterChange({ priceRange: newRange });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? styles.starFilled : styles.starEmpty}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>Filters</h3>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.content}>
          {/* Category Filter */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Category</h4>
            <div className={styles.filterOptions}>
              {categories.map((category) => (
                <label key={category} className={styles.radioOption}>
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) => onFilterChange({ category: e.target.value })}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Brand</h4>
            <div className={styles.filterOptions}>
              {brands.map((brand) => (
                <label key={brand} className={styles.radioOption}>
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={filters.brand === brand}
                    onChange={(e) => onFilterChange({ brand: e.target.value })}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Price Range</h4>
            <div className={styles.priceInputs}>
              <div className={styles.priceInput}>
                <label>Min</label>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(e.target.value, 0)}
                  min="0"
                  max="2000"
                  className={styles.numberInput}
                />
              </div>
              <div className={styles.priceInput}>
                <label>Max</label>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(e.target.value, 1)}
                  min="0"
                  max="2000"
                  className={styles.numberInput}
                />
              </div>
            </div>
            <div className={styles.priceRange}>
              <input
                type="range"
                min="0"
                max="2000"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e.target.value, 0)}
                className={styles.rangeInput}
              />
              <input
                type="range"
                min="0"
                max="2000"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(e.target.value, 1)}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.priceLabels}>
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Minimum Rating</h4>
            <div className={styles.ratingOptions}>
              {[0, 1, 2, 3, 4].map((rating) => (
                <label key={rating} className={styles.ratingOption}>
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={filters.rating === rating}
                    onChange={(e) => onFilterChange({ rating: parseInt(e.target.value) })}
                    className={styles.radioInput}
                  />
                  <div className={styles.ratingDisplay}>
                    {rating === 0 ? (
                      <span>All Ratings</span>
                    ) : (
                      <>
                        <div className={styles.stars}>
                          {renderStars(rating)}
                        </div>
                        <span>& up</span>
                      </>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Stock Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.checkboxOption}>
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => onFilterChange({ inStock: e.target.checked })}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxLabel}>In Stock Only</span>
            </label>
          </div>

          {/* Clear Filters */}
          <button
            className={styles.clearButton}
            onClick={() => onFilterChange({
              category: 'All',
              brand: 'All',
              priceRange: [0, 2000],
              rating: 0,
              inStock: false
            })}
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;