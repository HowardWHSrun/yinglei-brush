// Product data with English translations
const products = [
    {
        id: 1,
        name: "Premium Large Script Goat Hair Brush",
        chineseName: "精品羊毫大楷笔",
        price: 128,
        image: "images/brush-01.JPG",
        category: "large",
        description: "Selected premium white goat hair, soft and elastic, excellent ink capacity. Suitable for large script writing and calligraphy practice. 40 years of craftsmanship inheritance, pure handmade.",
        materials: "White Goat Hair",
        size: "Large Script",
        features: ["Soft texture", "Excellent ink capacity", "Handmade", "40 years heritage"]
    },
    {
        id: 2,
        name: "Traditional Weasel Hair Fine Script Brush",
        chineseName: "传统狼毫小楷笔",
        price: 88,
        image: "images/brush-02.JPG",
        category: "small",
        description: "Premium yellow weasel hair, excellent elasticity and sharp tip. Suitable for small regular script and fine painting. Every detail reflects craftsmanship quality.",
        materials: "Yellow Weasel Hair",
        size: "Small Script",
        features: ["Sharp tip", "Good elasticity", "Fine script", "Premium material"]
    },
    {
        id: 3,
        name: "Mixed Hair Medium Script Brush",
        chineseName: "兼毫中楷笔",
        price: 98,
        image: "images/brush-03.JPG",
        category: "medium",
        description: "Mixed goat and weasel hair, combining softness and elasticity. Suitable for various script styles, ideal choice for calligraphy enthusiasts.",
        materials: "Mixed Hair (Goat + Weasel)",
        size: "Medium Script",
        features: ["Versatile", "Balanced performance", "Multiple scripts", "Mixed materials"]
    },
    {
        id: 4,
        name: "Rabbit Hair Detail Brush",
        chineseName: "紫毫细节笔",
        price: 68,
        image: "images/brush-04.JPG",
        category: "small",
        description: "Selected rabbit hair, fine texture and sharp tip. Perfect for detail work and fine painting, essential tool for meticulous artists.",
        materials: "Purple Rabbit Hair",
        size: "Detail Work",
        features: ["Ultra fine", "Sharp tip", "Detail work", "High precision"]
    },
    {
        id: 5,
        name: "Classic Lake Brush Set (3 pieces)",
        chineseName: "经典湖笔套装（3支）",
        price: 268,
        image: "images/brush-05.JPG",
        category: "set",
        description: "Classic three-piece set including large, medium, and small script brushes. Covers all daily calligraphy needs, perfect gift for calligraphy lovers.",
        materials: "Mixed Materials",
        size: "Complete Set",
        features: ["Three-piece set", "Complete range", "Gift box packaging", "Value for money"]
    },
    {
        id: 6,
        name: "Boutique Goat Hair Large Brush",
        chineseName: "精品羊毫大笔",
        price: 158,
        image: "images/brush-06.JPG",
        category: "large",
        description: "Specially selected premium goat hair, extra large size. Suitable for banner writing and large character practice, excellent ink storage capacity.",
        materials: "Premium White Goat Hair",
        size: "Extra Large",
        features: ["Extra large", "Banner writing", "Premium material", "Excellent ink storage"]
    },
    {
        id: 7,
        name: "Traditional Craftsmanship Weasel Hair Brush",
        chineseName: "传统工艺狼毫笔",
        price: 118,
        image: "images/brush-07.JPG",
        category: "medium",
        description: "Adhering to traditional craftsmanship, selected weasel hair. Excellent elasticity and tip recovery, suitable for various calligraphy styles.",
        materials: "Premium Weasel Hair",
        size: "Medium Script",
        features: ["Traditional craft", "Excellent elasticity", "Tip recovery", "Professional grade"]
    },
    {
        id: 8,
        name: "Student Practice Brush Set",
        chineseName: "学生练习笔套装",
        price: 188,
        image: "images/brush-08.JPG",
        category: "set",
        description: "Specially designed for students, includes brushes of different sizes and ink stone. Perfect starter set for calligraphy beginners.",
        materials: "Mixed Materials",
        size: "Student Set",
        features: ["Beginner friendly", "Complete accessories", "Educational", "Good value"]
    }
];

// Shopping cart
let cart = [];

// Function to display products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="showProductDetails(${product.id})">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-chinese">${product.chineseName}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-details">
                    <span class="material-tag"><i class="fas fa-feather"></i> ${product.materials}</span>
                    <span class="size-tag"><i class="fas fa-ruler"></i> ${product.size}</span>
                </div>
                <div class="product-features">
                    ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="product-footer">
                    <span class="price">¥${product.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Function to show product details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="modal-info">
                    <h2>${product.name}</h2>
                    <p class="modal-chinese">${product.chineseName}</p>
                    <p class="modal-price">¥${product.price}</p>
                    <p class="modal-description">${product.description}</p>
                    <div class="modal-details">
                        <h4><i class="fas fa-info-circle"></i> Product Details</h4>
                        <ul>
                            <li><strong>Materials:</strong> ${product.materials}</li>
                            <li><strong>Size:</strong> ${product.size}</li>
                            <li><strong>Category:</strong> ${product.category}</li>
                        </ul>
                    </div>
                    <div class="modal-features">
                        <h4><i class="fas fa-star"></i> Features</h4>
                        <div class="features-list">
                            ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                    </div>
                    <button class="add-to-cart-modal-btn" onclick="addToCart(${product.id}); closeModal()">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    function closeModal() {
        document.body.removeChild(modal);
    }
    
    modal.querySelector('.close-modal').onclick = closeModal;
    modal.onclick = function(e) {
        if (e.target === modal) closeModal();
    };
    
    window.closeModal = closeModal;
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showCartNotification(`${product.name} added to cart!`);
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'inline' : 'none';
    }
    
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">¥${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotal.textContent = total;
    }
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Show cart notification
function showCartNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #28a745, #20c997);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
        z-index: 1002;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Filter products
function filterProducts(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to brush knowledge section
function scrollToBrushKnowledge() {
    const brushKnowledgeSection = document.getElementById('brush-knowledge');
    if (brushKnowledgeSection) {
        brushKnowledgeSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button
function toggleBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

// Update active navigation
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Page loader
function showPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-brush">🖌️</div>
            <div class="loader-text">Yinglei Lake Brush</div>
            <div class="loader-subtext">40 Years Heritage Craftsmanship</div>
        </div>
    `;
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.classList.add('hide');
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }, 1500);
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Product filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = button.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    // Cart toggle
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    
    if (cartIcon && cartSidebar) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.toggle('active');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
        });
    }
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }
}

// Lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Animation effects
function addAnimationEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animatedElements = document.querySelectorAll('.feature, .product-card, .about-text, .contact-item, .knowledge-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    showPageLoader();
    displayProducts(products);
    updateCartDisplay();
    initializeEventListeners();
    initLazyLoading();
});

// Add animation effects after page load
window.addEventListener('load', () => {
    addAnimationEffects();
});

// Scroll event listeners
window.addEventListener('scroll', () => {
    toggleBackToTop();
    updateActiveNavigation();
    
    // Navbar effects
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(248, 244, 240, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(139, 69, 19, 0.2)';
    } else {
        navbar.style.background = 'rgba(248, 244, 240, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(139, 69, 19, 0.15)';
    }
});

// Export functions for HTML use
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.scrollToProducts = scrollToProducts;
window.scrollToBrushKnowledge = scrollToBrushKnowledge;
window.filterProducts = filterProducts;
window.scrollToTop = scrollToTop;
window.showProductDetails = showProductDetails; 