<script setup>
import { ref, onMounted } from 'vue'

const songs = ref([
  {
    id: 1,
    title: '把心跳变成节奏',
    album: '妄想天使 EP',
    duration: '3:51',
    color: '#FFB6C1'
  },
  {
    id: 2,
    title: 'ReDreaming Angel',
    album: '复梦天使',
    duration: '3:56',
    color: '#87CEEB'
  },
  {
    id: 3,
    title: 'Never Gonna Give Up',
    album: '梦想永不放',
    duration: '4:12',
    color: '#DDA0DD'
  },
  {
    id: 4,
    title: '梦想家 - 你能听见吗？',
    album: '单曲',
    duration: '4:05',
    color: '#FFD700'
  },
  {
    id: 5,
    title: '把心跳变成节奏 (Instrumental)',
    album: '妄想天使 EP',
    duration: '3:51',
    color: '#FFB6C1'
  },
  {
    id: 6,
    title: '星光舞台',
    album: '演唱会精选',
    duration: '4:30',
    color: '#00CED1'
  }
])

const isPlaying = ref(null)
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const playSong = (id) => {
  isPlaying.value = isPlaying.value === id ? null : id
}
</script>

<template>
  <div class="music-page">
    <div class="page-header" :class="{ visible: isVisible }">
      <h1>🎵 代表作品</h1>
      <p>让心跳变成节奏</p>
    </div>
    
    <div class="container">
      <div class="featured-song" :class="{ visible: isVisible }">
        <div class="featured-cover">
          <span class="play-icon">🎶</span>
        </div>
        <div class="featured-info">
          <span class="featured-label">推荐歌曲</span>
          <h2>把心跳变成节奏</h2>
          <p>妄念天使 EP 主打曲</p>
          <div class="featured-meta">
            <span>🎤 妄念天使</span>
            <span>⏱️ 3:51</span>
          </div>
        </div>
      </div>
      
      <div class="songs-section">
        <h2>📋 全部歌曲</h2>
        <div class="songs-list">
          <div 
            v-for="(song, index) in songs" 
            :key="song.id"
            class="song-item"
            :class="{ 
              visible: isVisible,
              playing: isPlaying === song.id 
            }"
            :style="{ 
              '--delay': index * 0.05 + 's',
              '--color': song.color
            }"
            @click="playSong(song.id)"
          >
            <div class="song-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="song-cover" :style="{ background: song.color }">
              <span v-if="isPlaying === song.id" class="playing-indicator">
                <span></span><span></span><span></span>
              </span>
              <span v-else class="play-icon-small">▶</span>
            </div>
            <div class="song-info">
              <h3>{{ song.title }}</h3>
              <p>{{ song.album }}</p>
            </div>
            <div class="song-duration">{{ song.duration }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.music-page {
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

.featured-song {
  display: flex;
  gap: 2rem;
  background: white;
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out 0.2s;
}

.featured-song.visible {
  opacity: 1;
  transform: translateY(0);
}

.featured-cover {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--primary-pink), var(--deep-purple));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.play-icon {
  font-size: 4rem;
}

.featured-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-label {
  display: inline-block;
  background: var(--golden);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  width: fit-content;
  margin-bottom: 0.8rem;
}

.featured-info h2 {
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
  color: var(--text-dark);
}

.featured-info p {
  color: var(--text-gray);
  margin-bottom: 1rem;
}

.featured-meta {
  display: flex;
  gap: 1.5rem;
  color: var(--text-gray);
}

.songs-section h2 {
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.songs-list {
  display: grid;
  gap: 1rem;
}

.song-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-20px);
}

.song-item.visible {
  animation: slideInLeft 0.4s ease-out backwards;
  animation-delay: var(--delay);
}

.song-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(255, 107, 157, 0.2);
}

.song-item.playing {
  background: linear-gradient(135deg, var(--light-pink), var(--soft-blue));
}

.song-number {
  width: 30px;
  color: var(--text-gray);
  font-size: 0.9rem;
}

.song-cover {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.play-icon-small {
  color: white;
  font-size: 1.2rem;
}

.playing-indicator {
  display: flex;
  gap: 3px;
  align-items: flex-end;
  height: 20px;
}

.playing-indicator span {
  width: 4px;
  background: white;
  border-radius: 2px;
  animation: equalizer 0.8s ease-in-out infinite;
}

.playing-indicator span:nth-child(1) { height: 10px; animation-delay: 0s; }
.playing-indicator span:nth-child(2) { height: 16px; animation-delay: 0.2s; }
.playing-indicator span:nth-child(3) { height: 12px; animation-delay: 0.4s; }

@keyframes equalizer {
  0%, 100% { transform: scaleY(0.5); }
  50% { transform: scaleY(1); }
}

.song-info {
  flex: 1;
}

.song-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  color: var(--text-dark);
}

.song-info p {
  color: var(--text-gray);
  font-size: 0.85rem;
}

.song-duration {
  color: var(--text-gray);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .featured-song {
    flex-direction: column;
    text-align: center;
  }
  
  .featured-cover {
    width: 100%;
    height: 180px;
  }
  
  .featured-meta {
    justify-content: center;
  }
}
</style>
