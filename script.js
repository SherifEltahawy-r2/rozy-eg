"use strict";

const $ = selector => document.querySelector(selector);

const translations = {
  en: {
    home: "Home",
    shop: "Shop",
    story: "Our story",
    support: "Chat & support",
    supportTitle: "Technical support",
    supportIntro: "Your conversation is private and visible only to you and the store team.",
    supportSignIn: "Sign in to contact technical support.",
    supportPurchasersOnly: "Technical support chat is available to customers who have placed an order.",
    supportAdminIntro: "Select a customer conversation to review and reply.",
    supportNoConversations: "There are no customer conversations yet.",
    supportNoMessages: "Start your private conversation with the store team.",
    supportReply: "Write your message",
    supportSend: "Send message",
    supportCustomer: "Customer",
    supportTeam: "Store support",
    supportBack: "All conversations",
    supportLoading: "Loading support…",
    supportMessageError: "Messages must contain between 1 and 2000 characters.",
    supportSchemaMissing: "Support database is not set up yet. Run the updated supabase-schema.sql in Supabase SQL Editor.",
    cart: "Cart",
    login: "Login",
    footer: "Made with love, wrapped in rose gold.",
    rights: "All rights reserved to",
    install: "Install app",
    backendSetup: "Complete Supabase setup before using accounts or orders.",
    accountRequired: "Please sign in before ordering.",
    address: "Delivery address",
    placeOrder: "Send order",
    orderDetails: "Order details",
    orderNo: "Order",
    status: "Status",
    customer: "Customer",
    settings: "Store settings",
    instagram: "Instagram URL",
    tiktok: "TikTok URL",
    facebook: "Facebook URL",
    storePhone: "Store phone number",
    backgroundImage: "Background image URL",
    saveSettings: "Save settings",
    inviteAdmin: "Invite manager by email",
    invite: "Send invitation",
    invited: "Invited managers",
    pending: "Pending",
    confirmed: "Confirmed",
    shipped: "Shipped",
    delivered: "Delivered",
    cancelled: "Cancelled",
    maxQuantity: "A maximum of 99 of each item can be ordered.",
    imageUpload: "Or upload an image",
    imageHelp: "Image file or public image URL",
    noOrders: "No orders yet.",
    noManagers: "No manager invitations yet.",
    noSocial: "Add the store's social links in the admin dashboard.",
    title: "Little treasures, made to sparkle.",
    intro: "Discover delicate accessories for life's sweetest moments.",
    explore: "Explore collection",
    storyTitle: "A little love in every detail",
    add: "Add to bag",
    details: "Details",
    empty: "Your bag is waiting for something lovely.",
    checkout: "Place order",
    total: "Total",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    register: "Create account",
    haveAccount: "Already have an account? Login",
    noAccount: "New here? Create an account",
    remove: "Remove",
    success: "Order placed — thank you!",
    loginFirst: "Please log in to shop.",
    admin: "Admin dashboard",
    adminAccess: "Sign in with a manager account to access this page.",
    orders: "Orders",
    products: "Products",
    save: "Save product",
    updateProduct: "Update product",
    editProduct: "Edit product",
    cancelEdit: "Cancel edit",
    productNameEnglish: "Name in English",
    productNameArabic: "Name in Arabic",
    category: "Category",
    price: "Price in EGP",
    manageAdmins: "Manage administrators",
    dark: "Switch to dark mode",
    light: "Switch to light mode"
  },
  ar: {
    home: "الرئيسية",
    shop: "تسوقي",
    story: "قصتنا",
    support: "الدردشة والدعم الفني",
    supportTitle: "الدردشة والدعم الفني",
    supportIntro: "محادثتك خاصة ولا يراها إلا أنت وفريق المتجر.",
    supportSignIn: "سجّل الدخول للتواصل مع الدعم الفني.",
    supportPurchasersOnly: "الدردشة متاحة للعملاء الذين سبق لهم تقديم طلب شراء.",
    supportAdminIntro: "اختر محادثة أحد العملاء لمراجعتها والرد عليه.",
    supportNoConversations: "لا توجد محادثات عملاء حتى الآن.",
    supportNoMessages: "ابدأ محادثتك الخاصة مع فريق المتجر.",
    supportReply: "اكتب رسالتك",
    supportSend: "إرسال الرسالة",
    supportCustomer: "العميل",
    supportTeam: "دعم المتجر",
    supportBack: "كل المحادثات",
    supportLoading: "جارٍ تحميل الدعم...",
    supportMessageError: "يجب أن تتراوح الرسالة بين حرف واحد و2000 حرف.",
    supportSchemaMissing: "قاعدة بيانات الدعم غير مفعّلة بعد. شغّل ملف supabase-schema.sql المحدّث في SQL Editor داخل Supabase.",
    cart: "السلة",
    login: "دخول",
    footer: "صُنعت بحب، وزُيّنت بالذهب الوردي.",
    rights: "جميع الحقوق محفوظة لدى",
    install: "تثبيت التطبيق",
    backendSetup: "أكمل إعداد Supabase قبل استخدام الحسابات أو الطلبات.",
    accountRequired: "سجّلي الدخول قبل إتمام الطلب.",
    address: "عنوان التوصيل بالتفصيل",
    placeOrder: "إرسال الطلب",
    orderDetails: "تفاصيل الطلب",
    orderNo: "الطلب",
    status: "الحالة",
    customer: "العميل",
    settings: "إعدادات المتجر",
    instagram: "رابط إنستغرام",
    tiktok: "رابط تيك توك",
    facebook: "رابط فيسبوك",
    storePhone: "رقم هاتف المتجر",
    backgroundImage: "رابط صورة الخلفية",
    saveSettings: "حفظ الإعدادات",
    inviteAdmin: "دعوة مسؤول عبر البريد الإلكتروني",
    invite: "إرسال الدعوة",
    invited: "المسؤولون المدعوون",
    pending: "قيد الانتظار",
    confirmed: "تم التأكيد",
    shipped: "تم الشحن",
    delivered: "تم التوصيل",
    cancelled: "ملغي",
    maxQuantity: "الحد الأقصى ٩٩ قطعة من كل منتج.",
    imageUpload: "أو ارفع صورة",
    imageHelp: "ملف صورة أو رابط صورة مباشر",
    noOrders: "لا توجد طلبات بعد.",
    noManagers: "لا توجد دعوات لمسؤولين بعد.",
    noSocial: "أضيفي روابط التواصل من لوحة المسؤول.",
    title: "كنوز صغيرة تتلألأ.",
    intro: "اكتشفي إكسسوارات رقيقة لأجمل لحظات الحياة.",
    explore: "اكتشفي المجموعة",
    storyTitle: "حب صغير في كل تفصيلة",
    add: "أضيفي للسلة",
    details: "التفاصيل",
    empty: "سلتك تنتظر شيئًا جميلًا.",
    checkout: "تأكيد الطلب",
    total: "الإجمالي",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    password: "كلمة المرور",
    register: "إنشاء حساب",
    haveAccount: "لديك حساب؟ سجّلي الدخول",
    noAccount: "مستخدمة جديدة؟ أنشئي حسابًا",
    remove: "حذف",
    success: "تم الطلب — شكرًا لك!",
    loginFirst: "سجّلي الدخول للشراء.",
    admin: "لوحة الإدارة",
    adminAccess: "سجّلي الدخول بحساب مسؤول للوصول إلى هذه الصفحة.",
    orders: "الطلبات",
    products: "المنتجات",
    save: "حفظ المنتج",
    updateProduct: "تحديث المنتج",
    editProduct: "تعديل المنتج",
    cancelEdit: "إلغاء التعديل",
    productNameEnglish: "اسم المنتج بالإنجليزية",
    productNameArabic: "اسم المنتج بالعربية",
    category: "الفئة",
    price: "السعر بالجنيه",
    manageAdmins: "إدارة المسؤولين",
    dark: "تفعيل الوضع الداكن",
    light: "تفعيل الوضع الفاتح"
  }
};

let language = localStorage.getItem("rozy-language") || "ar";
const supabaseConfig = window.ROZY_CONFIG || {};
const supabaseClient = window.supabase && supabaseConfig.supabaseUrl && supabaseConfig.supabaseAnonKey
  ? window.supabase.createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseAnonKey)
  : null;

let currentUser = null;
let profile = null;
let canUseSupportChat = false;
let cart = readJSON("rozy-cart", []);
let products = [
  {
    id: 1,
    en: "Rose Pearl Necklace",
    ar: "قلادة لؤلؤ وردية",
    cat: "Necklaces",
    price: 850,
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    en: "Golden Bloom Ring",
    ar: "خاتم الزهرة الذهبية",
    cat: "Rings",
    price: 620,
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    en: "Pearl Drop Earrings",
    ar: "أقراط اللؤلؤ",
    cat: "Earrings",
    price: 740,
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    en: "Blush Hair Crown",
    ar: "تاج شعر وردي",
    cat: "Hair accessories",
    price: 990,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"
  }
];
let storeSettings = {
  instagram_url: "",
  tiktok_url: "",
  facebook_url: "",
  phone: "",
  background_url: ""
};
let adminOrders = [];
let adminInvites = [];
let deferredInstallPrompt = null;
let editingProductId = null;
let supportSessions = [];
let supportPollTimer = null;
let supportPollRunning = false;

function readJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function text(key) {
  return translations[language][key] || key;
}

function saveData() {
  localStorage.setItem("rozy-cart", JSON.stringify(cart));
}

function formatPrice(price) {
  return `EGP ${Number(price).toLocaleString()}`;
}

function applyTheme() {
  const dark = localStorage.getItem("rozy-theme") === "dark";
  document.body.classList.toggle("dark", dark);

  const icon = $("#theme-icon");
  const button = $("#theme");

  if (icon) icon.textContent = dark ? "☀" : "☾";
  if (button) {
    button.setAttribute("aria-label", dark ? text("light") : text("dark"));
    button.title = dark ? text("light") : text("dark");
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = dark ? "#100b14" : "#fffaf9";
}

function updateHeader() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i]").forEach(element => {
    element.textContent = text(element.dataset.i);
  });

  $("#lang").textContent = language === "ar" ? "EN" : "AR";
  $("#cart-count").textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  const accountLink = $("#account-link");
  if (accountLink) {
    accountLink.textContent = currentUser
      ? (profile?.role === "admin" ? text("admin") : profile?.name || currentUser.email)
      : text("login");
  }

  const supportLink = $("#support-link");
  if (supportLink) {
    supportLink.hidden = !currentUser || (!canUseSupportChat && profile?.role !== "admin");
    supportLink.setAttribute("aria-label", text("support"));
  }

  updateSocialLinks();
  applyTheme();
}

function updateSocialLinks() {
  const container = $("#store-social");
  if (!container) return;
  container.setAttribute("aria-label", language === "ar" ? "تواصل مع المتجر" : "Contact the store");

  const links = [
    ["instagram_url", "Instagram", "IG"],
    ["tiktok_url", "TikTok", "TT"],
    ["facebook_url", "Facebook", "f"]
  ].filter(([key]) => storeSettings[key]);

  if (storeSettings.phone) links.push(["phone", text("storePhone"), "☎"]);

  container.innerHTML = links.map(([key, label, icon]) => {
    const href = key === "phone"
      ? `tel:${escapeAttribute(storeSettings.phone.replace(/[^\d+]/g, ""))}`
      : escapeAttribute(storeSettings[key]);
    const external = key === "phone" ? "" : ' target="_blank" rel="noopener noreferrer"';
    return `<a href="${href}" aria-label="${escapeAttribute(label)}" title="${escapeAttribute(label)}"${external}>${icon}</a>`;
  }).join("");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2500);
}

function productCard(product) {
  const name = product[language] || product.en;

  return `
    <article class="product">
      <img src="${escapeAttribute(product.img)}" alt="${escapeAttribute(name)}" loading="lazy">
      <div class="product-info">
        <h3>${escapeHTML(name)}</h3>
        <div class="muted">${escapeHTML(product.cat)}</div>
        <div class="price">${formatPrice(product.price)}</div>
        <div class="product-actions">
          <button class="button alt" type="button" data-action="detail" data-id="${product.id}">
            ${text("details")}
          </button>
          <button class="button" type="button" data-action="add" data-id="${product.id}">
            ${text("add")}
          </button>
        </div>
      </div>
    </article>`;
}

function homeView() {
  const featured = products.slice(0, 3);

  return `
    <section class="hero">
      <div>
        <div class="eyebrow">ROZY.EG · LUXURY BOUTIQUE</div>
        <h1>${text("title")}</h1>
        <p>${text("intro")}</p>
        <a class="button" href="#shop">${text("explore")} ✦</a>
      </div>

      <div class="hero-art">
        <span class="spark s1">✦</span>
        <span class="spark s2">❀</span>
        <span class="spark s3">✧</span>
        <img src="${escapeAttribute(products[0]?.img || "")}" alt="ROZY.EG collection">
      </div>
    </section>

    <section class="content">
      <h2 class="section-title">${text("shop")}</h2>
      <p class="sub">A little sparkle for every day ✦</p>
      <div class="grid">${featured.map(productCard).join("")}</div>
    </section>

    <section class="content" id="story">
      <div class="story">
        <h2>${text("storyTitle")}</h2>
        <p>تفاصيل ناعمة، ولمعة خالدة، ولمسة من الرومانسية — اختيرت بمحبة لتناسبك.</p>
      </div>
    </section>`;
}

function shopView() {
  return `
    <section class="content">
      <h1 class="section-title">${text("shop")}</h1>
      <p class="sub">Necklaces · Rings · Earrings · Hair accessories · Gift sets</p>
      <div class="grid">${products.map(productCard).join("")}</div>
    </section>`;
}

function productView(id) {
  const product = products.find(item => item.id === id);
  if (!product) return shopView();

  const name = product[language] || product.en;

  return `
    <section class="panel">
      <div class="row">
        <img src="${escapeAttribute(product.img)}" alt="${escapeAttribute(name)}">
        <h1>${escapeHTML(name)}</h1>
        <span class="price">${formatPrice(product.price)}</span>
      </div>
      <p class="muted">${escapeHTML(product.cat)} · لمسة أنيقة لمناسباتك الجميلة.</p>
      <button class="button" type="button" data-action="add" data-id="${product.id}">
        ${text("add")}
      </button>
      <a class="button alt" href="#shop">${text("shop")}</a>
    </section>`;
}

function cartView() {
  const rows = cart.map(item => {
    const product = products.find(entry => entry.id === item.id);
    if (!product) return "";

    const name = product[language] || product.en;

    return `
      <div class="row">
        <img src="${escapeAttribute(product.img)}" alt="${escapeAttribute(name)}">
        <div>
          <b>${escapeHTML(name)}</b>
          <div class="price">${formatPrice(product.price)}</div>
        </div>
        <div class="qty">
          <button type="button" data-action="quantity" data-id="${item.id}" data-change="-1">−</button>
          <span>${item.qty}</span>
          <button type="button" data-action="quantity" data-id="${item.id}" data-change="1">+</button>
        </div>
        <button type="button" data-action="remove" data-id="${item.id}">${text("remove")}</button>
      </div>`;
  }).join("");

  const total = cart.reduce((sum, item) => {
    const product = products.find(entry => entry.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  return `
    <section class="panel">
      <h1>${text("cart")}</h1>
      ${rows || `<p>${text("empty")}</p>`}
      ${cart.length ? `
        <div class="row"><b>${text("total")}</b><b>${formatPrice(total)}</b></div>
        ${currentUser ? `
          <h2>${text("orderDetails")}</h2>
          <form class="form" id="order-form">
            <input name="name" value="${escapeAttribute(profile?.name || "")}" autocomplete="name" placeholder="${text("name")}" required>
            <input name="phone" type="tel" value="${escapeAttribute(profile?.phone || "")}" autocomplete="tel" placeholder="${text("phone")}" required>
            <textarea name="address" autocomplete="street-address" placeholder="${text("address")}" required></textarea>
            <button class="button" type="submit">${text("placeOrder")}</button>
          </form>
        ` : `<p>${text("accountRequired")} <a href="#account">${text("login")}</a></p>`}
        ${!supabaseClient ? `<p class="setup-notice">${text("backendSetup")}</p>` : ""}
      ` : ""}
    </section>`;
}

function accountView() {
  if (currentUser) {
    return `
      <section class="panel">
        <h1>${profile?.role === "admin" ? text("admin") : escapeHTML(profile?.name || currentUser.email)}</h1>
        <p>${escapeHTML(currentUser.email)}</p>
        <button class="button" type="button" data-action="logout">${text("logout") || "تسجيل الخروج"}</button>
        ${(profile?.role === "admin" || canUseSupportChat)
          ? `<p><a class="button alt" href="#support">${text("support")}</a></p>`
          : ""}
        ${profile?.role === "admin" ? `<p><a class="button alt" href="#admin">${text("admin")}</a></p>` : ""}
      </section>`;
  }

  return `
    <section class="panel">
      <h1>${text("login")}</h1>
      ${!supabaseClient ? `<p class="setup-notice">${text("backendSetup")}</p>` : ""}
      <form class="form" id="login-form">
        <input name="email" type="email" placeholder="${text("email")}" autocomplete="email" required>
        <input name="password" type="password" placeholder="${text("password")}" autocomplete="current-password" required>
        <button class="button" type="submit">${text("login")}</button>
      </form>
      <p><a href="#register">${text("noAccount")}</a></p>
    </section>`;
}

function registerView() {
  return `
    <section class="panel">
      <h1>${text("register")}</h1>
      ${!supabaseClient ? `<p class="setup-notice">${text("backendSetup")}</p>` : ""}
      <form class="form" id="register-form">
        <input name="name" placeholder="${text("name")}" autocomplete="name" required>
        <input name="email" type="email" placeholder="${text("email")}" autocomplete="email" required>
        <input name="phone" type="tel" placeholder="${text("phone")}" autocomplete="tel" required>
        <input name="password" type="password" placeholder="${text("password")}" autocomplete="new-password" minlength="8" required>
        <button class="button" type="submit">${text("register")}</button>
      </form>
      <p><a href="#account">${text("haveAccount")}</a></p>
    </section>`;
}

function adminView() {
  const statuses = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];
  const editingProduct = products.find(product => product.id === editingProductId);

  return `
    <section class="content">
    <h1 class="section-title">${text("admin")}</h1>

    <h2>${text("orders")}</h2>
    <div class="admin-orders">
      ${adminOrders.map(order => `
        <article class="admin-order">
          <div class="row">
            <strong>${text("orderNo")} · ${escapeHTML(order.id.slice(0, 8))}</strong>
            <select data-action="order-status" data-id="${escapeAttribute(order.id)}" aria-label="${text("status")}">
              ${statuses.map(status =>
                `<option value="${status}" ${order.status === status ? "selected" : ""}>${text(status.toLowerCase())}</option>`
              ).join("")}
            </select>
          </div>
          <p><b>${text("customer")}:</b> ${escapeHTML(order.customer_name)} · ${escapeHTML(order.email)}</p>
          <p><b>${text("phone")}:</b> <a href="tel:${escapeAttribute(order.phone)}">${escapeHTML(order.phone)}</a></p>
          <p><b>${text("address")}:</b> ${escapeHTML(order.address)}</p>
          <ul>${(order.items || []).map(item => `
            <li>${escapeHTML(item[language === "ar" ? "ar" : "en"] || item.en)} × ${Number(item.qty)} — ${formatPrice(item.price)}</li>
          `).join("")}</ul>
          <strong>${text("total")}: ${formatPrice(order.total)}</strong>
        </article>
      `).join("") || `<p>${text("noOrders")}</p>`}
    </div>

    <h2>${text("products")}</h2>
    <form class="form" id="product-form">
      <input name="id" type="hidden" value="${editingProduct ? escapeAttribute(editingProduct.id) : ""}">
      <input name="en" value="${escapeAttribute(editingProduct?.en || "")}" placeholder="${text("productNameEnglish")}" required>
      <input name="ar" value="${escapeAttribute(editingProduct?.ar || "")}" placeholder="${text("productNameArabic")}" required>
      <input name="cat" value="${escapeAttribute(editingProduct?.cat || "")}" placeholder="${text("category")}" required>
      <input name="price" type="number" min="1" value="${editingProduct?.price || ""}" placeholder="${text("price")}" required>
      <input name="img" type="text" inputmode="url" value="${escapeAttribute(editingProduct?.img || "")}" placeholder="${text("imageHelp")}">
      <label>${text("imageUpload")} <input name="image_file" type="file" accept="image/*"></label>
      <button class="button" type="submit">${text(editingProduct ? "updateProduct" : "save")}</button>
      ${editingProduct ? `<button class="button alt" type="button" data-action="cancel-edit">${text("cancelEdit")}</button>` : ""}
    </form>

    <div class="grid">
      ${products.map(product => `
        <div class="row">
          <img src="${escapeAttribute(product.img)}" alt="">
          <span>${escapeHTML(product.en)} · ${formatPrice(product.price)}</span>
          <button type="button" data-action="edit-product" data-id="${product.id}">${text("editProduct")}</button>
          <button type="button" data-action="delete-product" data-id="${product.id}">${text("remove")}</button>
        </div>
      `).join("")}
    </div>

    <h2>${text("settings")}</h2>
    <form class="form" id="settings-form">
      <input name="instagram_url" type="url" value="${escapeAttribute(storeSettings.instagram_url)}" placeholder="${text("instagram")}">
      <input name="tiktok_url" type="url" value="${escapeAttribute(storeSettings.tiktok_url)}" placeholder="${text("tiktok")}">
      <input name="facebook_url" type="url" value="${escapeAttribute(storeSettings.facebook_url)}" placeholder="${text("facebook")}">
      <input name="phone" type="tel" value="${escapeAttribute(storeSettings.phone)}" placeholder="${text("storePhone")}">
      <input name="background_url" type="text" inputmode="url" value="${escapeAttribute(storeSettings.background_url)}" placeholder="${text("backgroundImage")}">
      <label>${text("imageUpload")} <input name="background_file" type="file" accept="image/*"></label>
      <button class="button" type="submit">${text("saveSettings")}</button>
    </form>

    <p><a class="button alt" href="#admin-managers">${text("manageAdmins")}</a></p>
    </section>`;
}

function adminManagersView() {
  return `
    <section class="panel">
      <a href="#admin">${text("admin")}</a>
      <h1>${text("manageAdmins")}</h1>
      <form class="form" id="invite-form">
        <input name="email" type="email" placeholder="${text("inviteAdmin")}" required>
        <button class="button" type="submit">${text("invite")}</button>
      </form>
      <h2>${text("invited")}</h2>
      ${adminInvites.map(invite => `
        <div class="row">
          <span>${escapeHTML(invite.email)} · ${invite.accepted_at ? text("admin") : text("pending")}</span>
          ${!invite.accepted_at ? `<button type="button" data-action="remove-invite" data-email="${escapeAttribute(invite.email)}">${text("remove")}</button>` : ""}
        </div>
      `).join("") || `<p>${text("noManagers")}</p>`}
    </section>`;
}

function supportInboxView() {
  return `
    <section class="panel">
      <h1>${text("supportTitle")}</h1>
      <p class="muted">${text("supportAdminIntro")}</p>
      <div id="support-inbox">${supportInboxItems()}</div>
    </section>`;
}

function supportInboxItems() {
  return supportSessions.map(session => {
    const customer = session.customer;
    const name = customer?.name || customer?.email || text("supportCustomer");
    return `
      <div class="chat-customer">
        <p><strong>${escapeHTML(name)}</strong><br><span class="muted">${escapeHTML(customer?.email || "")}</span></p>
        <a class="button alt" href="#support-chat-${escapeAttribute(session.id)}">${text("supportTitle")}</a>
      </div>`;
  }).join("") || `<p>${text("supportNoConversations")}</p>`;
}

function supportMessagesView(messages) {
  return messages.map(message => {
    const mine = message.sender_id === currentUser.id;
    const sender = mine
      ? (profile?.role === "admin" ? text("supportTeam") : text("supportCustomer"))
      : (profile?.role === "admin" ? text("supportCustomer") : text("supportTeam"));
    const time = new Date(message.created_at).toLocaleString(language === "ar" ? "ar-EG" : "en", {
      dateStyle: "short",
      timeStyle: "short"
    });
    return `
      <article class="chat-message ${mine ? "mine" : "theirs"}">
        <p>${escapeHTML(message.body)}</p>
        <time>${escapeHTML(sender)} · ${escapeHTML(time)}</time>
      </article>`;
  }).join("") || `<p class="muted">${text("supportNoMessages")}</p>`;
}

function supportConversationView(session, messages) {
  const customer = session.customer;
  const title = profile?.role === "admin"
    ? (customer?.name || customer?.email || text("supportCustomer"))
    : text("supportTitle");
  const backHref = profile?.role === "admin" ? "#support" : "#shop";

  return `
    <section class="panel chat-layout">
      <div class="chat-customer">
        <div>
          <h1>${escapeHTML(title)}</h1>
          <p class="muted">${text("supportIntro")}</p>
        </div>
        ${profile?.role === "admin" && customer?.email
          ? `<a href="mailto:${escapeAttribute(customer.email)}">${escapeHTML(customer.email)}</a>`
          : ""}
        <a class="button alt" href="${backHref}">${profile?.role === "admin" ? text("supportBack") : text("shop")}</a>
      </div>
      <div class="chat-window">
        <div class="chat-messages" id="support-messages" aria-live="polite">
          ${supportMessagesView(messages)}
        </div>
        <form class="chat-form" id="support-message-form" data-session-id="${escapeAttribute(session.id)}">
          <textarea name="body" maxlength="2000" rows="2" placeholder="${text("supportReply")}" required></textarea>
          <button class="button" type="submit">${text("supportSend")}</button>
        </form>
      </div>
    </section>`;
}

function renderSupportRoute(route, app) {
  stopSupportPolling();

  if (!currentUser) {
    app.innerHTML = `
      <section class="panel">
        <h1>${text("supportTitle")}</h1>
        <p>${text("supportSignIn")}</p>
        <a class="button" href="#account">${text("login")}</a>
      </section>`;
    return;
  }

  const isAdmin = profile?.role === "admin";
  if (!isAdmin && !canUseSupportChat) {
    app.innerHTML = `<section class="panel"><h1>${text("supportTitle")}</h1><p>${text("supportPurchasersOnly")}</p></section>`;
    return;
  }

  app.innerHTML = `<section class="panel"><p>${text("supportLoading")}</p></section>`;
  runSafely(async () => {
    if (isAdmin && route === "support") {
      await loadSupportSessions();
      if (location.hash.slice(1) !== route) return;
      app.innerHTML = supportInboxView();
      startSupportPolling(route);
      return;
    }

    const session = isAdmin
      ? await loadSupportSession(route.slice("support-chat-".length))
      : await ensureCustomerSupportSession();
    if (!session) throw new Error(text("supportPurchasersOnly"));

    if (!isAdmin && route !== `support-chat-${session.id}`) {
      location.hash = `support-chat-${session.id}`;
      return;
    }
    if (location.hash.slice(1) !== route) return;

    const messages = await loadSupportMessages(session.id);
    app.innerHTML = supportConversationView(session, messages);
    scrollSupportMessagesToBottom();
    startSupportPolling(route);
  }, "Loading technical support");
}

async function ensureCustomerSupportSession() {
  if (!supabaseClient || !currentUser || !canUseSupportChat || profile?.role === "admin") {
    throw new Error(text("supportPurchasersOnly"));
  }

  const { data: existing, error: lookupError } = await supabaseClient
    .from("support_sessions")
    .select("id, user_id, updated_at")
    .eq("user_id", currentUser.id)
    .maybeSingle();
  if (lookupError) throw lookupError;
  if (existing) return existing;

  const { data, error } = await supabaseClient
    .from("support_sessions")
    .insert({ user_id: currentUser.id })
    .select("id, user_id, updated_at")
    .single();
  if (error) throw error;
  return data;
}

async function loadSupportSession(sessionId) {
  const { data, error } = await supabaseClient
    .from("support_sessions")
    .select("id, user_id, updated_at")
    .eq("id", sessionId)
    .maybeSingle();
  if (error) throw error;
  if (!data || (profile?.role !== "admin" && data.user_id !== currentUser.id)) return null;

  const { data: customer, error: profileError } = await supabaseClient
    .from("profiles")
    .select("name, email")
    .eq("id", data.user_id)
    .maybeSingle();
  if (profileError) throw profileError;
  return { ...data, customer };
}

async function loadSupportMessages(sessionId) {
  const { data, error } = await supabaseClient
    .from("support_messages")
    .select("id, sender_id, body, created_at")
    .eq("session_id", sessionId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data;
}

async function loadSupportSessions() {
  if (profile?.role !== "admin") throw new Error(text("supportPurchasersOnly"));

  const { data, error } = await supabaseClient
    .from("support_sessions")
    .select("id, user_id, updated_at")
    .order("updated_at", { ascending: false });
  if (error) throw error;

  const userIds = [...new Set(data.map(session => session.user_id))];
  const customers = userIds.length
    ? await supabaseClient.from("profiles").select("id, name, email").in("id", userIds)
    : { data: [], error: null };
  if (customers.error) throw customers.error;

  const profileById = new Map(customers.data.map(customer => [customer.id, customer]));
  supportSessions = data.map(session => ({ ...session, customer: profileById.get(session.user_id) }));
}

function scrollSupportMessagesToBottom() {
  const messages = $("#support-messages");
  if (messages) messages.scrollTop = messages.scrollHeight;
}

function startSupportPolling(route) {
  stopSupportPolling();
  supportPollTimer = window.setInterval(async () => {
    if (supportPollRunning || location.hash.slice(1) !== route) return;
    supportPollRunning = true;
    try {
      if (route === "support") {
        await loadSupportSessions();
        const inbox = $("#support-inbox");
        if (inbox && location.hash.slice(1) === route) {
          inbox.innerHTML = supportInboxItems();
        }
      } else {
        const sessionId = route.slice("support-chat-".length);
        const container = $("#support-messages");
        if (!container) return;
        const wasAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 60;
        const messages = await loadSupportMessages(sessionId);
        if (location.hash.slice(1) === route) {
          container.innerHTML = supportMessagesView(messages);
          if (wasAtBottom) scrollSupportMessagesToBottom();
        }
      }
    } catch (error) {
      reportError(error, "Refreshing technical support");
    } finally {
      supportPollRunning = false;
    }
  }, 5000);
}

function stopSupportPolling() {
  if (supportPollTimer !== null) {
    window.clearInterval(supportPollTimer);
    supportPollTimer = null;
  }
}

async function sendSupportMessage(form) {
  if (!currentUser || (!canUseSupportChat && profile?.role !== "admin")) {
    throw new Error(text("supportPurchasersOnly"));
  }

  const body = String(new FormData(form).get("body")).trim();
  if (!body || body.length > 2000) throw new Error(text("supportMessageError"));

  const { error } = await supabaseClient.from("support_messages").insert({
    session_id: form.dataset.sessionId,
    sender_id: currentUser.id,
    body
  });
  if (error) throw error;
  form.reset();

  const messages = await loadSupportMessages(form.dataset.sessionId);
  const container = $("#support-messages");
  if (container) {
    container.innerHTML = supportMessagesView(messages);
    scrollSupportMessagesToBottom();
  }
}

function render() {
  updateHeader();

  const route = location.hash.slice(1) || "home";
  if (route !== "support" && !route.startsWith("support-chat-")) stopSupportPolling();
  const app = $("#app");

  if (route === "home") app.innerHTML = homeView();
  else if (route === "shop") app.innerHTML = shopView();
  else if (route === "cart") app.innerHTML = cartView();
  else if (route === "account") app.innerHTML = accountView();
  else if (route === "register") app.innerHTML = registerView();
  else if ((route === "admin" || route === "admin-managers") && profile?.role === "admin") {
    app.innerHTML = `<section class="panel"><p>${text("orders")}…</p></section>`;
    loadAdminData()
      .then(() => {
        if (location.hash.slice(1) === route) {
          app.innerHTML = route === "admin" ? adminView() : adminManagersView();
          enableProductTilt();
        }
      })
      .catch(error => reportError(error, "Loading the admin dashboard"));
  }
  else if (route === "admin" || route === "admin-managers") {
    app.innerHTML = `<section class="panel"><h1>${text("admin")}</h1><p>${text("adminAccess")}</p><a href="#account">${text("login")}</a></section>`;
  }
  else if (route === "support" || route.startsWith("support-chat-")) renderSupportRoute(route, app);
  else if (route.startsWith("product-")) app.innerHTML = productView(Number(route.slice(8)));
  else app.innerHTML = homeView();

  enableProductTilt();
}

function addToCart(id) {
  if (!supabaseClient) {
    showToast(text("backendSetup"));
    return;
  }

  if (!currentUser) {
    showToast(text("loginFirst"));
    location.hash = "account";
    return;
  }

  const existing = cart.find(item => item.id === id);
  if (existing && existing.qty >= 99) {
    showToast(text("maxQuantity"));
    return;
  }
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });

  saveData();
  render();
  showToast("Added to your bag ✦");
}

function updateQuantity(id, change) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;

  if (change > 0 && item.qty >= 99) {
    showToast(text("maxQuantity"));
    return;
  }
  item.qty = Math.min(99, item.qty + change);
  cart = cart.filter(entry => entry.qty > 0);
  saveData();
  render();
}

async function submitOrder(form) {
  if (!supabaseClient) throw new Error(text("backendSetup"));
  if (!currentUser) throw new Error(text("accountRequired"));

  const data = new FormData(form);
  const customerName = String(data.get("name")).trim();
  const phone = String(data.get("phone")).trim();
  const address = String(data.get("address")).trim();
  if (!customerName || !phone || !address || !cart.length) return;

  const { error } = await supabaseClient.from("orders").insert({
    user_id: currentUser.id,
    customer_name: customerName,
    email: currentUser.email,
    phone,
    address,
    items: cart
  });
  if (error) throw error;

  cart = [];
  saveData();
  showToast(text("success"));
  location.hash = "shop";
}

async function handleLogin(form) {
  if (!supabaseClient) throw new Error(text("backendSetup"));

  const data = new FormData(form);
  const email = String(data.get("email")).trim().toLowerCase();
  const password = String(data.get("password"));
  const { data: result, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) throw error;
  await loadProfile(result.user);
  location.hash = "account";
  render();
}

async function handleRegister(form) {
  if (!supabaseClient) throw new Error(text("backendSetup"));

  const data = new FormData(form);
  const { data: result, error } = await supabaseClient.auth.signUp({
    email: String(data.get("email")).trim().toLowerCase(),
    password: String(data.get("password")),
    options: {
      data: {
        name: String(data.get("name")).trim(),
        phone: String(data.get("phone")).trim()
      }
    }
  });
  if (error) throw error;
  if (!result.session) {
    showToast(language === "ar" ? "تحققي من بريدك لتأكيد الحساب ثم سجّلي الدخول." : "Check your email to confirm your account, then sign in.");
    location.hash = "account";
    render();
    return;
  }

  await loadProfile(result.user);
  location.hash = "account";
  render();
}

async function loadProfile(user) {
  currentUser = user;
  profile = null;
  canUseSupportChat = false;
  if (!supabaseClient || !user) return;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, name, email, phone, role")
    .eq("id", user.id)
    .single();
  if (error) throw error;
  profile = data;
  if (profile.role === "admin") {
    canUseSupportChat = true;
    return;
  }

  const { data: supportAccess, error: supportError } = await supabaseClient.rpc("can_use_support_chat");
  if (supportError) throw supportError;
  canUseSupportChat = supportAccess === true;
}

async function loadStoreData() {
  if (!supabaseClient) return;

  const [productResult, settingsResult] = await Promise.all([
    supabaseClient.from("products").select("*").order("id"),
    supabaseClient.from("store_settings").select("*").eq("id", 1).single()
  ]);
  if (productResult.error) throw productResult.error;
  if (settingsResult.error) throw settingsResult.error;

  products = productResult.data.map(product => ({
    id: product.id,
    en: product.name_en,
    ar: product.name_ar,
    cat: product.category,
    price: Number(product.price),
    img: product.image_url
  }));
  storeSettings = settingsResult.data;
  applyBackgroundImage();
}

async function loadAdminData() {
  if (!supabaseClient || profile?.role !== "admin") return;

  const [orderResult, inviteResult] = await Promise.all([
    supabaseClient.from("orders").select("*").order("created_at", { ascending: false }),
    supabaseClient.from("admin_invites").select("*").order("invited_at", { ascending: false })
  ]);
  if (orderResult.error) throw orderResult.error;
  if (inviteResult.error) throw inviteResult.error;
  adminOrders = orderResult.data;
  adminInvites = inviteResult.data;
}

function applyBackgroundImage() {
  const background = storeSettings.background_url;
  if (!background) {
    document.documentElement.style.removeProperty("--site-backdrop");
    return;
  }
  document.documentElement.style.setProperty("--site-backdrop", `url("${background.replace(/["\\\n\r]/g, "")}")`);
}

function reportError(error, context) {
  console.error(context, error);
  const missingSchema = ["PGRST202", "PGRST205", "42P01", "42883"].includes(error?.code);
  showToast(missingSchema ? text("supportSchemaMissing") : error?.message || String(error));
}

async function uploadImage(file) {
  if (!file || !file.name) return "";
  if (!file.type.startsWith("image/")) throw new Error("Please choose an image file.");
  if (file.size > 5 * 1024 * 1024) throw new Error("Image files must be 5 MB or smaller.");

  const extension = file.name.split(".").pop().replace(/[^a-zA-Z0-9]/g, "").toLowerCase() || "png";
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
  const { error } = await supabaseClient.storage.from("store-media").upload(path, file, {
    cacheControl: "3600",
    upsert: false
  });
  if (error) throw error;

  return supabaseClient.storage.from("store-media").getPublicUrl(path).data.publicUrl;
}

function enableProductTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.querySelectorAll(".product").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 7;
      const rotateX = (0.5 - y) * 6;

      card.style.transform =
        `perspective(1000px) translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

async function runSafely(operation, context, form) {
  const submitButton = form?.querySelector('[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  try {
    await operation();
  } catch (error) {
    reportError(error, context);
  } finally {
    if (submitButton?.isConnected) submitButton.disabled = false;
  }
}

async function saveProduct(form) {
  if (!supabaseClient || profile?.role !== "admin") throw new Error(text("backendSetup"));

  const data = new FormData(form);
  const file = data.get("image_file");
  const imageUrl = await uploadImage(file) || validImageUrl(String(data.get("img")).trim(), text("imageHelp"));
  if (!imageUrl) throw new Error(text("imageHelp"));

  const product = {
    name_en: String(data.get("en")).trim(),
    name_ar: String(data.get("ar")).trim(),
    category: String(data.get("cat")).trim(),
    price: Number(data.get("price")),
    image_url: imageUrl
  };
  const productId = String(data.get("id") || "");
  const query = productId
    ? supabaseClient.from("products").update(product).eq("id", productId)
    : supabaseClient.from("products").insert(product);
  const { error } = await query;
  if (error) throw error;

  editingProductId = null;
  await loadStoreData();
  await render();
}

function validHttpsUrl(value, field) {
  if (!value) return "";
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${field}: enter a valid URL.`);
  }
  if (url.protocol !== "https:" || url.username || url.password) {
    throw new Error(`${field}: use an HTTPS URL without embedded credentials.`);
  }
  return url.href;
}

function validImageUrl(value, field) {
  if (!value) return "";
  if (/^(\/|\.\/|assets\/)/i.test(value)) return value;
  return validHttpsUrl(value, field);
}

async function saveSettings(form) {
  if (!supabaseClient || profile?.role !== "admin") throw new Error(text("backendSetup"));

  const data = new FormData(form);
  const backgroundFile = data.get("background_file");
  const uploadedBackground = await uploadImage(backgroundFile);
  const settings = {
    id: 1,
    instagram_url: validHttpsUrl(String(data.get("instagram_url")).trim(), text("instagram")),
    tiktok_url: validHttpsUrl(String(data.get("tiktok_url")).trim(), text("tiktok")),
    facebook_url: validHttpsUrl(String(data.get("facebook_url")).trim(), text("facebook")),
    phone: String(data.get("phone")).trim(),
    background_url: uploadedBackground || validImageUrl(String(data.get("background_url")).trim(), text("backgroundImage")),
    updated_at: new Date().toISOString()
  };

  const { error } = await supabaseClient.from("store_settings").upsert(settings);
  if (error) throw error;
  storeSettings = settings;
  applyBackgroundImage();
  updateSocialLinks();
  await render();
}

async function inviteManager(form) {
  if (!supabaseClient || profile?.role !== "admin") throw new Error(text("backendSetup"));

  const email = String(new FormData(form).get("email")).trim().toLowerCase();
  const { data: existing, error: lookupError } = await supabaseClient
    .from("profiles")
    .select("id, role")
    .eq("email", email)
    .maybeSingle();
  if (lookupError) throw lookupError;

  if (existing) {
    if (existing.role !== "admin") {
      const { error } = await supabaseClient.from("profiles").update({ role: "admin" }).eq("id", existing.id);
      if (error) throw error;
    }
  } else {
    const { error } = await supabaseClient.from("admin_invites").upsert({
      email,
      invited_by: currentUser.id,
      accepted_at: null
    });
    if (error) throw error;
  }

  showToast(language === "ar" ? "تمت إضافة المسؤول أو إرسال الدعوة بنجاح." : "Manager added or invitation sent.");
  form.reset();
  await render();
}

async function updateOrderStatus(orderId, status) {
  if (!supabaseClient || profile?.role !== "admin") throw new Error(text("backendSetup"));
  const { error } = await supabaseClient.from("orders").update({ status }).eq("id", orderId);
  if (error) throw error;
  await loadAdminData();
  await render();
}

/* أحداث الأزرار والنماذج */
document.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "add") addToCart(id);
  if (action === "detail") location.hash = `product-${id}`;
  if (action === "quantity") updateQuantity(id, Number(button.dataset.change));
  if (action === "remove") {
    cart = cart.filter(item => item.id !== id);
    saveData();
    render();
  }
  if (action === "logout") {
    runSafely(async () => {
      if (!supabaseClient) throw new Error(text("backendSetup"));
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      currentUser = null;
      profile = null;
      canUseSupportChat = false;
      location.hash = "home";
      render();
    }, "Signing out");
  }
  if (action === "promo") {
    const code = $("#promo")?.value.trim().toUpperCase();
    showToast(code === "ROZY10" ? "تم تطبيق كود الخصم في هذا العرض" : "كود الخصم غير صحيح");
  }
  if (action === "delete-product") {
    runSafely(async () => {
      if (!supabaseClient || profile?.role !== "admin") throw new Error(text("backendSetup"));
      const { error } = await supabaseClient.from("products").delete().eq("id", id);
      if (error) throw error;
      if (editingProductId === id) editingProductId = null;
      await loadStoreData();
      await render();
    }, "Deleting product");
  }
  if (action === "edit-product") {
    editingProductId = id;
    location.hash = "admin";
    render();
  }
  if (action === "cancel-edit") {
    editingProductId = null;
    render();
  }
  if (action === "remove-invite") {
    runSafely(async () => {
      if (!supabaseClient || profile?.role !== "admin") throw new Error(text("backendSetup"));
      const { error } = await supabaseClient.from("admin_invites").delete().eq("email", button.dataset.email);
      if (error) throw error;
      await loadAdminData();
      await render();
    }, "Removing manager invitation");
  }
});

document.addEventListener("submit", event => {
  if (event.target.id === "login-form") {
    event.preventDefault();
    runSafely(() => handleLogin(event.target), "Signing in", event.target);
  }

  if (event.target.id === "register-form") {
    event.preventDefault();
    runSafely(() => handleRegister(event.target), "Creating account", event.target);
  }

  if (event.target.id === "order-form") {
    event.preventDefault();
    runSafely(() => submitOrder(event.target), "Sending order", event.target);
  }

  if (event.target.id === "product-form") {
    event.preventDefault();
    runSafely(() => saveProduct(event.target), "Saving product", event.target);
  }

  if (event.target.id === "settings-form") {
    event.preventDefault();
    runSafely(() => saveSettings(event.target), "Saving store settings", event.target);
  }

  if (event.target.id === "invite-form") {
    event.preventDefault();
    runSafely(() => inviteManager(event.target), "Inviting manager", event.target);
  }

  if (event.target.id === "support-message-form") {
    event.preventDefault();
    runSafely(() => sendSupportMessage(event.target), "Sending support message", event.target);
  }
});

document.addEventListener("change", event => {
  if (event.target.matches('[data-action="order-status"]')) {
    runSafely(
      () => updateOrderStatus(event.target.dataset.id, event.target.value),
      "Updating order status"
    );
  }
});

/* تغيير اللغة */
$("#lang").addEventListener("click", () => {
  language = language === "ar" ? "en" : "ar";
  localStorage.setItem("rozy-language", language);
  render();
});

/* دارك مود مع حفظ الاختيار */
$("#theme").addEventListener("click", () => {
  const darkNow = !document.body.classList.contains("dark");
  localStorage.setItem("rozy-theme", darkNow ? "dark" : "light");
  applyTheme();
});

/* تشغيل الإعدادات والواجهة */
window.addEventListener("hashchange", render);

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  $("#install-app").hidden = false;
  $("#install-app").textContent = text("install");
});

$("#install-app").addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    showToast(language === "ar"
      ? "استخدمي قائمة المتصفح ثم اختاري إضافة إلى الشاشة الرئيسية."
      : "Open the browser menu and choose Add to Home Screen.");
    return;
  }

  await deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  $("#install-app").hidden = true;
});

async function initializeApp() {
  try {
    if (supabaseClient) {
      const { data, error } = await supabaseClient.auth.getSession();
      if (error) throw error;
      if (data.session?.user) await loadProfile(data.session.user);
      await loadStoreData();

      supabaseClient.auth.onAuthStateChange((_event, session) => {
        window.setTimeout(() => {
          loadProfile(session?.user || null)
            .then(() => render())
            .catch(error => reportError(error, "Loading account profile"));
        }, 0);
      });
    }

    render();
  } catch (error) {
    reportError(error, "Starting the shop");
    render();
  }

  window.setTimeout(() => {
    $("#loader")?.classList.add("done");
  }, 650);

  if ("serviceWorker" in navigator &&
      (location.protocol === "https:" || location.hostname === "localhost")) {
    navigator.serviceWorker.register("./sw.js")
      .catch(error => reportError(error, "Registering offline support"));
  }
}

window.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  initializeApp();
});
