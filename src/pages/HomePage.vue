<template>
  <div class="main-container d-block d-lg-flex justify-content-lg-between">
    <header class="d-lg-flex justify-content-lg-between flex-lg-between sticky-lg-top flex-lg-column vh-lg-100 py-5">
      <div>
        <div class="mb-5">
          <PersonalInfo />
        </div>
        <NavBar />
      </div>
      <FooterComponent />
    </header>
    <div class="py-lg-5">
      <About />
      <Experience />
      <Projects />
    </div>
  </div>
</template>
<script>
import PersonalInfo from '@/components/PersonalInfo.vue';
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/Footer.vue';
import About from '@/components/sections/About.vue';
import Experience from '@/components/sections/Experience.vue';
import Projects from '@/components/sections/Projects.vue';
export default {
  components: {
    PersonalInfo,
    NavBar,
    FooterComponent,
    About,
    Experience,
    Projects,
  },
  created() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav ul li a");  
    console.log(scrollY, sections, navLinks);
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute("id"); }
      });

      navLinks.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    });
  },
}
</script>