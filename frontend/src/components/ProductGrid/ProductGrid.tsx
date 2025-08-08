import React, { useState, useMemo } from "react";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
// import { products, categories, brands } from "../../data/products";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import styles from "./ProductGrid.module.css";

export interface FilterState {
  category: string;
  brand: string;
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
  sortBy: string;
}

const ProductGrid: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: "All",
    brand: "All",
    priceRange: [0, 2000],
    rating: 0,
    inStock: false,
    sortBy: "featured",
  });

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        filters.category === "All" || product.category === filters.category;
      const brandMatch =
        filters.brand === "All" || product.brand === filters.brand;
      const priceMatch =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      const ratingMatch = product.rating >= filters.rating;
      const stockMatch = !filters.inStock || product.inStock;

      return (
        categoryMatch && brandMatch && priceMatch && ratingMatch && stockMatch
      );
    });

    // Sort products
    switch (filters.sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured
        filtered.sort(
          (a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0)
        );
    }

    return filtered;
  }, [filters]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <section id="products" className={styles.productGrid}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h2 className={styles.title}>Our Products</h2>
            <p className={styles.subtitle}>
              Discover our curated collection of premium products
            </p>
          </div>

          <div className={styles.controls}>
            <div className={styles.viewControls}>
              <button
                className={`${styles.viewButton} ${
                  viewMode === "grid" ? styles.active : ""
                }`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <Grid size={18} />
              </button>
              <button
                className={`${styles.viewButton} ${
                  viewMode === "list" ? styles.active : ""
                }`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <List size={18} />
              </button>
            </div>

            <button
              className={styles.filterToggle}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>

            <select
              className={styles.sortSelect}
              id="sortBy"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        <div className={styles.content}>
          <FilterSidebar
            isOpen={showFilters}
            filters={filters}
            onFilterChange={handleFilterChange}
            onClose={() => setShowFilters(false)}
          />

          <div className={styles.productsSection}>
            <div className={styles.resultsInfo}>
              <span className={styles.resultCount}>
                {filteredAndSortedProducts.length} products found
              </span>
              {filters.category !== "All" && (
                <span className={styles.activeFilter}>
                  in {filters.category}
                </span>
              )}
            </div>

            <div className={`${styles.products} ${styles[viewMode]}`}>
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className={styles.noResults}>
                <Filter size={48} />
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more results</p>
                <button
                  className={styles.clearFilters}
                  onClick={() =>
                    setFilters({
                      category: "All",
                      brand: "All",
                      priceRange: [0, 2000],
                      rating: 0,
                      inStock: false,
                      sortBy: "featured",
                    })
                  }
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
