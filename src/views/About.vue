<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const links = [
  { name: '绝区零官方B站', url: 'https://space.bilibili.com/1636034895', icon: '📺' },
  { name: '绝区零WIKI', url: 'https://wiki.biligame.com/zzz/', icon: '📖' },
  { name: '妄想天使EP', url: 'https://www.bilibili.com/video/BV11UBfBMEfQ/', icon: '🎵' },
  { name: '游戏官网', url: 'https://zzz.mihoyo.com/', icon: '🎮' }
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="about-page">
    <div class="page-header" :class="{ visible: isVisible }">
      <h1>✨ 关于</h1>
      <p>关于妄想天使应援站</p>
    </div>
    
    <div class="container">
      <div class="about-content" :class="{ visible: isVisible }">
        <div class="about-section">
          <h2>🎤 关于妄想天使</h2>
          <p>
            ReDreaming Angel（妄想天使）是米哈游游戏《绝区零》中的虚拟偶像阵营。
            由千夏、爱芮、南宫羽三位充满梦想的少女组成，她们来自新艾利都，
            用歌声传递梦想与希望，成为了虚拟世界中备受瞩目的偶像组合。
          </p>
        </div>
        
        <div class="about-section">
          <h2>💕 关于这个应援站</h2>
          <p>
            这是一个由粉丝自发制作的非官方应援网站，旨在为喜欢妄想天使的玩家
            和粉丝提供一个了解成员、欣赏音乐的聚集地。网站所有内容均基于
            官方公开资料整理，仅供粉丝交流学习使用。
          </p>
        </div>
        
        <div class="about-section">
          <h2>📌 声明</h2>
          <ul class="disclaimer-list">
            <li>本网站的全部内容均为粉丝创作，与米哈游官方无任何关联</li>
            <li>网站中使用的图片、音视频素材版权归原版权方所有</li>
            <li>本项目仅供学习交流，严禁任何商业用途</li>
            <li>如有任何侵权问题，请联系删除</li>
          </ul>
        </div>
        
        <div class="about-section">
          <h2>🔗 快速链接</h2>
          <div class="links-grid">
            <a 
              v-for="link in links" 
              :key="link.name"
              :href="link.url"
              target="_blank"
              class="link-card"
            >
              <span class="link-icon">{{ link.icon }}</span>
              <span class="link-name">{{ link.name }}</span>
            </a>
          </div>
        </div>
        
        <div class="about-section">
          <h2>📊 网站信息</h2>
          <div class="site-info">
            <div class="info-item">
              <span class="info-label">技术栈</span>
              <span class="info-value">Vue 3 + Vite</span>
            </div>
            <div class="info-item">
              <span class="info-label">部署平台</span>
              <span class="info-value">GitHub Pages</span>
            </div>
            <div class="info-item">
              <span class="info-label">数据来源</span>
              <span class="info-value">绝区零WIKI / B站</span>
            </div>
            <div class="info-item">
              <span class="info-label">版本</span>
              <span class="info-value">v2.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
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

.about-content {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out 0.2s;
}

.about-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.about-section h2 {
  margin-bottom: 1rem;
  color: var(--text-dark);
  font-size: 1.3rem;
}

.about-section p {
  color: var(--text-gray);
  line-height: 1.8;
}

.disclaimer-list {
  list-style: none;
  padding: 0;
}

.disclaimer-list li {
  color: var(--text-gray);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.disclaimer-list li::before {
  content: '⚠️';
  position: absolute;
  left: 0;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: var(--light-pink);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-dark);
  transition: all 0.3s ease;
}

.link-card:hover {
  background: var(--primary-pink);
  color: white;
  transform: translateY(-3px);
}

.link-icon {
  font-size: 1.5rem;
}

.link-name {
  font-weight: 500;
}

.site-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem;
  background: var(--light-pink);
  border-radius: 12px;
}

.info-label {
  color: var(--text-gray);
  font-size: 0.85rem;
}

.info-value {
  color: var(--text-dark);
  font-weight: 600;
}
</style>
