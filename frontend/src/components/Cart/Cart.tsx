import React from 'react';
import { X, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
  const { state, removeFromCart, updateQuantity, closeCart } = useCart();

  const handleCheckout = () => {
    // This will be implemented with Stripe integration
    alert('Checkout functionality will be implemented with Stripe!');
  };

  if (!state.isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={closeCart} />
      
      <div className={styles.cart}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <ShoppingBag size={24} />
            <h2 className={styles.title}>Shopping Cart</h2>
            <span className={styles.itemCount}>({state.itemCount} items)</span>
          </div>
          <button className={styles.closeButton} onClick={closeCart}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          {state.items.length === 0 ? (
            <div className={styles.emptyCart}>
              <ShoppingBag size={64} />
              <h3>Your cart is empty</h3>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            <>
              <div className={styles.items}>
                {state.items.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemImage}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className={styles.itemDetails}>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      <p className={styles.itemBrand}>{item.brand}</p>
                      <div className={styles.itemPrice}>
                        ${item.price}
                        {item.originalPrice && (
                          <span className={styles.originalPrice}>
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className={styles.itemActions}>
                      <div className={styles.quantityControls}>
                        <button
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <button
                        className={styles.removeButton}
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.footer}>
                <div className={styles.summary}>
                  <div className={styles.summaryRow}>
                    <span>Subtotal:</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Tax:</span>
                    <span>${(state.total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className={`${styles.summaryRow} ${styles.total}`}>
                    <span>Total:</span>
                    <span>${(state.total * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  className={styles.checkoutButton}
                  onClick={handleCheckout}
                >
                  <CreditCard size={20} />
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;