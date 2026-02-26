<script setup>
import { ref, onMounted } from 'vue'

const galleryItems = ref([
  {
    id: 1,
    title: '妄想天使三人合体',
    type: '视频',
    thumbnail: 'https://i0.hdslb.com/bfs/archive/0976d762c404231a8ebed6d8acdbb47d8912cf2d.jpg@672w_378h_1c',
    link: 'https://www.bilibili.com/video/BV1Z9ZkBbE78/'
  },
  {
    id: 2,
    title: '待机跳舞动画',
    type: '视频',
    thumbnail: 'https://i1.hdslb.com/bfs/archive/4223917a2a680163f40ea26ef3e39e0c9a34bcb7.jpg@672w_378h_1c',
    link: 'https://www.bilibili.com/video/BV1x3ZjBAEs2/'
  },
  {
    id: 3,
    title: '出场动画',
    type: '视频',
    thumbnail: 'https://i0.hdslb.com/bfs/archive/750122da040c1c7ccd807926ec0ab39e4046f086.jpg@672w_378h_1c',
    link: 'https://www.bilibili.com/video/BV1RmFzzXE1S/'
  },
  {
    id: 4,
    title: '幕后特辑',
    type: '视频',
    thumbnail: 'https://i2.hdslb.com/bfs/archive/06f76476a9582a5f2fa4e9889c649bd96fa6a871.jpg@672w_378h_1c',
    link: 'https://www.bilibili.com/video/BV1F5cczdEvm/'
  },
  {
    id: 5,
    title: '千夏角色PV',
    type: '视频',
    thumbnail: 'https://i1.hdslb.com/bfs/archive/504837d7b3fc9bab8d669802f8a438e37284cfe8.jpg@672w_378h_1c',
    link: 'https://www.bilibili.com/video/BV1gUFYzfEC7/'
  },
  {
    id: 6,
    title: '音乐会Live',
    type: '视频',
    thumbnail: 'https://i2.hdslb.com/bfs/archive/1015ec8db62d7d892afb041cf1604afcb6b928d9.jpg@672w_378h_1c',
    link: 'https://www.bilibili.com/video/BV1SDrQBeEQg/'
  }
])

const isVisible = ref(false)
const selectedItem = ref(null)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const openLightbox = (item) => {
  selectedItem.value = item
}

const closeLightbox = () => {
  selectedItem.value = null
}
</script>

<template>
  <div class="gallery-page">
    <div class="page-header" :class="{ visible: isVisible }">
      <h1>📸 精彩瞬间</h1>
      <p>妄想天使的高光时刻</p>
    </div>
    
    <div class="container">
      <div class="gallery-grid">
        <a 
          v-for="(item, index) in galleryItems" 
          :key="item.id"
          :href="item.link"
          target="_blank"
          class="gallery-item"
          :class="{ visible: isVisible }"
          :style="{ 
            '--delay': index * 0.1 + 's'
          }"
        >
          <img :src="item.thumbnail" :alt="item.title" @error="($event.target.style.display='none')">
          <div class="item-overlay">
            <span class="item-type">{{ item.type }}</span>
            <h3>{{ item.title }}</h3>
          </div>
        </a>
      </div>
      
      <div class="external-links" :class="{ visible: isVisible }">
        <h2>🔗 官方链接</h2>
        <div class="links-list">
          <a href="https://space.bilibili.com/1636034895" target="_blank" class="external-link">
            <span class="link-icon">📺</span>
            <span>绝区零官方B站</span>
          </a>
          <a href="https://wiki.biligame.com/zzz/" target="_blank" class="external-link">
            <span class="link-icon">📖</span>
            <span>绝区零WIKI</span>
          </a>
          <a href="https://www.bilibili.com/video/BV11UBfBMEfQ/" target="_blank" class="external-link">
            <span class="link-icon">🎵</span>
            <span>妄想天使EP</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="selectedItem" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="close-btn" @click="closeLightbox">×</button>
          <img :src="selectedItem.thumbnail" :alt="selectedItem.title">
          <h3>{{ selectedItem.title }}</h3>
          <a :href="selectedItem.link" target="_blank" class="btn btn-primary">
            观看完整视频 →
          </a>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.gallery-page {
  min-height: 100vh;
  padding-bottom: 4rem;
}

.page-header {
  text-align: center;
  padding: 4rem 2rem 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.page-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.page-header h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  background: linear-gradient(135deg, var(--primary-pink), var(--deep-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: var(--text-gray);
  font-size: 1.1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16/9;
  display: block;
  text-decoration: none;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.4s ease;
}

.gallery-item.visible {
  animation: zoomIn 0.5s ease-out backwards;
  animation-delay: var(--delay);
}

@keyframes zoomIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(255, 107, 157, 0.3);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .item-overlay {
  opacity: 1;
}

.item-type {
  display: inline-block;
  background: var(--primary-pink);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  font-size: 0.75rem;
  width: fit-content;
  margin-bottom: 0.5rem;
}

.item-overlay h3 {
  color: white;
  font-size: 1.1rem;
}

.external-links {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out 0.5s;
}

.external-links.visible {
  opacity: 1;
  transform: translateY(0);
}

.external-links h2 {
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.links-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.external-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: var(--light-pink);
  border-radius: 50px;
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: all 0.3s ease;
}

.external-link:hover {
  background: var(--primary-pink);
  color: white;
  transform: translateY(-3px);
}

.link-icon {
  font-size: 1.2rem;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.lightbox-content {
  max-width: 800px;
  width: 100%;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 1rem;
}

.lightbox-content h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
