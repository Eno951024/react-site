<script setup>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";
import Mindset from "@/components/Mindset.vue";
import Work from "@/components/work.vue";
import OfftheRecord from "@/components/OfftheRecord.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <main id="main" role="main">
    <Intro />
    <Mindset />
    <Work />
    <OfftheRecord />
    <Contact />
  </main>
  <Footer />
</template>
