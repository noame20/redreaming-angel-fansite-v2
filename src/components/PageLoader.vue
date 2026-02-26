<script setup>
import { ref, onMounted } from 'vue'

const stars = ref([])

onMounted(() => {
  // 生成星星
  for (let i = 0; i < 50; i++) {
    stars.value.push({
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      delay: Math.random() * 2 + 's',
      size: Math.random() * 3 + 2 + 'px'
    })
  }
})
</script>

<template>
  <div class="page-loader">
    <div class="loader-content">
      <div class="logo-container">
        <span class="logo-icon">✨</span>
        <h1 class="logo-text">ReDreaming Angel</h1>
      </div>
      <div class="loading-bar">
        <div class="loading-progress"></div>
      </div>
      <p class="loading-text">正在加载妄想天使...</p>
    </div>
    <div class="stars">
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
  </div>
</template>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #FFF0F5 0%, #F5E6FF 50%, #E8F4F8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-content {
  text-align: center;
  z-index: 1;
}

.logo-container {
  margin-bottom: 2rem;
}

.logo-icon {
  font-size: 4rem;
  display: block;
  animation: pulse 1.5s ease-in-out infinite;
}

.logo-text {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-pink), var(--deep-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 1rem;
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: var(--light-pink);
  border-radius: 2px;
  margin: 0 auto 1rem;
  overflow: hidden;
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-pink), var(--deep-purple));
  border-radius: 2px;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% { width: 0; margin-left: 0; }
  50% { width: 100%; margin-left: 0; }
  100% { width: 0; margin-left: 100%; }
}

.loading-text {
  color: var(--text-gray);
  font-size: 0.9rem;
}

.stars {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.star {
  position: absolute;
  background: var(--golden);
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
</style>
