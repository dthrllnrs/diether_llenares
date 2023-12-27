<template>
    <nav class="navbar d-none d-lg-block">
        <ul class="navbar-nav" v-scroll-spy-active="{selector: 'li.nav-item a.nav-link'}" v-scroll-spy-link>
            <li class="nav-item">
                <a class="nav-link about py-2 active" href="#about">
                    <span class="indicator"></span>
                    <span class="link-text">About</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link experience py-2" href="#experience">
                    <span class="indicator"></span>
                    <span class="link-text">Experience</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link projects py-2" href="#projects">
                    <span class="indicator"></span>
                    <span class="link-text">Projects</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .navbar {
        .navbar-nav {
            list-style-type: none;
            padding-left: 0;
            .nav-item {
                .nav-link {
                    display: flex;
                    justify-content: start;
                    text-decoration: none;
                    align-items: center;
                    .indicator {
                        width: 2rem;
                        height: 1px;
                        background-color: gray;
                        margin-right: 1rem;
                        transition-property: all;
                        transition-timing-function: cubic-bezier(.4,0,.2,1);
                        transition-duration: .15s;
                    }
                    .link-text {
                        font-size: .75rem;
                        text-transform: uppercase;
                        letter-spacing: .1rem;
                        font-weight: bold;
                        text-decoration: none;
                        color: gray;
                    }
                    &.active,&:hover {
                        .indicator {
                            background-color: white;
                            width: 4rem;
                        }
                        .link-text {
                            color: white;
                        }
                    }
                }
            }
        }
    }
</style>