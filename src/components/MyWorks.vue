<template>
    <section class="work-container" id="myWorks">
        <div class="work-header-container">
            <h4 class="work-header-title">My Works</h4>
            <p class="work-header-subtitle">Here are some of the works that I created</p>
        </div>
        <div class="work-carousel-container" id="carouselContainer">
            <div class="work-carousel-prev">
                <button v-if="!(counter === 0)" class="work-carousel-nav-buttons" @click="changePrev">
                    <i class="mdi mdi-chevron-left-circle"></i>
                </button>
            </div>
            <div class="work-carousel-items">
                <div :class="`work-carousel-item ${content.isActive ? activeType : ''}`" v-for="content, index in whatContents" :key="index">
                    <div class="work-carousel-item-text">
                        <h4 class="work-carousel-item-title">{{ content.title }}</h4>
                        <br>
                        <p class="work-carousel-item-description">{{ content.description }}</p>
                    </div>
                    <div class="work-carousel-item-thumbnail">
                        <img :src="getImageURL(content.thumbnail)" />
                    </div>
                </div>
            </div>
            <div class="work-carousel-next">
                <button v-if="!(whatContents.length === (counter + 1))" class="work-carousel-nav-buttons" @click="changeNext">
                    <i class="mdi mdi-chevron-right-circle"></i>
                </button>
            </div>
        </div>
        <div class="work-carousel-indicator">
            <ol class="work-carousel-circles">
                <li @click="changeSelected(index)" v-for="content, index in whatContents" :key="index" :class="`work-carousel-circle ${content.isActive ? 'active' : ''}`"></li>
            </ol>
        </div>
    </section>
</template>
<script>
export default {
    name: 'MyWorks',
    data() {
        return {
            counter: 0,
            activeType: 'active',
            touchXPosBegin: 0,
            touchXPosEnd: 0,
            isCarouselVisible: false,
            whatContents: [
                {
                    title: 'Philippine Collegian',
                    description: 'My teammates and I were responsible in creating the website of Philippine Collegian, the official student publication of University of the Philippines.',
                    thumbnail: 'phkule',
                    url: '',
                    isActive: true
                },
                {
                    title: 'This Website',
                    description: 'Believe it or not, this is my first portfolio website that I created after being in the industry for more than half a decade. No joke.',
                    thumbnail: 'luigi-site',
                    url: '',
                    isActive: false
                }
            ]
        }
    },
    mounted () {
        const that = this
        const observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                that.isCarouselVisible = true;
                document.addEventListener('touchstart', e => {
                    that.touchXPosBegin = e.changedTouches[0].screenX
                })

                document.addEventListener('touchend', e => {
                    that.touchXPosEnd = e.changedTouches[0].screenX
                    that.handleSwipe()
                })
            } else {
                that.isCarouselVisible = false;
            }
        }, { 
            threshold: [1] 
        });

        observer.observe(document.querySelector("#carouselContainer"));
    },
    methods: {
        changePrev () {
            if (this.counter !== 0) {
                this.whatContents[this.counter].isActive = false
                this.counter -= 1
                this.whatContents[this.counter].isActive = true
                this.activeType = 'active-prev'
            } 
        },
        changeNext () {
            if (this.whatContents.length !== (this.counter + 1)) {
                this.whatContents[this.counter].isActive = false
                this.counter += 1
                this.whatContents[this.counter].isActive = true
                this.activeType = 'active-next'
            }
        },
        changeSelected (selected) {
            if (selected > this.counter) {
                this.activeType = 'active-next'
            } else {
                this.activeType = 'active-prev'
            }

            this.whatContents[this.counter].isActive = false
            this.counter = selected
            this.whatContents[this.counter].isActive = true
        },
        getImageURL (filename) {
            return new URL(`../assets/images/myworks/${filename}.png`, import.meta.url).href;
        },
        handleSwipe () {
            if (this.isCarouselVisible) {
                if (this.touchXPosEnd < this.touchXPosBegin) {
                    this.changeNext()
                } else if (this.touchXPosEnd > this.touchXPosBegin) {
                    this.changePrev()
                }
            }
        }
    }
}
</script>
<style scoped>
.work-container {
  background: #FFFFFF;
  min-height: 100vh;
  display: block;
  color: #000;
  flex-direction: column;
  z-index: 7;
}

.work-header-container,
.work-carousel-container {
    width: 100%;
}

.work-header-container {
    text-align: center;
    padding: 75px 0;
    width: 100%;
}

.work-carousel-container {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
}

.work-carousel-prev {
    width: 15%;
    display: flex;
}

.work-carousel-items {
    width: 70%;
    padding: 0 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    min-height: 500px;
}

.work-carousel-next {
    width: 15%;
    display: flex;
}

.work-carousel-item {
    height: 100%;
    display: none;
}

.work-carousel-item.active,
.work-carousel-item.active-prev,
.work-carousel-item.active-next {
    display: flex;
    flex-direction: column-reverse;
}

.work-carousel-item.active-prev {
    animation: slide-left 0.7s both;
}

@keyframes slide-left {
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.work-carousel-item.active-next {
    animation: slide-right 0.7s both;
}

@keyframes slide-right {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}


.work-header-title {
    font-weight: bold;
    font-size: 30px;
}

.work-header-subtitle {
    font-weight: normal;
    font-size: 20px;
}

.work-carousel-item-title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}

.work-carousel-item-description {
    font-size: 15px;
    text-align: center;
}

.work-carousel-item-text {
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 20px 10px;
}

.work-carousel-item-text,
.work-carousel-item-thumbnail {
    width: 100%;
}

.work-carousel-item-thumbnail {
    display: flex;
}

.work-carousel-item-thumbnail img {
    width: 100%;
    height: auto;
    margin: auto;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.work-carousel-nav-buttons {
    background: transparent;
    border: 0;
    font-size: 30px;
    cursor: pointer;
    margin: auto;
}

.work-carousel-indicator {
    display: flex;
}

.work-carousel-circles {
    display: flex;
    flex-direction: row;
    margin: 75px auto;
    overflow-x: hidden;
    width: 75px;
}

.work-carousel-circle {
    list-style-type: circle;
    font-size: 30px;
    margin-right: 30px;
    cursor: pointer;
}

.work-carousel-circle.active {
    list-style-type: disc;
    font-size: 30px;
    margin-right: 30px;
}

@media only screen and (min-width: 375px) {
    .work-header-container {
        padding: 75px 65px;
    }
}

@media only screen and (min-width: 992px) {
    .work-header-title {
        font-size: 48px;
    }

    .work-header-subtitle {
        font-size: 32px;
    }

    .work-carousel-items {
        min-height: 330px;
    }

    .work-carousel-item-thumbnail img {
        width: auto;
        max-height: 330px;
    }

    .work-carousel-item-text {
        padding: 10px;
    }
}

@media only screen and (min-width: 1200px) {
    .work-carousel-item.active,
    .work-carousel-item.active-prev,
    .work-carousel-item.active-next {
        flex-direction: row;
    }

    .work-carousel-item {
        height: 400px;
    }

    .work-carousel-item-title {
        font-size: 48px;
        text-align: left;
    }

    .work-carousel-item-description {
        font-size: 16px;
        text-align: left;
    }

    .work-carousel-prev {
        width: 5%;
    }

    .work-carousel-items {
        width: 90%;
    }

    .work-carousel-next {
        width: 5%;
    }

    /* .work-carousel-item-text,
    .work-carousel-item-thumbnail {
        width: 50%;
    } */
}
</style>