// assets/js/app.js

// Food Catalog Data
const MENU_ITEMS = [
    {
        id: "dal-makhani-deluxe",
        title: "Dal Makhani Deluxe",
        price: 349,
        category: "North Indian",
        desc: "Slow-cooked black lentils overnight on a clay tandoor, finished with cream and white butter.",
        isVeg: true,
        badge: "Popular",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjdG2P3KPrj9-MZK4rY1SJ7Da1UF4CPVtVGDeWBHK83DiRlwmrTsxUyHBIfy42T8cNiGwL2JzMWDnSWnfsw_OpcYXfDSnurwdLZF_gnpW8axfSt9rGZzeZkpqY31XdUmfV6euHnKAoOjQ6wqKIq06G8_h-g7lHfK7OkYQIf4o6y-CzWOSLbun360st2sP1U8t1bC1S9Y-MMljVbOnm1VVIUl0ikREr2HbCt7HMDmUVJoNGW3tTAsjrJ7c5zgt7dx0uEv1678sEcpQ"
    },
    {
        id: "butter-chicken-old-delhi",
        title: "Old Delhi Butter Chicken",
        price: 489,
        category: "North Indian",
        desc: "Tandoori chicken pieces simmered in a rich tomato, butter, and cashew nut gravy.",
        isVeg: false,
        badge: "Bestseller",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP5t_LyEyup2xHRs0L3zJ41s-Ic6RqkwBWBqFc7V4g2-Ih4n1yAqOYlOeKbsFmiokZFZW-8f-D_ufgKsRLOJWfsddkT4V5gfAWZYlkCYoCETVvSNsTuL01NIEp6ylI8VwQX-WxEypiqVNXws-Z-3tsmUeK3gkJ_uBT_KQNseTUgX8zE0bfTaTNO2vwfocbMYehfPj03LTvDcpPtqCHlC_iM08lrzVNGl_2bjct_eRV5RkCJDSACIZIWQZZGDrJYFApvvqlsy-9WlQ"
    },
    {
        id: "paneer-tikka-pizza",
        title: "Paneer Tikka Pizza",
        price: 399,
        category: "Pizzas",
        desc: "Hand-stretched crust topped with marinated paneer, spicy makhani sauce, onions and peppers.",
        isVeg: true,
        badge: "Chef's Choice",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoBrwyUsRc_xj0TJbVJRcdvkTKmZ4Fgq0rbnwKFou7K8JVIAr2fB2yJ1ff8DqZEPHxiAtCloUhHgR0AnpppmzckbPnqbJAFt1VA_RgpEc1XNhhvhgTX_QR7SZLBVH-CP_eJtSidNsMNCTllwSdo9t92sqSRC3saT71FnqwuCv7EbqcmvCFMc5T2h2hiM8mMoL8kDGr6o7l0d6lpEoc1ZnDwMfK_aU_HZFv6UfAZgRGzFuzO7cMdcVL4X0JBBItlvjKw09kXQlOARM"
    },
    {
        id: "mutton-seekh-roll",
        title: "Mutton Seekh Roll",
        price: 279,
        category: "Rolls",
        desc: "Succulent mutton mince skewers rolled in a fresh roomali roti with mint chutney and onions.",
        isVeg: false,
        badge: "Trending",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqdpH6L2PnmQCftrdV-bJXJGxwyamZGy1npiF5RcWug9lGGuwjHljbp6JwEc7GujyTHhEGG7bVeLQKxUNxS3FVp86pX3hPPQ5YIcbolPybkrFlwyNWNizBJ9WIQ77vgdpGzA3H-udDlC19WTKJgoMpL-ekOkAQAzv92p9hPkTE9U8VykynUWT3jr6N0enuqJUzKkz22oqSWhM4iBTcVus9WGZguxm5TSvGY9QV8rmWV3HShbvwe8blTiGZE8FirqA7uRyvLZrF3eA"
    },
    {
        id: "wok-fired-chilli-paneer",
        title: "Wok-Fired Chilli Paneer",
        price: 329,
        category: "Chinese",
        desc: "Crispy paneer cubes tossed with bell peppers, onions, and spicy soy-chilli sauce.",
        isVeg: true,
        badge: "",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChpEy-DWzytW58L5RNZ3v4t8kEhs5J5w-KVDrz8baITLR6Nt-R0WuS7UZ_566i9otwUOzmM0NVmaN1R6xGy7if1uE2mZjP8RTgfHW7t9zrX8wbxhcjRANIYvvji4f3MQQ1N3D3EtInuE6ah_KA4pr-cHvcHMvYfu78T13MmyHr_rtzT9JP52DU-NaZcym9gjsjmrgU2BZi7VhmKeTMhnajPBbnwpEFYWzMwpqZLKee2MU-GaKsNPncFknH01G_yfGRt7LEH0AAG2s"
    },
    {
        id: "shahi-tukda-rabri",
        title: "Shahi Tukda with Rabri",
        price: 199,
        category: "Desserts",
        desc: "Traditional Mughal dessert of fried bread soaked in saffron milk and topped with creamy rabri.",
        isVeg: true,
        badge: "Heritage Special",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZTbFg1I_yLrefgyeOxYp6026RYrmp5E3uZotS_N6n23LCjaRkHEqOPE_ulEoN-xJsORc732ns1P4S2VUXMe5EOjVH_TQ1OPZI8hwaS209VhYtZTYWZuokEPOzAQPWlWnZlIOrEQJB9H4rL0MtbSgpB0Sur2-xzebe3wTobuXOqW6SG2khXjmo9NtlWdzvM5PI8Vn_gRN-b3PeElUZ6q50LKt07648o9tdbHa4M5B54ZIzZvd0yCOVUjGNrLeOrjicFN6J8obPQzw"
    },
    {
        id: "butter-chicken-special",
        title: "Special Butter Chicken",
        price: 450,
        category: "North Indian",
        desc: "Slow-cooked in a rich tomato and cashew gravy with a touch of local butter.",
        isVeg: false,
        badge: "Signatures",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcXp6DWAOXePvUHzm60YbW3NTwccaT6k3GhXpEzgw1UQ_NICAmvP7z9JXxPOp4jSrYZ2LkEg4QgP58u3MGwxJtqn-7hRqrPgbDJa5Tea6ZIZilly5I4-dE0Q7eBD-zPNfhQf507zLsZWhrRfW43dYZmSEgF0DWFngCGH1TwujNpl05-ANM-yUExIblLyZp5mDdsGmlt0NFSh94VNcyAbive2skzJqdtKHAy-FbJEY6UDppO3mYC2c0sJYXF49QmMKB3KlDU3X5GXE"
    },
    {
        id: "paneer-tikka-roll-spicy",
        title: "Spicy Paneer Tikka Roll",
        price: 220,
        category: "Rolls",
        desc: "Tandoori-grilled paneer tossed in zesty spices, wrapped in a soft roomali roti.",
        isVeg: true,
        badge: "Popular",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANxpoC0VOVWVhRXarVa7ndyaKMBnH9qv4wm4ZTMDCFRprv8GsnxUenMQRrR-vgjfBjsS1Wdr__oyx6VieM_VN88t2GzumbNDzoLF3rmPcR7OkzNwv7l2F7OueQvqAsIrPKpRBWS7DzyUSTnuZLm8e3ASuZrRQ5wT8vPQuKBqG1ImOxE_xPfFEyynTcPlReJzlLi64W0pR8p09Z_7mFVIYimDBrrqJID1GPDSrM11Pn71vZb54sqBMBEyR6coSaOHdG10OQljimuCk"
    },
    {
        id: "classic-veg-burger",
        title: "Classic Veg Burger",
        price: 180,
        category: "Burgers",
        desc: "Crispy vegetable patty with secret house sauce and fresh farm produce.",
        isVeg: true,
        badge: "Signatures",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7wL8GVbefVyy5kgsleluejcjnJ0AR9H1FbaLYkqA-pvj1jlukQWgWJdY_vIrDfbXnZ4S4C26QDiymTbCMl6hR9EvFquh4SM3YaiXxv5KlMuZ9QJkA2uVKn-iC9WLpXNWH_e0RbvAMLv4aTQVJXEF3GM2HyG1nHLQ_BroTuYFQrg6-qVIcLcBv2WS7nJAKNAmq5ZRnVdbwWKFRzTAJOa2HoCyrgjxGmOB9IqDDXHkp3PmdKF6w8Hxe71pYxjxIeltYq482v_SjzgE"
    },
    {
        id: "pepperoni-feast-pizza",
        title: "Pepperoni Feast Pizza",
        price: 590,
        category: "Pizzas",
        desc: "Artisanal thin crust topped with premium pepperoni and double cheese.",
        isVeg: false,
        badge: "Hot Buy",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6VMJ6mJZm2SM3UvewLkwUUGgd5NktpRUO4pN_XiJTuTKFahhik36__mDKze0eqxU1pfdAixLehBc0aquwBExEEbm3uWOtGFQCeghWj1xcmnJmh2YEB2JL_jmzc95kDOMWOHp4bj4PRMu1FtE6I9ikmdQuH3nPTxSypnP1kkmUmT-j9GDXSO-Ohs9an7VueyOxqXJkKLqJYZQXf50vSOw9S_fTbFzlYWXQDGCuO2V2Unjdkx6cINLLnH-Brs3s9kdQ4hl1TCyY8kQ"
    },
    {
        id: "smoky-tandoori-chicken",
        title: "Smoky Tandoori Chicken",
        price: 380,
        category: "North Indian",
        desc: "Smoky, charred Chicken Tikka pieces glistening with spices, served with lemon wedges and mint dip.",
        isVeg: false,
        badge: "Popular",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj0z8X1GcHlAh7ZAraTiZQckdX-9WHeIIN5FtdlekDq8hzftbsV497jTPhgdgqlp2LQVOdrQSafLHlqRTTEraMu_TsUvK4pVSIVljERo2CCScT5Ey0RFmmEQ5pKTY9XNLDT7p5vWmH50BvCtnPu2GdKRfGuTRE-miYYa7EnFeR7CNupmGWAr2lGd1RMZnSrAJ38sl19H_USB4BEeOD3iaSLIp5GluCaRCaU3p1aPaxrfT57cnSNUGNWc756QAwht_e3yRZbPAc7Yo"
    },
    {
        id: "slow-cooked-dal-24h",
        title: "24hr Slow-Cooked Dal",
        price: 320,
        category: "North Indian",
        desc: "Rich Dal cooked slow for 24 hours with a velvety texture and a melting dollop of butter.",
        isVeg: true,
        badge: "Bestseller",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYYhyXS6TEwVysGvzmePZyIZY4eWQtwPFmP9V2MMQH16cr6yGnuaMQPSjjdJe0FRpW-GJ9sat7mnA20yl5w4L7srQTrrO2x7Y4zfCtfBywtTDcvNE_02S8CmUNib3OA93wQKesKMCAi4MgMZcGovrOMr2gSWYn0vmyIGNBGjfKv4Vx-xk3yWJUgJstPjQlJ_0wqCUSjWVH8p0NsGcwi4gKUF9swI2Ze_TBFoQOnosuy9XNzu0sAxO6cJinElCTYRdxXTBdXJK-N4"
    },
    {
        id: "butter-garlic-naan",
        title: "Butter Garlic Naan",
        price: 85,
        category: "North Indian",
        desc: "Fluffy, buttery flatbread baked fresh in wood-fired clay tandoor, topped with minced garlic.",
        isVeg: true,
        badge: "",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByaGefRiVLsBEx_T6louYEHUm6d32kDrVdu4B5eDrXmn8kMPrjPMQ7WVuy9NIbIGR2v4xVdXglDantbIPE3rShMAWxt6JyXAJICh5_3Oy7LnwpOFf7R1RLyo2Sm6LBa9ZqaOahG62MMJfzVVKQLdyVz2hfa7IjU96YgW8JexgnXVH46pOUFJ4ksmWpWo0Z7qra3ZEWZWLyb52X_5t5CzeYzptNWUv-Tgv9CYM7TDcw-FAyeIe0FvJZ7SDAK3UpRhd-JI633Y9rnxE"
    },
    {
        id: "pista-malai-kulfi",
        title: "Pista Malai Kulfi",
        price: 120,
        category: "Desserts",
        desc: "Traditional Indian frozen dessert, rich and creamy, garnished with pistachios and saffron.",
        isVeg: true,
        badge: "Signatures",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf456zJl72teyb_UMl22TXsddU4qrcziXoeD2QLJeUInq6dMugOukNxTfRFqQqtr4QqLIqTA3aDdcivXEI4lpd5goXlJ87wBG9xlKfAY_sMpvesAKYOFC_nbRvL9ENxGQpgTt-63Agv65vnVMk4EH3r4QP0UL2yFhpu0MOng45yqhqhOoSyaFWirciaxeck8yGoA-o85FoQ6E_oo9RDbPpoqmL1MHbAHSClZ3S37wmA1ttkrkupYxAvMxDTk1Y96Gzx9JlC2Id6bM"
    }
];

// App State
let cart = JSON.parse(localStorage.getItem('dd_cart')) || [];
let activeCategory = "All Items";
let searchQuery = "";
let prefVegOnly = false;
let prefSpicyOnly = false;

// Initialize Cart Drawer Structure in the DOM dynamically
function initCartDrawer() {
    if (document.getElementById('cart-drawer-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'cart-drawer-overlay';
    overlay.className = 'cart-drawer-overlay';
    overlay.addEventListener('click', closeCart);

    const drawer = document.createElement('div');
    drawer.id = 'cart-drawer';
    drawer.className = 'cart-drawer';
    drawer.innerHTML = `
        <div class="cart-header">
            <h3 class="cart-title">Your Order</h3>
            <button class="close-cart-btn" onclick="closeCart()">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
        <div class="cart-items" id="cart-drawer-items"></div>
        <div class="cart-footer">
            <div class="cart-summary-row">
                <span>Items Subtotal</span>
                <span id="cart-subtotal">₹0.00</span>
            </div>
            <div class="cart-summary-row">
                <span>Delivery Partner Fee</span>
                <span>₹40.00</span>
            </div>
            <div class="cart-summary-row total">
                <span>Total Amount</span>
                <span id="cart-total">₹0.00</span>
            </div>
            <button class="cart-checkout-btn" onclick="checkoutViaWhatsApp()">
                <span class="material-symbols-outlined">send</span>
                <span>Send Order via WhatsApp</span>
            </button>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
}

// Open / Close Cart Drawer
function openCart() {
    initCartDrawer();
    renderCart();
    document.getElementById('cart-drawer-overlay').classList.add('open');
    document.getElementById('cart-drawer').classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeCart() {
    document.getElementById('cart-drawer-overlay').classList.remove('open');
    document.getElementById('cart-drawer').classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
}

// Add Item to Cart
function addToCart(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(i => i.id === itemId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            title: item.title,
            price: item.price,
            img: item.img,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    animateCartIcon();
    
    // Toast notification simulation
    showToast(`${item.title} added to cart!`);
}

// Adjust Item Quantity
function updateQty(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== itemId);
    }

    saveCart();
    renderCart();
}

// Remove Item from Cart
function removeItem(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    saveCart();
    renderCart();
}

// Save Cart State to LocalStorage
function saveCart() {
    localStorage.setItem('dd_cart', JSON.stringify(cart));
    updateCartBadges();
}

// Update Cart Count Badges in Nav
function updateCartBadges() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update main nav badges
    const badges = document.querySelectorAll('.cart-badge-count');
    badges.forEach(b => {
        b.textContent = totalCount;
        b.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    // Update floating mobile sticky bar if it exists
    const mobBar = document.getElementById('mobile-cart-bar');
    if (mobBar) {
        if (totalCount > 0) {
            mobBar.classList.add('visible');
            document.getElementById('mobile-cart-qty').textContent = `${totalCount} Item${totalCount > 1 ? 's' : ''}`;
            document.getElementById('mobile-cart-price-val').textContent = `₹${subtotal}`;
        } else {
            mobBar.classList.remove('visible');
        }
    }
}

// Render Cart Drawer Contents
function renderCart() {
    const itemsContainer = document.getElementById('cart-drawer-items');
    if (!itemsContainer) return;

    itemsContainer.innerHTML = '';

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <span class="material-symbols-outlined">shopping_cart</span>
                <p>Your cart is empty.<br>Add some delicious dishes to get started!</p>
            </div>
        `;
        document.getElementById('cart-subtotal').textContent = `₹0.00`;
        document.getElementById('cart-total').textContent = `₹0.00`;
        return;
    }

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.title}</h4>
                <p class="cart-item-price">₹${item.price}</p>
            </div>
            <div class="cart-item-qty-control">
                <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
            </div>
            <button class="action-btn remove-item-btn" onclick="removeItem('${item.id}')">
                <span class="material-symbols-outlined">delete</span>
            </button>
        `;
        itemsContainer.appendChild(itemEl);
    });

    const deliveryFee = 40;
    document.getElementById('cart-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `₹${(subtotal + deliveryFee).toFixed(2)}`;
}

// Format Cart items for WhatsApp redirect
function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
    }

    let message = "*🔥 New Order from Delhi Delights Website! 🔥*\n\n";
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        message += `${index + 1}. *${item.title}* x ${item.quantity} - _₹${itemTotal}_\n`;
    });

    const deliveryFee = 40;
    const finalAmount = subtotal + deliveryFee;
    
    message += `\n*Items Subtotal:* ₹${subtotal}`;
    message += `\n*Delivery Charge:* ₹${deliveryFee}`;
    message += `\n*Grand Total:* *₹${finalAmount}*`;
    message += `\n\n------------------------------`;
    message += `\n*Please deliver to my address:* `;
    message += `\n(Please write your address and name here)`;
    message += `\n\nThank you!`;

    // WhatsApp business/recipient number. Using a placeholder or blank to open standard chat trigger
    const phone = "919999999999"; // Replace with client/business phone number
    const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(waUrl, '_blank');
}

// Animate Cart icon pulse
function animateCartIcon() {
    const btns = document.querySelectorAll('.action-btn .material-symbols-outlined[data-icon="shopping_cart"]');
    btns.forEach(btn => {
        btn.classList.add('scale-125');
        setTimeout(() => {
            btn.classList.remove('scale-125');
        }, 300);
    });
}

// Show Toast message
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.position = 'fixed';
        container.style.bottom = '30px';
        container.style.left = '30px';
        container.style.zIndex = '10000';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '10px';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.backgroundColor = 'var(--color-primary-container)';
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = 'var(--radius-lg)';
    toast.style.boxShadow = 'var(--shadow-md)';
    toast.style.fontFamily = 'var(--font-body)';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '600';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all var(--transition-medium)';
    toast.textContent = message;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);

    // Remove toast
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Menu Filters & Renderer
function renderMenuPage() {
    const menuContainer = document.getElementById('menu-items-grid');
    if (!menuContainer) return; // Not on the menu page

    menuContainer.innerHTML = '';

    const filtered = MENU_ITEMS.filter(item => {
        // Category Filter
        const matchesCategory = activeCategory === "All Items" || item.category === activeCategory;
        
        // Search Filter
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Dietary Checks
        const matchesVeg = !prefVegOnly || item.isVeg;
        const matchesSpicy = !prefSpicyOnly || (item.badge && item.badge.toLowerCase().includes('chef') || item.badge.toLowerCase().includes('spicy') || item.title.toLowerCase().includes('spicy'));

        return matchesCategory && matchesSearch && matchesVeg && matchesSpicy;
    });

    if (filtered.length === 0) {
        menuContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--color-on-surface-variant);">
                <span class="material-symbols-outlined" style="font-size: 48px; margin-bottom: 16px; color: var(--color-outline-variant);">search_off</span>
                <p>No dishes found matching your criteria. Try adjusting your filters!</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        
        const badgeHTML = item.badge ? `<div class="item-badge">${item.badge}</div>` : '';
        const dietaryBadge = item.isVeg ? 
            `<div class="veg-badge"><div class="veg-icon"><div></div></div></div>` :
            `<div class="nonveg-badge"><div class="nonveg-icon"><div></div></div></div>`;

        card.innerHTML = `
            <div class="item-card-image-wrap">
                <img src="${item.img}" alt="${item.title}" class="item-card-image" loading="lazy">
                ${dietaryBadge}
                ${badgeHTML}
            </div>
            <div class="item-card-content">
                <div class="item-card-header">
                    <h3 class="item-title">${item.title}</h3>
                    <span class="item-price">₹${item.price}</span>
                </div>
                <p class="item-desc">${item.desc}</p>
                <div class="item-actions">
                    <button class="item-add-btn" onclick="addToCart('${item.id}')">Add to Cart</button>
                    <button class="item-fav-btn" onclick="toggleFavorite(this)">
                        <span class="material-symbols-outlined">favorite</span>
                    </button>
                </div>
            </div>
        `;
        menuContainer.appendChild(card);
    });
}

// Toggle Favorites
function toggleFavorite(btn) {
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon.classList.contains('material-symbols-filled')) {
        icon.classList.remove('material-symbols-filled');
        icon.style.color = '';
        showToast("Removed from favorites");
    } else {
        icon.classList.add('material-symbols-filled');
        icon.style.color = 'var(--color-secondary)';
        showToast("Added to favorites!");
    }
}

// Change Active Category from chip/sidebar click
function selectCategory(categoryName, element) {
    activeCategory = categoryName;

    // Update UI active states in sidebar/slider
    const links = document.querySelectorAll('.sidebar-link, .category-pill');
    links.forEach(l => {
        l.classList.remove('active');
        if (l.dataset.category === categoryName) {
            l.classList.add('active');
        }
    });

    renderMenuPage();
}

// Delivery Location Pin Code Check
function checkDeliveryPin() {
    const input = document.getElementById('pin-code-input');
    const resultDiv = document.getElementById('pin-code-result');
    if (!input || !resultDiv) return;

    const pin = input.value.trim();
    if (!pin) {
        resultDiv.className = 'checker-result error';
        resultDiv.textContent = 'Please enter a valid pin code.';
        return;
    }

    // Supported South Delhi pin codes
    const activePins = [
        "110017", // Saket
        "110016", // Hauz Khas
        "110048", // Greater Kailash
        "110019", // Kalkaji
        "110024", // Lajpat Nagar
        "110062", // Khanpur
        "110029", // Safdarjung
        "110070", // Vasant Kunj
        "110025", // Nehru Place
        "110066"  // RK Puram
    ];

    if (activePins.includes(pin)) {
        resultDiv.className = 'checker-result success';
        resultDiv.textContent = '🎉 Yes! We deliver to your location in under 35 minutes.';
    } else {
        resultDiv.className = 'checker-result error';
        resultDiv.textContent = '😔 Sorry, we do not deliver to this pin code currently. We are expanding soon!';
    }
}

// Dom Loaded Events
document.addEventListener('DOMContentLoaded', () => {
    // Check URL parameters for active category selection
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    if (catParam) {
        activeCategory = catParam;
        
        // Update active class on sidebar buttons
        const links = document.querySelectorAll('.sidebar-link, .category-pill');
        links.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('data-category') === catParam) {
                l.classList.add('active');
            }
        });
    }

    // Initial cart counts
    updateCartBadges();

    // Scroll header styling
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Add list-search handlers if search-input exists
    const sInput = document.getElementById('menu-search-input');
    if (sInput) {
        sInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderMenuPage();
        });
    }

    // Check dietary check boxes if they exist
    const vegCheck = document.getElementById('veg-only-checkbox');
    if (vegCheck) {
        vegCheck.addEventListener('change', (e) => {
            prefVegOnly = e.target.checked;
            renderMenuPage();
        });
    }

    const spicyCheck = document.getElementById('spicy-only-checkbox');
    if (spicyCheck) {
        spicyCheck.addEventListener('change', (e) => {
            prefSpicyOnly = e.target.checked;
            renderMenuPage();
        });
    }

    // Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('.material-symbols-outlined');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.textContent = 'close';
                    menuToggle.setAttribute('aria-expanded', 'true');
                } else {
                    icon.textContent = 'menu';
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('.material-symbols-outlined');
                if (icon) {
                    icon.textContent = 'menu';
                }
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking any link
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('.material-symbols-outlined');
                if (icon) {
                    icon.textContent = 'menu';
                }
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Render initial menu if menu-items-grid is in current DOM
    renderMenuPage();
});
