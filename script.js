// 产品数据
const products = [
    {
        id: 1,
        name: "常青树系列羊毫大楷笔",
        description: "选用优质山羊毛制作，黄惠琴老师亲手打造。笔锋饱满，储墨丰富，适合大字书写。这款羊毫笔采用传统湖笔工艺，经过120多道工序精制而成。",
        price: 158,
        originalPrice: 198,
        image: "images/brush-01.JPG",
        category: "large",
        badge: "热销"
    },
    {
        id: 2,
        name: "精品狼毫中楷笔",
        description: "采用天然黄鼠狼尾毛，弹性极佳，锋颖尖锐。经典湖笔制作工艺，适合中楷书写和工笔画。每支笔都经过严格质检，确保品质上乘。",
        price: 128,
        originalPrice: 168,
        image: "images/brush-02.JPG",
        category: "medium",
        badge: "推荐"
    },
    {
        id: 3,
        name: "传统兔毫小楷笔",
        description: "精选优质兔毛制作，毛质柔软细腻，锋颖尖锐持久。专为小楷书写设计，笔触精准，是书法爱好者的理想选择。传承千年湖笔工艺。",
        price: 88,
        originalPrice: 118,
        image: "images/brush-03.JPG",
        category: "small",
        badge: "精品"
    },
    {
        id: 4,
        name: "混合毫中楷笔",
        description: "羊毫配狼毫的经典组合，兼具羊毫的柔软和狼毫的弹性。黄惠琴老师匠心配比，适合各种书体练习，是初学者和进阶者的首选。",
        price: 98,
        originalPrice: 128,
        image: "images/brush-04.JPG",
        category: "medium",
        badge: "新品"
    },
    {
        id: 5,
        name: "特制紫毫大楷笔",
        description: "采用珍贵紫毫制作，笔身华美，书写流畅。这款大楷笔储墨丰富，适合写大字和对联。每支笔都是黄惠琴老师精心制作的艺术品。",
        price: 218,
        originalPrice: 268,
        image: "images/brush-05.JPG",
        category: "large",
        badge: "限量"
    },
    {
        id: 6,
        name: "经典羊毫对联笔",
        description: "专为对联书写设计的特大号羊毫笔，笔头丰满，储墨量大。采用传统湖笔工艺制作，书写对联、榜书的最佳选择。品质保证，包邮到家。",
        price: 188,
        originalPrice: 238,
        image: "images/brush-06.JPG",
        category: "large",
        badge: "专业"
    },
    {
        id: 7,
        name: "精工狼毫小楷笔",
        description: "选用上等狼毫制作，笔尖极细，弹性十足。专为小楷和工笔画设计，线条精准细腻。黄惠琴老师四十年制笔经验的结晶之作。",
        price: 108,
        originalPrice: 138,
        image: "images/brush-07.JPG",
        category: "small",
        badge: "匠心"
    },
    {
        id: 8,
        name: "湖笔套装（初学者）",
        description: "包含大中小三支毛笔，适合初学者全面练习。搭配精美包装盒，自用送礼两相宜。每支笔都经过严格挑选，品质有保障。",
        price: 298,
        originalPrice: 398,
        image: "images/brush-08.JPG",
        category: "set",
        badge: "套装"
    },
    {
        id: 9,
        name: "高级兼毫中楷笔",
        description: "羊毫与狼毫的完美结合，软硬适中，适应性强。无论是楷书、行书还是草书都能游刃有余。湖笔工艺的经典代表作品。",
        price: 148,
        originalPrice: 188,
        image: "images/brush-09.JPG",
        category: "medium",
        badge: "经典"
    },
    {
        id: 10,
        name: "大师系列羊毫笔",
        description: "黄惠琴老师亲制的高端羊毫笔，选料考究，工艺精湛。笔杆采用优质竹材，笔头饱满圆润，是书法大师的专业之选。",
        price: 368,
        originalPrice: 468,
        image: "images/brush-10.JPG",
        category: "large",
        badge: "大师"
    },
    {
        id: 11,
        name: "传承湖笔礼盒装",
        description: "五支精品毛笔组合，包装精美，寓意深远。包含各种规格毛笔，满足不同书写需求。是馈赠师长、朋友的上等礼品。",
        price: 588,
        originalPrice: 788,
        image: "images/brush-11.JPG",
        category: "set",
        badge: "礼盒"
    },
    {
        id: 12,
        name: "纯狼毫工笔画笔",
        description: "专为工笔画创作设计，选用最优质的狼毫，笔尖如针，弹性绝佳。画家专用，线条精准流畅，是工笔画爱好者的必备工具。",
        price: 198,
        originalPrice: 258,
        image: "images/brush-12.JPG",
        category: "small",
        badge: "专业"
    }
];

// 购物车数据
let cart = [];

// DOM 元素
const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    showPageLoader();
    displayProducts(products);
    updateCartDisplay();
    initializeEventListeners();
    createCheckoutModal();
    initLazyLoading();
});

// 显示产品
function displayProducts(productList) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productList.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// 创建产品卡片
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x250?text=毛笔图片'">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="price">¥${product.price}</span>
                ${product.originalPrice ? `<span class="original-price">¥${product.originalPrice}</span>` : ''}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> 加入购物车
            </button>
        </div>
    `;
    
    return card;
}

// 产品过滤
function filterProducts(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// 添加到购物车
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
    showCartMessage('商品已添加到购物车！');
}

// 更新购物车显示
function updateCartDisplay() {
    // 更新购物车数量
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    // 更新购物车内容
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">购物车为空</p>';
        } else {
            cart.forEach(item => {
                const cartItem = createCartItem(item);
                cartItems.appendChild(cartItem);
            });
        }
    }
    
    // 更新总价
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = total;
}

// 创建购物车商品项
function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60x60?text=毛笔'">
        <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">¥${item.price}</div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; background: #e74c3c; color: white;">×</button>
            </div>
        </div>
    `;
    
    return cartItem;
}

// 更新商品数量
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartDisplay();
    }
}

// 从购物车移除商品
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// 显示购物车消息
function showCartMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 1002;
        animation: slideInRight 0.3s ease;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// 创建结算模态框
function createCheckoutModal() {
    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.id = 'checkout-modal';
    
    modal.innerHTML = `
        <div class="checkout-content">
            <div class="checkout-header">
                <h2>🛒 确认订单</h2>
                <button class="close-checkout">&times;</button>
            </div>
            
            <div class="order-summary">
                <h3>📋 订单详情</h3>
                <div id="checkout-items"></div>
                <div class="order-item">
                    <span>总计</span>
                    <span>¥<span id="checkout-total">0</span></span>
                </div>
            </div>
            
            <div class="wechat-contact">
                <h4>💬 微信联系购买</h4>
                <p>请添加微信进行购买咨询</p>
                <p><strong>微信号：sxy9589</strong></p>
                <p><strong>联系人：沈雪英</strong></p>
                <p>我们会为您提供专业的毛笔选购建议</p>
            </div>
            
            <form class="checkout-form" id="checkout-form">
                <h3>📦 收货信息</h3>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="customer-name">收货人姓名 *</label>
                        <input type="text" id="customer-name" required>
                    </div>
                    <div class="form-group">
                        <label for="customer-phone">联系电话 *</label>
                        <input type="tel" id="customer-phone" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="province">省份 *</label>
                        <select id="province" required>
                            <option value="">请选择省份</option>
                            <option value="浙江省">浙江省</option>
                            <option value="江苏省">江苏省</option>
                            <option value="上海市">上海市</option>
                            <option value="北京市">北京市</option>
                            <option value="广东省">广东省</option>
                            <option value="山东省">山东省</option>
                            <option value="安徽省">安徽省</option>
                            <option value="河南省">河南省</option>
                            <option value="湖北省">湖北省</option>
                            <option value="湖南省">湖南省</option>
                            <option value="江西省">江西省</option>
                            <option value="福建省">福建省</option>
                            <option value="四川省">四川省</option>
                            <option value="重庆市">重庆市</option>
                            <option value="云南省">云南省</option>
                            <option value="贵州省">贵州省</option>
                            <option value="广西壮族自治区">广西壮族自治区</option>
                            <option value="海南省">海南省</option>
                            <option value="天津市">天津市</option>
                            <option value="河北省">河北省</option>
                            <option value="山西省">山西省</option>
                            <option value="辽宁省">辽宁省</option>
                            <option value="吉林省">吉林省</option>
                            <option value="黑龙江省">黑龙江省</option>
                            <option value="内蒙古自治区">内蒙古自治区</option>
                            <option value="陕西省">陕西省</option>
                            <option value="甘肃省">甘肃省</option>
                            <option value="青海省">青海省</option>
                            <option value="宁夏回族自治区">宁夏回族自治区</option>
                            <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                            <option value="西藏自治区">西藏自治区</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="city">城市 *</label>
                        <input type="text" id="city" placeholder="如：湖州市" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="address">详细地址 *</label>
                    <input type="text" id="address" placeholder="请填写详细地址（街道、小区、门牌号等）" required>
                </div>
                
                <div class="form-group">
                    <label for="postal-code">邮政编码</label>
                    <input type="text" id="postal-code" placeholder="选填">
                </div>
                
                <div class="form-group">
                    <label for="delivery-method">配送方式 *</label>
                    <select id="delivery-method" required>
                        <option value="">请选择配送方式</option>
                        <option value="express">快递配送（全国包邮）</option>
                        <option value="self-pickup">上门自取（湖州善琏镇）</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="order-notes">订单备注</label>
                    <textarea id="order-notes" rows="3" placeholder="如有特殊要求或毛笔偏好，请在此说明"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="wechat-id">您的微信号（推荐填写）</label>
                    <input type="text" id="wechat-id" placeholder="填写后我们可以直接微信联系您">
                </div>
                
                <button type="submit" class="submit-order">
                    💬 提交订单（微信联系确认）
                </button>
                
                <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 10px; border-left: 4px solid #ffc107;">
                    <h4 style="color: #856404; margin-top: 0;">📋 订单流程说明：</h4>
                    <p style="color: #856404; margin: 5px 0; font-size: 14px;">1. 提交订单信息后，我们会通过微信与您确认具体需求</p>
                    <p style="color: #856404; margin: 5px 0; font-size: 14px;">2. 沈雪英老师会根据您的书法需求推荐最适合的毛笔</p>
                    <p style="color: #856404; margin: 5px 0; font-size: 14px;">3. 确认订单和价格后安排制作和发货</p>
                    <p style="color: #856404; margin: 5px 0; font-size: 14px;">4. 全国快递包邮，支持货到付款</p>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// 打开结算页面
function openCheckout() {
    if (cart.length === 0) {
        alert('购物车为空，请先添加商品！');
        return;
    }
    
    const modal = document.getElementById('checkout-modal');
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    
    // 更新订单商品
    checkoutItems.innerHTML = '';
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>¥${item.price * item.quantity}</span>
        `;
        checkoutItems.appendChild(orderItem);
    });
    
    // 更新总价
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = total;
    
    modal.style.display = 'flex';
}

// 关闭结算页面
function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
}

// 提交订单
function submitOrder(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const orderData = {
        customerName: document.getElementById('customer-name').value,
        customerPhone: document.getElementById('customer-phone').value,
        province: document.getElementById('province').value,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        postalCode: document.getElementById('postal-code').value,
        deliveryMethod: document.getElementById('delivery-method').value,
        orderNotes: document.getElementById('order-notes').value,
        wechatId: document.getElementById('wechat-id').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderTime: new Date().toLocaleString('zh-CN')
    };
    
    // 生成订单摘要
    const orderSummary = generateOrderSummary(orderData);
    
    // 显示订单确认
    showOrderConfirmation(orderSummary);
    
    // 清空购物车
    cart = [];
    updateCartDisplay();
    closeCheckout();
    cartSidebar.classList.remove('active');
}

// 生成订单摘要
function generateOrderSummary(orderData) {
    const itemsList = orderData.items.map(item => 
        `${item.name} × ${item.quantity} = ¥${item.price * item.quantity}`
    ).join('\n');
    
    return `
📋 颖蕾湖笔订单确认

👤 客户信息：
姓名：${orderData.customerName}
电话：${orderData.customerPhone}
${orderData.wechatId ? `微信：${orderData.wechatId}` : ''}

📦 收货地址：
${orderData.province} ${orderData.city}
${orderData.address}
${orderData.postalCode ? `邮编：${orderData.postalCode}` : ''}

🚚 配送方式：${orderData.deliveryMethod === 'express' ? '快递配送（全国包邮）' : '上门自取（湖州善琏镇）'}

🛒 商品清单：
${itemsList}

💰 订单总计：¥${orderData.total}

📝 备注：${orderData.orderNotes || '无'}

📅 下单时间：${orderData.orderTime}

---
请添加微信 sxy9589（沈雪英）确认订单
颖蕾湖笔 - 四十年匠心传承
    `.trim();
}

// 显示订单确认
function showOrderConfirmation(orderSummary) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            text-align: center;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        ">
            <h2 style="color: #8B4513; margin-bottom: 20px;">✅ 订单提交成功！</h2>
            <div style="
                background: #f8f4f0;
                padding: 20px;
                border-radius: 15px;
                margin: 20px 0;
                border-left: 5px solid #8B4513;
                text-align: left;
                white-space: pre-line;
                font-family: monospace;
                font-size: 14px;
                line-height: 1.6;
            ">${orderSummary}</div>
            
            <div style="
                background: linear-gradient(135deg, #1aad19, #2dc653);
                color: white;
                padding: 20px;
                border-radius: 15px;
                margin: 20px 0;
                text-align: center;
                box-shadow: 0 10px 30px rgba(26, 173, 25, 0.3);
            ">
                <h3 style="margin-top: 0;">💬 下一步：添加微信确认订单</h3>
                <p style="margin: 10px 0;"><strong>微信号：sxy9589</strong></p>
                <p style="margin: 10px 0;"><strong>联系人：沈雪英</strong></p>
                <p style="margin: 10px 0; font-size: 14px;">请将以上订单信息发送给我们，我们会为您确认订单详情</p>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px;">
                <button onclick="copyOrderInfo()" style="
                    background: linear-gradient(45deg, #8B4513, #D2691E);
                    color: white;
                    border: none;
                    padding: 15px 25px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: bold;
                ">📋 复制订单信息</button>
                <button onclick="closeOrderConfirmation()" style="
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 15px 25px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: bold;
                ">关闭</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 存储订单信息以供复制
    window.currentOrderSummary = orderSummary;
    
    // 点击外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// 复制订单信息
function copyOrderInfo() {
    if (window.currentOrderSummary) {
        navigator.clipboard.writeText(window.currentOrderSummary).then(() => {
            alert('订单信息已复制到剪贴板！\n请打开微信，添加 sxy9589（沈雪英），并将订单信息发送给我们。');
        }).catch(() => {
            // 备用复制方法
            const textArea = document.createElement('textarea');
            textArea.value = window.currentOrderSummary;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('订单信息已复制到剪贴板！\n请打开微信，添加 sxy9589（沈雪英），并将订单信息发送给我们。');
        });
    }
}

// 关闭订单确认
function closeOrderConfirmation() {
    const modals = document.querySelectorAll('.checkout-modal, [style*="position: fixed"]');
    modals.forEach(modal => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    });
}

// 滚动到产品区域
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 初始化事件监听器
function initializeEventListeners() {
    // 产品过滤按钮事件
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterProducts(e.target.dataset.filter);
        });
    });

    // 移动端菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // 点击菜单项后关闭移动端菜单
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // 点击菜单外部关闭菜单
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // 购物车按钮事件
    document.querySelector('.cart-icon').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('cart-sidebar').classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // 关闭购物车按钮事件
    document.querySelector('.close-cart').addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // 点击购物车外部关闭
    document.getElementById('cart-sidebar').addEventListener('click', (e) => {
        if (e.target.id === 'cart-sidebar') {
            document.getElementById('cart-sidebar').classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 联系表单提交事件
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showCartMessage('感谢您的留言！我们会尽快回复您。', 'success');
        e.target.reset();
    });

    // 滚动事件
    window.addEventListener('scroll', () => {
        toggleBackToTop();
        updateActiveNavigation();
    });

    // 结算按钮事件
    document.querySelector('.checkout-btn').addEventListener('click', openCheckout);

    // 复制订单信息按钮事件
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('copy-order-btn')) {
            copyOrderInfo();
        }
    });

    // 窗口大小改变事件 - 移动端适配
    window.addEventListener('resize', () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth > 768) {
            // 桌面端时清除移动端菜单状态
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
        
        // 调整购物车宽度
        const cartSidebar = document.getElementById('cart-sidebar');
        if (window.innerWidth <= 480) {
            cartSidebar.style.width = '100%';
        } else {
            cartSidebar.style.width = '400px';
        }
    });

    // 触摸事件优化 - 移动端
    if ('ontouchstart' in window) {
        // 为触摸设备添加活跃状态类
        document.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('cta-button') || 
                e.target.classList.contains('filter-btn') || 
                e.target.classList.contains('add-to-cart')) {
                e.target.classList.add('touch-active');
            }
        });
        
        document.addEventListener('touchend', (e) => {
            setTimeout(() => {
                document.querySelectorAll('.touch-active').forEach(el => {
                    el.classList.remove('touch-active');
                });
            }, 150);
        });
    }

    // 防止iOS Safari页面弹跳
    document.addEventListener('touchmove', (e) => {
        if (e.target.closest('.cart-sidebar') || e.target.closest('.nav-menu.active')) {
            // 允许购物车和菜单内部滚动
            return;
        }
        
        // 防止页面整体滚动时的弹跳
        if (document.body.classList.contains('menu-open')) {
            e.preventDefault();
        }
    }, { passive: false });
}

// 搜索功能（可扩展）
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// 产品排序功能（可扩展）
function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // 默认排序
            break;
    }
    
    displayProducts(sortedProducts);
}

// 滚到毛笔文化区域
function scrollToBrushKnowledge() {
    const brushKnowledgeSection = document.getElementById('brush-knowledge');
    if (brushKnowledgeSection) {
        brushKnowledgeSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 返回顶部函数
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 显示/隐藏返回顶部按钮
function toggleBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

// 导航高亮当前区域
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

// 页面加载动画
function showPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-brush">🖌️</div>
            <div class="loader-text">颖蕾湖笔</div>
            <div class="loader-subtext">四十年匠心传承</div>
        </div>
    `;
    document.body.appendChild(loader);
    
    // 2秒后隐藏加载动画
    setTimeout(() => {
        loader.classList.add('hide');
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }, 1500);
}

// 图片懒加载
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

// 动画效果增强
function addAnimationEffects() {
    // 观察器，用于触发动画
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
    
    // 为所有需要动画的元素添加观察器
    const animatedElements = document.querySelectorAll('.feature, .product-card, .about-text, .contact-item, .knowledge-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 页面加载完成后添加动画效果
window.addEventListener('load', () => {
    addAnimationEffects();
});

// 滚动事件监听
window.addEventListener('scroll', () => {
    toggleBackToTop();
    updateActiveNavigation();
    
    // 导航栏效果
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(248, 244, 240, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(139, 69, 19, 0.2)';
    } else {
        navbar.style.background = 'rgba(248, 244, 240, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(139, 69, 19, 0.15)';
    }
});

// 导出函数供HTML调用
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.scrollToProducts = scrollToProducts;
window.scrollToBrushKnowledge = scrollToBrushKnowledge;
window.filterProducts = filterProducts;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.submitOrder = submitOrder;
window.copyOrderInfo = copyOrderInfo;
window.closeOrderConfirmation = closeOrderConfirmation;
window.scrollToTop = scrollToTop; 