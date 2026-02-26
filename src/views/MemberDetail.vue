<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const member = ref(null)
const isVisible = ref(false)

const members = {
  chihaya: {
    id: 'chihaya',
    name: '千夏',
    cv: { cn: '木雅瑞林', jp: '森岛优花' },
    element: '电',
    role: '支援',
    position: '队长',
    tags: ['甜美', '治愈', '元气'],
    desc: '妄念天使的队长，个性活泼开朗，总是充满正能量。作为电属性支援角色，能够为队友提供强大的增益效果。是队伍中的灵魂人物，擅长用甜美的歌声激励队友。在团队中承担着照顾妹妹们的责任，是大家的精神支柱。',
    color: '#FFB6C1',
    gradient: 'linear-gradient(135deg, #FFB6C1, #FFC0CB)',
    skills: [
      { name: '星光应援', desc: '为全体队友增加攻击力与暴击率，持续15秒' },
      { name: '梦想和弦', desc: '释放音符造成电属性伤害，附加感电效果' },
      { name: '终极合唱', desc: '大全屏高额电属性伤害，清除敌人增益' }
    ],
    stats: {
      atk: 850,
      def: 520,
      hp: 12000,
      speed: 105
    }
  },
  eri: {
    id: 'eri',
    name: '爱芮',
    cv: { cn: '静宸', jp: '前田佳织里' },
    element: '冰',
    role: '异常',
    position: '主唱',
    tags: ['活力', '可爱', '努力'],
    desc: '妄念天使的主唱，拥有可爱的外表和活力的嗓音。作为冰属性异常角色，能够持续对敌人造成冰冻效果。歌声中蕴含着能够冻结一切的力量。虽然有时候有点冒失，但总是努力做到最好。',
    color: '#87CEEB',
    gradient: 'linear-gradient(135deg, #87CEEB, #ADD8E6)',
    skills: [
      { name: '冰晶之声', desc: '释放冰晶音符造成冰属性伤害' },
      { name: '寒冰咏叹调', desc: '持续冻结范围内的敌人，冻结3秒' },
      { name: '极光交响曲', desc: '大范围冰属性高额伤害，碎冰追加伤害' }
    ],
    stats: {
      atk: 920,
      def: 480,
      hp: 11000,
      speed: 108
    }
  },
  nangong: {
    id: 'nangong',
    name: '南宫羽',
    cv: { cn: '杜晴晴', jp: '高尾奏音' },
    element: '物理',
    role: '击破',
    position: '门面',
    tags: ['清新', '优雅', '温柔'],
    desc: '妄念天使的门面担当，优雅从容的气质深受粉丝喜爱。作为物理击破角色，能够快速击碎敌人的防御。舞台上的她是那样耀眼夺目。私下里是个温柔的大姐姐，非常照顾两位妹妹。',
    color: '#DDA0DD',
    gradient: 'linear-gradient(135deg, #DDA0DD, #E6E6FA)',
    skills: [
      { name: '破空之刃', desc: '快速突进造成物理伤害，击破防御' },
      { name: '碎星打击', desc: '击碎敌人防御并追加伤害，降低防御30%' },
      { name: '星辰陨落', desc: '大范围物理高额伤害，目标血量越低伤害越高' }
    ],
    stats: {
      atk: 980,
      def: 550,
      hp: 11500,
      speed: 110
    }
  }
}

onMounted(() => {
  const id = route.params.id
  member.value = members[id]
  
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="member-detail" v-if="member">
    <div class="detail-header" :style="{ background: member.gradient }" :class="{ visible: isVisible }">
      <div class="header-content">
        <RouterLink to="/members" class="back-link">← 返回成员列表</RouterLink>
        <h1>{{ member.name }}</h1>
        <p class="position">{{ member.position }} · {{ member.role }}</p>
        <div class="cv-info">
          <span>CV: {{ member.cv.cn }} (中) / {{ member.cv.jp }} (日)</span>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="detail-content" :class="{ visible: isVisible }">
        <div class="info-section">
          <h2>💕 角色介绍</h2>
          <p>{{ member.desc }}</p>
        </div>
        
        <div class="stats-section">
          <h2>📊 属性数据</h2>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-label">攻击力</span>
              <div class="stat-bar">
                <div class="stat-fill" :style="{ width: (member.stats.atk / 1000 * 100) + '%' }"></div>
              </div>
              <span class="stat-value">{{ member.stats.atk }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">防御力</span>
              <div class="stat-bar">
                <div class="stat-fill" :style="{ width: (member.stats.def / 600 * 100) + '%' }"></div>
              </div>
              <span class="stat-value">{{ member.stats.def }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">生命值</span>
              <div class="stat-bar">
                <div class="stat-fill" :style="{ width: (member.stats.hp / 15000 * 100) + '%' }"></div>
              </div>
              <span class="stat-value">{{ member.stats.hp }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">速度</span>
              <div class="stat-bar">
                <div class="stat-fill" :style="{ width: (member.stats.speed / 120 * 100) + '%' }"></div>
              </div>
              <span class="stat-value">{{ member.stats.speed }}</span>
            </div>
          </div>
        </div>
        
        <div class="skills-section">
          <h2>✨ 技能介绍</h2>
          <div class="skills-list">
            <div v-for="skill in member.skills" :key="skill.name" class="skill-item">
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.desc }}</p>
            </div>
          </div>
        </div>
        
        <div class="tags-section">
          <h2>🏷️ 标签</h2>
          <div class="tags-list">
            <span class="element-tag">{{ member.element }}属性</span>
            <span class="role-tag">{{ member.role }}</span>
            <span v-for="tag in member.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.member-detail {
  min-height: 100vh;
}

.detail-header {
  padding: 8rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-30px);
  transition: all 0.6s ease-out;
}

.detail-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.detail-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/images/chihaya.png') center/contain no-repeat;
  opacity: 0.1;
}

.header-content {
  position: relative;
  z-index: 1;
}

.back-link {
  display: inline-block;
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.3);
}

.detail-header h1 {
  font-size: clamp(2.5rem, 8vw, 4rem);
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.position {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
}

.cv-info {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: white;
}

.detail-content {
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out 0.2s;
}

.detail-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.info-section, .stats-section, .skills-section, .tags-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.info-section h2, .stats-section h2, .skills-section h2, .tags-section h2 {
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.info-section p {
  color: var(--text-gray);
  line-height: 1.8;
  font-size: 1.05rem;
}

.stats-grid {
  display: grid;
  gap: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-label {
  width: 60px;
  color: var(--text-gray);
  font-size: 0.9rem;
}

.stat-bar {
  flex: 1;
  height: 8px;
  background: var(--light-pink);
  border-radius: 4px;
  overflow: hidden;
}

.stat-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-pink), var(--deep-purple));
  border-radius: 4px;
  transition: width 1s ease-out;
}

.stat-value {
  width: 50px;
  text-align: right;
  font-weight: 600;
  color: var(--text-dark);
}

.skills-list {
  display: grid;
  gap: 1rem;
}

.skill-item {
  padding: 1rem;
  background: var(--light-pink);
  border-radius: 12px;
}

.skill-item h3 {
  color: var(--primary-pink);
  margin-bottom: 0.3rem;
}

.skill-item p {
  color: var(--text-gray);
  font-size: 0.95rem;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.element-tag, .role-tag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.element-tag {
  background: linear-gradient(135deg, var(--sky-blue), var(--cyan));
  color: white;
}

.role-tag {
  background: linear-gradient(135deg, var(--primary-pink), var(--deep-purple));
  color: white;
}

.tag {
  background: var(--light-pink);
  color: var(--primary-pink);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
</style>
