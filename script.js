let cartItems = [];
let cartCount = 0;

function addToCart(id, name, price) {
    const existingItem = cartItems.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    cartCount++;
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').textContent = cartCount;
    
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    
    let total = 0;
    
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>${item.name} x${item.quantity}</span>
                <span>฿${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price * item.quantity;
    });
    
    document.getElementById('total-amount').textContent = total.toFixed(2);
}

function toggleCart() {
    const cart = document.getElementById('cart-sidebar');
    cart.classList.toggle('active');
}

function checkout() {
    if (cartItems.length === 0) {
        alert('กรุณาเลือกสินค้าก่อนชำระเงิน');
        return;
    }
    alert('ขอบคุณสำหรับการสั่งซื้อ!');
    cartItems = [];
    cartCount = 0;
    updateCart();
    toggleCart();
}
