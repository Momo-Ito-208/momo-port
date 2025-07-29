<script setup lang="tsx">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isActive = ref<boolean>(false)
const hamburger = ref<HTMLElement | null>(null)
const nav = ref<HTMLElement | null>(null)

const toggleMenu = () => {
  isActive.value = !isActive.value;
}

const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as Node

  if(!hamburger.value || !nav.value) return

  if(isActive.value && !hamburger.value.contains(target) ) {
    isActive.value = false
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>

<template>
  <div>
  <button
    ref="hamburger"
    @click="toggleMenu"
    class="hamburger"
    :class="{active: isActive}"
    aria-label="メニュー"
    aria-controls="nav-menu"
    :aria-expanded="isActive"
  >
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
  </button>

  <nav
    ref="nav"
    id="nav-menu"
    class="nav"
    :class="{active: isActive}"
    :aria-hidden="!isActive"
  >
    <ul class="nav__list">
      <li class="nav__item"><a href="#hero" class="nav__link">Top</a></li>
      <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
      <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
      <li class="nav__item"><a href="#profile" class="nav__link">Profile</a></li>
      <li class="nav__item"><a href="#update" class="nav__link">Update</a></li>
    </ul>
  </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 20px;
}

.hamburger {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  width: 48px;
  height: 48px;
  border: none;
  background: transparent;
  cursor: pointer;
    &__line {
      position: absolute;
      left: 11px;
      width: 26px;
      height: 2px;
      background-color: #333;
      transition: all .4s;
        &:nth-of-type(1) {
          top: 14px;
        }
        &:nth-of-type(2) {
          top: 23px;
        }
        &:nth-of-type(3) {
          top: 32px;
        }
    }
}

/* メニューオープン時 */
.hamburger.active .hamburger__line:nth-of-type(1) {
  transform: translateY(9px) rotate(-45deg);
}
.hamburger.active .hamburger__line:nth-of-type(2) {
  opacity: 0;
}
.hamburger.active .hamburger__line:nth-of-type(3) {
  transform: translateY(-9px) rotate(45deg);
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0 4px rgba(0,0,0,.1);
  transform: translateX(-100%);
  transition: transform .4s;
  z-index: 90;
    &__list {
      margin: 0;
      padding: 100px 0 0;
      list-style: none;
    }
    &__item {
      padding: 0 20px;
    }
    &__link {
      display: block;
      padding: 15px 0;
      color: #333;
      text-decoration: none;
      border-bottom: 1px solid #eee;
    }
}

.nav.active {
  transform: translateX(0);
}

@media (prefers-color-scheme: dark) {
  .hamburger {
    &__line {
      background-color: var(--vt-c-white-soft);
    }
  }
}
</style>