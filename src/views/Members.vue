<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const members = ref([
  {
    id: 'chihaya',
    name: '千夏',
    cv: { cn: '木雅瑞林', jp: '森岛优花' },
    element: '电',
    role: '支援',
    position: '队长',
    tags: ['甜美', '治愈', '元气'],
    desc: '妄念天使的队长，个性活泼开朗，总是充满正能量。作为电属性支援角色，能够为队友提供强大的增益效果。是队伍中的灵魂人物，擅长用甜美的歌声激励队友。',
    color: '#FFB6C1',
    gradient: 'linear-gradient(135deg, #FFB6C1, #FFC0CB)',
    skills: [
      { name: '星光应援', desc: '为全体队友增加攻击力与暴击率' },
      { name: '梦想和弦', desc: '释放音符造成电属性伤害' },
      { name: '终极合唱', desc: '大全屏高额电属性伤害' }
    ]
  },
  {
    id: 'eri',
    name: '爱芮',
    cv: { cn: '静宸', jp: '前田佳织里' },
    element: '冰',
    role: '异常',
    position: '主唱',
    tags: ['活力', '可爱', '努力'],
    desc: '妄念天使的主唱，拥有可爱的外表和活力的嗓音。作为冰属性异常角色，能够持续对敌人造成冰冻效果。歌声中蕴含着能够冻结一切的力量。',
    color: '#87CEEB',
    gradient: 'linear-gradient(135deg, #87CEEB, #ADD8E6)',
    skills: [
      { name: '冰晶之声', desc: '释放冰晶音符造成冰属性伤害' },
      { name: '寒冰咏叹调', desc: '持续冻结范围内的敌人' },
      { name: '极光交响曲', desc: '大范围冰属性高额伤害' }
    ]
  },
  {
    id: 'nangong',
    name: '南宫羽',
    cv: { cn: '杜晴晴', jp: '高尾奏音' },
    element: '物理',
    role: '击破',
    position: '门面',
    tags: ['清新', '优雅', '温柔'],
    desc: '妄念天使的门面担当，优雅从容的气质深受粉丝喜爱。作为物理击破角色，能够快速击碎敌人的防御。舞台上的她是那样耀眼夺目。',
    color: '#DDA0DD',
    gradient: 'linear-gradient(135deg, #DDA0DD, #E6E6FA)',
    skills: [
      { name: '破空之刃', desc: '快速突进造成物理伤害' },
      { name: '碎星打击', desc: '击碎敌人防御并追加伤害' },
      { name: '星辰陨落', desc: '大范围物理高额伤害' }
    ]
  }
])

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="members-page">
    <div class="page-header" :class="{ visible: isVisible }">
      <h1>💕 成员介绍</h1>
      <p>三位怀揣梦想的少女，即将闪耀舞台</p>
    </div>
    
    <div class="container">
      <div class="members-grid">
        <div 
          v-for="(member, index) in members" 
          :key="member.id"
          class="member-card"
          :class="{ visible: isVisible }"
          :style="{ 
            '--delay': index * 0.15 + 's',
            '--color': member.color 
          }"
        >
          <div class="member-image" :style="{ background: member.gradient }">
            <RouterLink :to="`/members/${member.id}`" class="view-detail">
              <span>查看详情 →</span>
            </RouterLink>
          </div>
          <div class="member-info">
            <span class="member-position">{{ member.position }}</span>
            <h2 class="member-name">{{ member.name }}</h2>
            <p class="member-cv">CV: {{ member.cv.cn }} (中) / {{ member.cv.jp }} (日)</p>
            <div class="member-tags">
              <span class="element-tag">{{ member.element }}属性</span>
              <span class="role-tag">{{ member.role }}</span>
              <span v-for="tag in member.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <p class="member-desc">{{ member.desc.substring(0, 80) }}...</p>
            <RouterLink :to="`/members/${member.id}`" class="btn btn-primary">
              了解更多
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.members-page {
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

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.member-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
}

.member-card.visible {
  animation: slideUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(255, 107, 157, 0.25);
}

.member-image {
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/images/chihaya.png') center/contain no-repeat;
  opacity: 0.8;
}

.view-detail {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  text-decoration: none;
  color: var(--primary-pink);
  font-weight: 600;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.member-card:hover .view-detail {
  opacity: 1;
  transform: translateY(0);
}

.member-info {
  padding: 1.5rem;
  text-align: center;
}

.member-position {
  display: inline-block;
  background: var(--golden);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.member-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.8rem 0 0.3rem;
  background: linear-gradient(135deg, var(--primary-pink), var(--deep-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.member-cv {
  color: var(--text-gray);
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.member-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.element-tag, .role-tag {
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
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
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
}

.member-desc {
  color: var(--text-gray);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .member-image {
    height: 250px;
  }
}
</style>
