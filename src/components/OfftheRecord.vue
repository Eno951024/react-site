<script setup>
import { onMounted } from 'vue';
import { otrText } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    ScrollTrigger.matchMedia({
    
        "(min-width: 801px)": function() {
            const horSection = gsap.utils.toArray(".otr_item");

            const scrollAmountPerItem = 300;

            const totalScroll = horSection.length * scrollAmountPerItem;

            gsap.to(horSection, {
                xPercent: -120 * (horSection.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#otr",
                    start: "top 56px",
                    end: `+=${totalScroll}`, 
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });
            return () => {};
        },

        "(max-width: 800px)": function() {
            return () => {};
        },
    });
});
</script>

<template>
    <section id="otr">
        <div class="otr_inner">
            <h2 class="otr_title">
                Off the Record
            </h2>
            <div class="otr_wrap">
                <article class="otr_item" v-for="(otr, key) in otrText" :key="key">
                    <span class="num">{{ key + 1 }}.</span>
                    <div class="img">
                        <img :src="otr.img"/>
                    </div>
                    <h3 class="title">{{ otr.title }}</h3>
                    <p class="desc">{{ otr.desc }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
#otr {
    width: 100%;
    margin-top: 10vh;
}
.otr_inner {
    padding: 16px;

    .otr_title {
        width: 100%;
        height: 5vw;
        font-size: 4vw;
        font-weight: 900;
        line-height: 1.6;
        font-family: var(--mainKor-font);
        text-transform: uppercase;
        color: var(--black100);
        border-bottom: 0.4vw solid var(--black100);
        margin-bottom: 16px;
        text-indent: -0.26vw;
    }
    .otr_wrap {
        display: flex;
        flex-wrap: wrap;
        width: 7000px;

        @media (max-width: 800px) {
            width: auto;
            flex-wrap: nowrap;
            flex-direction: column; 
        }

        .otr_item {
            width: 500px;
            height: 70vh;
            background-color: var(--subBg100);
            margin-right: 20px;

            @media (max-width: 800px) {
                width: 100%;
                height: 90vh;
                margin-right: 0;
                margin-bottom: 20px;
            }

            @media (max-width: 430px) {
                height: 50vh;
            }

            &:nth-child(1) { background-color: var(--subBg100); }
            &:nth-child(2) { background-color: var(--subBg200); }
            &:nth-child(3) { background-color: var(--subBg300); }
            &:nth-child(4) { background-color: var(--subBg400); }
            &:nth-child(5) { background-color: var(--subBg500); }
            &:nth-child(6) { background-color: var(--subBg100); }
            &:nth-child(7) { background-color: var(--subBg200); }
            &:nth-child(8) { background-color: var(--subBg300); }
            &:nth-child(9) { background-color: var(--subBg400); }
            &:nth-child(10) { background-color: var(--subBg500); }

            .num {
                font-size: 2rem;
                font-family: var(--mainNum-font);
            }
            .img {
                display: block;
                margin-top: -20px;
                transition: margin-top 0.3s;
                img {
                    border-radius: 5px;
                    filter: saturate(0%);
                    transition: all 0.3s;
                }
                &:hover {
                    margin-top: 0;
                    img {
                        filter: saturate(100%);
                    }
                }
            }
            .title {
                font-size: 1.5rem;
                text-align: center;
                padding: 0.8rem 0;
                font-weight: 700;
                color: var(--black100);
                border-bottom: 2px solid var(--black100);
                margin-bottom: 1rem;
            }
            .desc {
                font-size: 1rem;
            }
            .site {
                border: 1px solid var(--black100);
                display: block;
                text-align: center;
                padding: 0.625rem 1.5rem;
                margin-top: 1.5rem;
                transition: all 0.2s;

                &:hover {
                    background-color: var(--black100);
                    color: var(--white);
                }
            }
        }
    }
}
</style>