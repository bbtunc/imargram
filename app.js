// app.js

// Sitedeki gerçek menü ve içeriklerden oluşturulan veriler
const posts = [
    {
        username: "imar.istanbul",
        userImage: "img/logo.png", // Siteden indirdiğin logo
        location: "İstanbul Genel",
        postImage: "img/harita.jpg", // Siteden aldığın harita görseli
        likes: 34,
        caption: "🗺️ Ada/Parsel veya Adres bilgilerinizi girerek imar durumunu sorgulayabilirsiniz. Veriler bilgi amaçlıdır, resmi belge niteliği taşımaz.",
        timestamp: "GÜNCEL"
    },
    {
        username: "imar.istanbul",
        userImage: "img/logo.png",
        location: "Askıdaki Planlar",
        postImage: "img/harita.jpg", // Aynı görseli kullanıyoruz (temsili)
        likes: 12,
        caption: "📢 İlçe ve mahalle bazında askıya çıkan 1/1000 ve 1/5000 ölçekli plan tadilatlarını sistem üzerinden inceleyebilirsiniz.",
        timestamp: "YENİ"
    }
];

const feedContainer = document.getElementById('feed-container');

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    postElement.innerHTML = `
        <div class="post-header">
            <div class="user-info">
                <img src="${post.userImage}" alt="${post.username}" class="profile-pic">
                <div class="name-loc">
                    <span class="username">${post.username}</span>
                    <span class="location">${post.location}</span>
                </div>
            </div>
            <span class="options">•••</span>
        </div>
        <div class="post-image">
            <img src="${post.postImage}" alt="İmar İstanbul Harita Görünümü">
        </div>
        <div class="post-footer">
            <div class="icons">
                <div class="left-icons">
                    <span class="heart-icon">🤍</span>
                    <span class="comment-icon">💬</span>
                    <span>↗️</span>
                </div>
                <div class="right-icon">
                    <span>🔖</span>
                </div>
            </div>
            <div class="likes">Beğeniler: ${post.likes}</div>
            <div class="caption">
                <span class="username">${post.username}</span> ${post.caption}
            </div>
            <div class="timestamp">${post.timestamp}</div>
        </div>
    `;
    
    feedContainer.appendChild(postElement);
});
