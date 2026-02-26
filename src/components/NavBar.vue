<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})

const navLinks = [
  { path: '/', name: '首页', icon: '🏠' },
  { path: '/members', name: '成员', icon: '💕' },
  { path: '/music', name: '音乐', icon: '🎵' },
  { path: '/gallery', name: '画廊', icon: '📸' },
  { path: '/about', name: '关于', icon: '✨' }
]
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <RouterLink to="/" class="logo" @click="closeMenu">
        <span class="logo-icon">✨</span>
        <span class="logo-text">ReDreaming Angel</span>
      </RouterLink>
      
      <div class="nav-links" :class="{ active: isMenuOpen }">
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path" 
          class="nav-link"
          :class="{ active: route.path === link.path }"
          @click="closeMenu"
        >
          <span class="nav-icon">{{ link.icon }}</span>
          <span>{{ link.name }}</span>
        </RouterLink>
      </div>
      
      <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(255, 107, 157, 0.15);
  padding: 0.8rem 2rem;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.3rem;
}

.logo-icon {
  font-size: 1.5rem;
  animation: pulse 2s ease-in-out infinite;
}

.logo-text {
  background: linear-gradient(135deg, var(--primary-pink), var(--deep-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary-pink);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 60%;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-pink);
  background: var(--light-pink);
}

.nav-icon {
  font-size: 1.1rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 5px;
  background: none;
  border: none;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-pink);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.8rem 1rem;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-link {
    padding: 0.8rem 1rem;
    justify-content: center;
  }
}
</style>
