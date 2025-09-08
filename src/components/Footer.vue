<script setup>
import { socialLinks } from "../constants";
</script>

<template>
    <footer id="footer" role="contentinfo">
        <div class="footer_inner">
            <div class="footer_info">
                <em>Built with Vue.js</em>
            </div>
            <div class="footer_link">
                <ul>
                    <li v-for="(social, key) in socialLinks" :key="key">
                        <a :href="social.link" target="_blank" :aria-label="social.name">
                            <component :is="social.icon" color="black" :size="24" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@use "@/assets/scss/mixin";
#footer {
    font-family: var(--mainKor-font);
    background-color: #f5f5f5;
    border-top: 1px solid var(--black100);
}

.footer_inner {
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
    margin: 0 auto;
    max-width: 1200px;

    .footer_info {
        font-size: 0.8rem;
        color: var(--black200);

        em {
            margin-right: 0.5rem;
            padding-right: 0.5rem;
            border-right: 1px solid var(--black200);
            font-style: normal;
        }
    }

    .footer_link ul {
        display: flex;
        
        li {
            padding: 1px;
            a {
                color: var(--black);
                font-size: 0.9rem;
                text-transform: uppercase;
                transition: color 0.3s;
                @include mixin.flex-center;
                
                &:hover {
                    color: var(--point-color);
                }
            }
        }
    }

    @media (max-width: 800px) {
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        text-align: center;
        
        .footer_info {
            margin-bottom: 1rem;
            text-align: center;
        }

        .footer_link ul {
            justify-content: center;
            
            li {
                margin: 0 0.5rem;
            }
        }
    }
}
</style>