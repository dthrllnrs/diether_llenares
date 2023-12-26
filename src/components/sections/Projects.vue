<template>
    <section id="projects">
        <div class="title">
            <p>Projects</p>
        </div>        
        <template v-for="(project, index) in projects" :key="index">
            <div class="project-card card-with-sidebar align-items-center mb-5" @click="navigateTo(project.link)">
                <div class="card-sidebar d-flex justify-content-center">
                    <img :src="project.image" class="w-75 border-1 rounded">
                </div>
                <div class="project-main card-main">
                    <a target="_blank" :href="project.link" class="title text-decoration-none fw-bold mb-2 d-block"><span>{{ project.title }}</span></a>
                    <p class="description mb-2">{{ project.description }}</p>
                    <div class="stack d-flex justify-content-start flex-wrap">
                        <template v-for="(stackItem, j) in project.stack" :key="j">
                            <span class="stack-badge py-1 px-2 mt-2 transform-uppercase fw-bold rounded-pill">
                                {{ stackItem }}
                            </span>
                        </template>
                    </div>
                </div>
            </div>
        </template>
    </section>
</template>
<script>
import projects from '@/data/projects';

export default {
    setup() {
        return {
            projects
        }
    },
    methods: {
        navigateTo(link) {
            window.open(link, '_blank');
        }
    }
}
</script>