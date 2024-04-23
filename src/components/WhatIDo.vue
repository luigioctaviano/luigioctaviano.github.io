<template>
    <section class="what-container" id="whatIdo">
        <div class="what-header-container">
            <h4 class="what-header-title">What I do?</h4>
            <p class="what-header-subtitle">Here are the things that I do currently</p>
        </div>
        <div class="what-contents-container">
            <div class="what-contents">
                <!-- Looped Items -->
                <div v-for="item, index in whatContents" :key="index" class="what-content" @click="toggleContent(item)">
                    <div class="what-content-texts">
                        <div class="what-content-clickable">
                            <div class="what-content-icon">
                                <div class="what-icon-container">
                                    <i :class="`what-icon mdi ${item.icon}`"></i>
                                </div>
                            </div>
                            <div class="what-content-title">
                                <p>{{ item.title }}</p>
                                <i :class="`mdi mdi-chevron-down-circle ${item.isHidden ? 'hide' : 'show' }`"></i>
                            </div>
                        </div>
                        <span :class="`what-divider ${item.isHidden ? 'hide' : 'show' }`"></span>
                        <div :class="`what-content-expanded ${item.isHidden ? 'hide' : 'show' }`">
                            <div class="what-content-description">{{ item.description }}</div>
                            <br>
                            <p>Development tools used:</p>
                            <div class="what-content-devtools">
                                <i v-for="devtool, index in item.devtools" :key="index" :class="`devicon-${devtool}`"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'WhatIDo',
    data() {
        return {
            whatContents: [
                {
                    icon: 'mdi-palette',
                    title: 'Front-End Development',
                    description: 'I am responsible in creating the aesthetics of a website and ensures that the web applications that I create works on all devices - whether it is on PC or on Mobile. Lastly, I can do Progressive Web Apps as well.',
                    devtools: ['html5-plain-wordmark colored', 'css3-plain-wordmark colored', 'javascript-plain colored', 'php-plain colored', 'vuejs-plain-wordmark colored', 'vuetify-plain colored', 'wordpress-plain colored' ],
                    isHidden: true
                },
                {
                    icon: 'mdi-application-braces-outline',
                    title: 'Back-End Development',
                    description: 'Aside from Front-End development, I can do Back-end tasks as well. I usually use Laravel framework in creating Back-end projects.',
                    devtools: ['php-plain colored', 'laravel-original colored', 'mysql-original colored', 'wordpress-plain colored'],
                    isHidden: true
                },
                {
                    icon: 'mdi-web',
                    title: 'SEO',
                    description: 'I am responsible in optimizing our public-based website projects so that it can be indexed properly by the search engines. I follow the standard SEO practices to make things work.',
                    devtools: ['html5-plain-wordmark colored', 'googlecloud-plain'],
                    isHidden: true
                }
            ]
        }
    },
    methods: {
        toggleContent (item) {
            item.isHidden = !item.isHidden
        }
    }
}
</script>
<style scoped>
.what-container {
  background: #F5F5F5;
  min-height: 100vh;
  display: block;
  color: #000;
  border-top: 2px dashed #000;
  border-bottom: 2px dashed #000;
  flex-direction: column;
}

.what-header-container,
.what-contents-container {
    width: 100%;
}

.what-contents {
    margin: auto;
    max-width: 825px;
    padding: 0px 25px;
}

.what-header-container {
    text-align: center;
    padding: 75px 0;
}

.what-header-title {
    font-weight: bold;
    font-size: 30px;
}

.what-header-subtitle {
    font-weight: normal;
    font-size: 20px;
}

.what-content {
    display: flex;
    flex-direction: row;
    margin: 40px 0;
}

.what-content-clickable {
    display: flex;
    flex-direction: row;
}

.what-content-icon {
    width: 100px;
    margin-right: 40px;
}

.what-icon-container {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: #D9D9D9;
    display: flex;
}

.what-icon {
    font-size: 35px;
    margin: auto;
}

.what-content-title {
    margin: auto;
    cursor: pointer;
    display: flex;
    font-size: 15px;
    width: 100%;
    display: flex;
}

.what-content-title i {
    float: right;
    margin-left: auto;
}

.what-divider {
    display: block;
    height: 4px;
    background: #000;
    width: 0%;
    margin: 25px 0;
    border-radius: 50px;
    animation: remove-what-border-bottom 0.5s both;
}

.what-divider.show {
    animation: add-what-border-bottom 0.5s both;
}

.what-divider.hide {
    margin-left: auto;
    animation: remove-what-border-bottom 0.5s both;
}

@keyframes remove-what-border-bottom {
    0% {
        height: 4px;
        width: 100%;
    }
    100% {
        height: 4px;
        width: 0;
    }
}

@keyframes add-what-border-bottom {
    0% {
        height: 4px;
        width: 0;
    }
    100% {
        height: 4px;
        width: 100%;
    }
}

.what-content-texts {
    width: 100%;
}

.what-content-expanded {
   display: block;
   overflow: hidden;
}

.what-content-devtools {
    font-size: 30px;
}

.what-content-devtools i { 
    margin-right: 10px;
}

.what-content-expanded.show {
    animation: expand-content 0.5s both;
}

.what-content-expanded.hide {
    animation: hide-content 0.5s both;
}

.what-content-title .mdi-chevron-down-circle.show:before {
    animation: invert-caret 0.5s both;
}

.what-content-title .mdi-chevron-down-circle.hide:before {
    animation: revert-caret 0.5s both;
}

@keyframes invert-caret {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(180deg);
    }
}

@keyframes revert-caret {
    0% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(0);
    }
}

@keyframes expand-content {
    0% {
        max-height: 0px;
        opacity: 0;
    }
    100% {
        max-height: 500px;
        opacity: 1;
    }
}

@keyframes hide-content {
    0% {
        max-height: 500px;
        opacity: 1;
    }
    100% {
        max-height: 0;
        opacity: 0;
    }
}



.caret-up:before {
    transform: rotate(180deg);
}


@media only screen and (min-width: 425px) {
    .what-content-title {
        font-size: 18px;
    }
}

@media only screen and (min-width: 992px) {
    .what-contents { 
        padding: unset;
    }
    .what-header-title {
        font-size: 48px;
    }

    .what-header-subtitle {
        font-size: 32px;
    }

    .what-icon-container {
        width: 100px;
        height: 100px;
    }

    .what-icon {
        font-size: 50px;
    }

    .what-content-title {
        font-size: 20px;
        margin-top: 35px;
    }
}
</style>