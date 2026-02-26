<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import PageLoader from './components/PageLoader.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <PageLoader v-if="isLoading" />
  <div v-else class="app">
    <NavBar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="app-footer">
      <p>© 2024-2026 ReDreaming Angel 妄想天使 | All Rights Reserved. 米哈游绝区零</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-pink: #FF6B9D;
  --soft-pink: #FFB6C1;
  --light-pink: #FFF0F5;
  --sky-blue: #87CEEB;
  --soft-blue: #E0F4FF;
  --deep-purple: #9B59B6;
  --text-dark: #2C3E50;
  --text-gray: #7F8C8D;
  --golden: #FFD700;
  --cyan: #00CED1;
}

body {
  font-family: 'Noto Sans SC', 'M PLUS Rounded 1c', sans-serif;
  background: linear-gradient(135deg, #FFF0F5 0%, #F5E6FF 50%, #E8F4F8 100%);
  min-height: 100vh;
  color: var(--text-dark);
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: 70px;
}

.app-footer {
  background: linear-gradient(135deg, var(--text-dark), #34495E);
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}

.app-footer p {
  font-size: 0.9rem;
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 全局滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--light-pink);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-pink);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--deep-purple);
}
</style>
