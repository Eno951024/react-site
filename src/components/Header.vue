<script setup>
import { headerNav } from "../constants";
</script>

<template>
    <header id="header" role="banner">
        <div class="header_inner">
            <div class="header_logo">
                <h1>
                    <a href="#">portfolio<em>vue.js</em></a>
                </h1>
            </div>
            <nav 
                class="header_nav"
                :class="{ show: isNavVisible }"
                role="navigation" 
            >
                <ul>
                    <li v-for="(nav, key) in headerNav" :key="key">
                        <a :href="nav.url" @click="scrollLink($event)">{{ nav.title }}</a>
                    </li>
                </ul>
            </nav>
            <div 
                class="header_nav_mobile" 
                id="headerToggle" 
                aria-controls="primary-menu" 
                :aria-expanded="isNavVisible.toString()" 
                role="button"
                tabindex="0"
                @click="toggleMobileMenu"
            >
                <span></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return {
            isNavVisible: false,
        }
    },
    methods: {
        toggleMobileMenu(){
            this.isNavVisible = !this.isNavVisible;
        },
        scrollLink(event){
            event.preventDefault();

            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
}
</script>

<style lang="scss">
@use "@/assets/scss/mixin";

#header {
    @include mixin.position-fixed;
    z-index: 10000;
}
.header_inner {
    @include mixin.flex-between;
    background-color: rgba(116, 99, 99, 0.1);
    backdrop-filter: blur(15px);
    padding: 1rem;

    .header_logo {
        font-size: 0.9rem;
        text-align: center;
        text-transform: uppercase;
        line-height: 1;

        em {
            font-size: 10px;
            display: block;
            color: var(--black200);
        }
    }
    
    .header_nav {
    li {
      display: inline-block;

      a {
        text-transform: uppercase;
        font-size: 14px;
        padding: 14px;
        position: relative;
        color: var(--white);

        &::before {
          content: '';
          width: calc(100% - 28px);
          height: 1px;
          background-color: var(--white);
          position: absolute;
          left: 14px;
          bottom: 10px;
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        &:hover::before {
          transform: scaleX(1);
        }
      }
    }

    @media (max-width: 800px) {
      display: none;

      &.show {
        display: block;
        position: absolute;
        right: 0;
        top: 68px;
        background-color: rgba(116, 99, 99, 0.1);
        backdrop-filter: blur(15px);
        z-index: 10000;
        min-width: 150px;
        padding: 20px 0;

        ul {
          display: block;

          li {
            display: block;
            text-align: right;

            a {
              display: inline-block;
              padding: 10px 20px;
              font-weight: bold;
              font-size: 18px;
              color: var(--white);
            }
          }
        }
      }
    }
  }
    
    .header_nav_mobile {
        display: none;
        width: 40px;
        height: 40px;
        cursor: pointer;

        @media (max-width: 800px){
            display: block;
        }

        span {
            display: block;
            width: 40px;
            height: 2px;
            background-color: var(--black);
            margin-top: 19px;
            position: relative;

            &::before,
            &::after {
                content: "";
                width: 40px;
                height: 2px;
                background-color: var(--black);
                position: absolute;
                transition: width 0.3s;
            }

            &::before { top: -6px; right: 0; }
            &::after { bottom: -6px; left: 0; }
        }
        
        &.active span::before {
        width: 20px;
        }

        &.active span::after {
        width: 20px;
        }
    }
} 
</style>