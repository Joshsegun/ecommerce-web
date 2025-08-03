import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, Zap } from 'lucide-react';
import { Product } from '../../contexts/CartContext';
import { useCart } from '../../contexts/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleImageHover = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const handleImageLeave = () => {
    setCurrentImageIndex(0);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? styles.starFilled : styles.starEmpty}
        fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
      />
    ));
  };

  if (viewMode === 'list') {
    return (
      <div className={styles.listCard}>
        <div className={styles.listImageContainer}>
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className={styles.listImage}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          />
          {product.discount && (
            <div className={styles.discountBadge}>
              -{product.discount}%
            </div>
          )}
          {product.isNew && (
            <div className={styles.newBadge}>
              <Zap size={12} />
              New
            </div>
          )}
        </div>
        
        <div className={styles.listContent}>
          <div className={styles.listInfo}>
            <div className={styles.brand}>{product.brand}</div>
            <h3 className={styles.listTitle}>{product.name}</h3>
            <p className={styles.listDescription}>{product.description}</p>
            
            <div className={styles.rating}>
              <div className={styles.stars}>
                {renderStars(product.rating)}
              </div>
              <span className={styles.ratingText}>
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            
            <div className={styles.features}>
              {product.features.slice(0, 3).map((feature, index) => (
                <span key={index} className={styles.feature}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          <div className={styles.listActions}>
            <div className={styles.priceSection}>
              <div className={styles.price}>${product.price}</div>
              {product.originalPrice && (
                <div className={styles.originalPrice}>${product.originalPrice}</div>
              )}
            </div>
            
            <div className={styles.actionButtons}>
              <button
                className={`${styles.wishlistButton} ${isWishlisted ? styles.wishlisted : ''}`}
                onClick={handleWishlist}
                aria-label="Add to wishlist"
              >
                <Heart size={18} />
              </button>
              
              <button
                className={styles.addToCartButton}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={18} />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className={styles.image}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
        
        <div className={styles.badges}>
          {product.discount && (
            <div className={styles.discountBadge}>
              -{product.discount}%
            </div>
          )}
          {product.isNew && (
            <div className={styles.newBadge}>
              <Zap size={12} />
              New
            </div>
          )}
          {product.isBestSeller && (
            <div className={styles.bestSellerBadge}>
              Best Seller
            </div>
          )}
        </div>
        
        <div className={styles.overlay}>
          <div className={styles.quickActions}>
            <button
              className={`${styles.quickAction} ${isWishlisted ? styles.wishlisted : ''}`}
              onClick={handleWishlist}
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
            
            <button
              className={styles.quickAction}
              aria-label="Quick view"
            >
              <Eye size={18} />
            </button>
          </div>
          
          <button
            className={styles.quickAddToCart}
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart size={18} />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.brand}>{product.brand}</div>
        <h3 className={styles.title}>{product.name}</h3>
        
        <div className={styles.rating}>
          <div className={styles.stars}>
            {renderStars(product.rating)}
          </div>
          <span className={styles.ratingText}>
            ({product.reviewCount})
          </span>
        </div>
        
        <div className={styles.priceSection}>
          <div className={styles.price}>${product.price}</div>
          {product.originalPrice && (
            <div className={styles.originalPrice}>${product.originalPrice}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;