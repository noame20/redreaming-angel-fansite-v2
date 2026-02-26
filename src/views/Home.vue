<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const stars = ref([])
const isVisible = ref(false)

onMounted(() => {
  // 生成星星
  for (let i = 0; i < 60; i++) {
    stars.value.push({
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      delay: Math.random() * 2 + 's',
      size: Math.random() * 4 + 2 + 'px'
    })
  }
  
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const features = [
  { icon: '🎵', title: '元气歌声', desc: '用充满感染力的声音传递梦想与希望' },
  { icon: '💖', title: '三人羁绊', desc: '友情与梦想交织的偶像故事' },
  { icon: '🌟', title: '新艾利都偶像', desc: '来自绝区零世界的虚拟偶像阵营' }
]

const members = [
  { name: '千夏', role: '队长', color: '#FFB6C1' },
  { name: '爱芮', role: '主唱', color: '#87CEEB' },
  { name: '南宫羽', role: '门面', color: '#DDA0DD' }
]
</script>

<template>
  <div class="home">
    <!-- 星星背景 -->
    <div class="stars-bg">
      <div 
        v-for="(star, index) in stars" 
        :key="index" 
        class="star"
        :style="{
          left: star.left,
          top: star.top,
          animationDelay: star.delay,
          width: star.size,
          height: star.size
        }"
      ></div>
    </div>
    
    <!-- Hero区域 -->
    <section class="hero" :class="{ visible: isVisible }">
      <div class="hero-content">
        <span class="hero-badge">🎤 绝区零虚拟偶像阵营</span>
        <h1 class="hero-title">
          ReDreaming Angel<br>
          <span class="highlight">妄想天使</span>
        </h1>
        <p class="hero-subtitle">复梦天使 · 为梦想歌唱</p>
        <p class="hero-desc">
          来自新艾利都的超人气偶像组合，由千夏、爱芮、南宫羽<br>
          三位充满梦想的少女组成！用歌声传递梦想与希望！
        </p>
        <div class="hero-actions">
          <RouterLink to="/members" class="btn btn-primary">
            认识成员 →
          </RouterLink>
          <RouterLink to="/music" class="btn btn-secondary">
            聆听音乐 🎵
          </RouterLink>
        </div>
      </div>
      
      <!-- 浮动成员展示 -->
      <div class="floating-members">
        <div 
          v-for="(member, index) in members" 
          :key="member.name"
          class="floating-member"
          :style="{ 
            '--delay': index * 0.2 + 's',
            '--color': member.color 
          }"
        >
          <div class="member-avatar">
            <span>{{ member.name[0] }}</span>
          </div>
          <span class="member-name">{{ member.name }}</span>
        </div>
      </div>
    </section>
    
    <!-- 特色区域 -->
    <section class="features">
      <div class="container">
        <div class="section-title">
          <h2>💫 组合特色</h2>
          <p>三位少女的梦想之旅</p>
        </div>
        <div class="features-grid">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.title"
            class="feature-card"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 快速链接 -->
    <section class="quick-links">
      <div class="container">
        <div class="links-grid">
          <RouterLink to="/members" class="quick-link-card">
            <span class="link-icon">💕</span>
            <h3>成员介绍</h3>
            <p>了解三位偶像的详细信息</p>
          </RouterLink>
          <RouterLink to="/music" class="quick-link-card">
            <span class="link-icon">🎶</span>
            <h3>音乐作品</h3>
            <p>聆听她们的代表作品</p>
          </RouterLink>
          <RouterLink to="/gallery" class="quick-link-card">
            <span class="link-icon">📸</span>
            <h3>精彩画廊</h3>
            <p>收藏高光时刻</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  position: relative;
}

/* Hero */
.hero {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.hero.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-content {
  text-align: center;
  max-width: 800px;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-pink), var(--deep-purple));
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  animation: pulse 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-title .highlight {
  background: linear-gradient(135deg, #FF6B9D 0%, #9B59B6 50%, #00CED1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--text-gray);
  margin-bottom: 1.5rem;
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--text-gray);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* 浮动成员 */
.floating-members {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-member {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: float 3s ease-in-out infinite;
  animation-delay: var(--delay);
  opacity: 0.6;
}

.floating-member:nth-child(1) {
  left: 10%;
  top: 30%;
}

.floating-member:nth-child(2) {
  right: 10%;
  top: 20%;
}

.floating-member:nth-child(3) {
  left: 20%;
  bottom: 20%;
}

.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color), white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-dark);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.member-name {
  font-weight: 600;
  color: var(--text-dark);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Features */
.features {
  padding: 5rem 2rem;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  background: linear-gradient(135deg, var(--light-pink), var(--soft-blue));
  transition: all 0.4s ease;
  animation: slideUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 107, 157, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.feature-card p {
  color: var(--text-gray);
  font-size: 0.95rem;
}

/* Quick Links */
.quick-links {
  padding: 5rem 2rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.quick-link-card {
  display: block;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.quick-link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(255, 107, 157, 0.2);
}

.link-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.quick-link-card h3 {
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.quick-link-card p {
  color: var(--text-gray);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .floating-members {
    display: none;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }
}
</style>
