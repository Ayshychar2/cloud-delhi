// assets/js/whatsapp.js

// Dynamically inject the WhatsApp Widget HTML on page load
function injectWhatsAppWidget() {
    if (document.getElementById('whatsapp-widget-container')) return;

    const widgetWrap = document.createElement('div');
    widgetWrap.id = 'whatsapp-widget-container';
    widgetWrap.className = 'wa-widget-wrapper';
    
    // SVG markup for WhatsApp logo
    const waIconSvg = `
        <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.248 5.308 0 11.783 0c3.136.001 6.086 1.22 8.3 3.434s3.428 5.166 3.426 8.3c-.004 6.533-5.25 11.78-11.728 11.78-2.001-.001-3.97-.51-5.789-1.48L0 24zm6.59-4.846c1.785 1.059 3.55 1.587 5.143 1.588 5.4 0 9.79-4.39 9.794-9.794.002-2.614-1.013-5.074-2.865-6.928C16.828 2.164 14.36 1.139 11.786 1.14c-5.398 0-9.785 4.39-9.79 9.789-.001 1.705.474 3.376 1.376 4.86L2.34 21.68l6.307-1.656.001-.001-.001.001.001-.001zM17.18 14.36c-.297-.15-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
    `;

    widgetWrap.innerHTML = `
        <!-- Dynamic Chat Window -->
        <div class="wa-chat-box" id="wa-chat-box">
            <div class="wa-chat-header">
                <div class="wa-avatar">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjFOtc5FyjgU-AFF9egACx_rDkIIRAf3paNzATwkL0bMjisRq_WyrjuB--yI8NgCb0Lc8ugx5OasutezJ_u0OsZ-pDIzXc-j_eQ4GcP0HPySYoQ_Lk-7ej6IH8mIMaZTlXMHxgzsT_ac-C1VDdsXsaHvg7dARPeS75fkg4L3ID-JGynZBTxuFTKGB03fuq2FZLh0INU8u-Js2FvgeFGRjX9Lzng5cJqhvunUIXLYqBRyqzCI6GlVYSYFs8D4j-M4P7y070izLJZkQ" alt="Chef Vikram">
                </div>
                <div class="wa-status-info">
                    <span class="wa-chef-name">Delhi Delights Support</span>
                    <span class="wa-status-lbl">
                        <span class="wa-status-dot"></span> Online (replies in mins)
                    </span>
                </div>
                <button class="wa-close-btn" onclick="toggleWhatsAppChat()">&times;</button>
            </div>
            
            <div class="wa-chat-body">
                <div class="wa-msg-bubble">
                    Namaste! 🙏 Welcome to Delhi Delights. 🍲 Want to place a custom order, check delivery status, or need party catering? Let's chat!
                    <div class="wa-msg-time">${getCurrentTimeStr()}</div>
                </div>
            </div>
            
            <div class="wa-chat-footer">
                <input type="text" class="wa-chat-input" id="wa-chat-input" placeholder="Type a message..." onkeypress="handleWaEnter(event)">
                <button class="wa-send-btn" onclick="sendWhatsAppCustomMsg()">
                    <span class="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>

        <!-- Float WhatsApp Button -->
        <button class="wa-float-btn" id="wa-float-btn" onclick="toggleWhatsAppChat()">
            ${waIconSvg}
        </button>
    `;

    document.body.appendChild(widgetWrap);
}

// Get standard hour:minute string for message bubbles
function getCurrentTimeStr() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
}

// Toggle Chatbox Open/Closed
function toggleWhatsAppChat() {
    const chatBox = document.getElementById('wa-chat-box');
    if (chatBox) {
        chatBox.classList.toggle('open');
    }
}

// Handle Enter Key in input
function handleWaEnter(event) {
    if (event.key === 'Enter') {
        sendWhatsAppCustomMsg();
    }
}

// Redirect typed message to WhatsApp
function sendWhatsAppCustomMsg() {
    const input = document.getElementById('wa-chat-input');
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    const phone = "919999999999"; // Custom WhatsApp number
    const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    // Clear input and close chat box
    input.value = '';
    toggleWhatsAppChat();
    
    window.open(waUrl, '_blank');
}

// Trigger Injection on load
window.addEventListener('load', injectWhatsAppWidget);
