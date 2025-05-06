<template>
    <section id="experience">
        <div class="title">
            <p>Experience</p>
        </div>        
        <template v-for="(experience, index) in experiences" :key="index">
            <div class="experience-card card-with-sidebar mb-5" @click="navigateTo(experience.company_website)">
                <span class="experience-duration card-sidebar text-secondary d-block">{{ `${experience.duration.from} - ${experience.duration.to}` }}</span>
                <div class="experience-main card-main">
                    <a target="_blank" :href="experience.company_website" class="title text-decoration-none fw-bold mb-2 d-block">{{ experience.title }}<span class="mx-1">&#8226;</span>{{ experience.company }}</a>
                    <p class="description mb-2">{{ experience.description }}</p>
                    <div class="projects mb-2">
                        <template v-for="(project, i) in experience.projects" :key="i">
                            <a class="project-badge d-inline-flex align-items-center mt-2 text-decoration-none text-secondary" target="_blank" :href="project.link" @click.stop.prevent="navigateTo(project.link)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
                                <span class="project-title">{{ project.title }}</span>
                            </a>
                        </template>
                    </div>
                    <div class="stack d-flex justify-content-start flex-wrap">
                        <template v-for="(stackItem, j) in experience.stack" :key="j">
                            <span class="stack-badge py-1 px-2 mt-2 transform-uppercase fw-bold rounded-pill">
                                {{ stackItem }}
                            </span>
                        </template>
                    </div>
                </div>
            </div>
        </template>
        <a class="hover-link" href="/2025_Diether_Llenares.pdf" target="_blank" rel="noopener noreferrer">
            View full resume
        </a>
    </section>
</template>
<script>
import experiences from '@/data/experience';

export default {
    setup() {
        return {
            experiences
        }
    },
    methods: {
        navigateTo(link) {
            window.open(link, '_blank');
        }
    }
}
</script>