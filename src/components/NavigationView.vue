<template>
    <div class="navigation-container">
        <nav class="navbar-container" id="navbarContainer">
            <div class="navbar-logo">
                <a href="#home">
                    <img class="navbar-logo-icon logo-hero" src="../assets/images/logo/logo-hero.svg" />
                    <img class="navbar-logo-icon logo-navi" src="../assets/images/logo/logo-navi.svg" />
                </a>
            </div>
            <div id="hamburgerIcon" @click="toggleNav()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul id="navbarList" class="navbar-list">
                <li class="navbar-item">
                    <a @click="closeNav()" class="navbar-link" href="#aboutMyself">About Myself</a>
                </li>
                <li class="navbar-item">
                    <a @click="closeNav()" class="navbar-link" href="#whatIdo">What I Do?</a>
                </li>
                <li class="navbar-item">
                    <a @click="closeNav()" class="navbar-link" href="#myWorks">My Works</a>
                </li>
                <li class="navbar-item-button">
                    <button @click="redirectContact()" class="navbar-button">Get in touch</button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    mounted () {
        window.onscroll = function() {
            const nav = document.getElementById('navbarContainer')
            
            if ( window.pageYOffset > 100 ) {
                nav.classList.add('fixed')
                nav.classList.remove('on-hero')
            } else {
                if (nav.classList.contains('fixed')) {
                    nav.classList.add('on-hero')
                }

                nav.classList.remove('fixed')
            }
        }
    },
    methods: {
        redirectContact() {
            location.href = '#getInTouch'
            this.closeNav()
        },
        closeNav () {
            const nav = document.getElementById('navbarContainer')
            nav.classList.remove('mobile-toggle')

            const hamburger = document.getElementById('hamburgerIcon')
            hamburger.classList.remove('open')

            const navList = document.getElementById("navbarList")
            navList.classList.remove('active')
        },
        toggleNav () {
            const nav = document.getElementById('navbarContainer')
            nav.classList.toggle('mobile-toggle')

            const hamburger = document.getElementById('hamburgerIcon')
            hamburger.classList.toggle('open')

            const navList = document.getElementById("navbarList")
            navList.classList.toggle('active')
        }
    }
}
</script>
<style scoped>
    #navbarContainer.fixed #hamburgerIcon span {
        background: #000;
    }

    .navbar-container {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        padding: 15px 30px;
        width: 100%;
        background: transparent;
        border-bottom: 1px solid transparent;
        z-index: 5;
    }

    .navbar-container.on-hero {
        animation: revert-color 0.2s both;
    }

    @keyframes revert-color {
        0% {
            background-color: #FFFFFF;
            border-bottom: 1px solid #000000;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        100% {
            background-color: transparent;
            border-bottom: 1px solid transparent;
            box-shadow: none;
        }
    }

    .navbar-container.fixed {
        animation: change-color 0.2s both;
    }

    .navbar-container.mobile-toggle {
        animation: change-color 0.2s both;
    }

    @keyframes change-color {
        0% {
            background-color: transparent;
            border-bottom: 1px solid transparent;
            box-shadow: none;
        }
        100% {
            background-color: #FFFFFF;
            border-bottom: 1px solid #000000;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }

    .navbar-container.fixed .navbar-item a {
        color: #000000;
    }

    .navbar-list {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        margin-left: auto;
    }

    .navbar-item {
        margin-right: 25px;
        display: inline-grid;
    }

    .navbar-item-button {
        margin-right: 25px;
        display: flex;
    }

    .navbar-item:after {
        content: "";
        background: #FFFFFF;
        position: relative;
        bottom: 0;
        left: 0;
        height: 30%;
        width: 0;
    }

    .navbar-container.fixed .navbar-item:after {
        background: #000000;
    }


    .navbar-item:hover {
        font-weight: bold;
    }

    .navbar-item a {
        text-decoration: none;
        color: #FFFFFF;
        margin-top: 7px;
        margin-bottom: auto;
    }

    .navbar-button {
        background: #18A0FB;
        border-radius: 35px;
        border: 1px solid #18A0FB;
        color: #FFFFFF;
        font-family: inherit;
        padding: 10px 18px;
        cursor: pointer;
    }

    .navbar-list {
        display: none;
    }

    .contact-buttons {
        display: flex;
        flex-direction: column;
    }

    .navbar-logo {
        display: flex;
    }

    .navbar-logo-icon {
        height: 40px;
        width: auto;
        margin: auto;
        margin-left: 0;
        position: absolute;
        top: 16px;
        left: 24px;
    }

    .navbar-container .navbar-logo .logo-navi {
        opacity: 0;
        transition: opacity 0.3s;
    }

    .navbar-container.fixed .navbar-logo .logo-navi {
        opacity: 1;
    }

    @media only screen and (min-width: 768px) {
        .contact-buttons { 
            flex-direction: row;
        }
    }

    @media only screen and (max-width: 991px) {
        .navbar-list.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            width: 100%;
            top: 76px;
            background: #FFF;
            color: #000;
            padding: 0;
            right: 0;
            animation: change-color-list 0.5s both;
        }

        .navbar-list.active .navbar-item-button .navbar-button {
            width: 100%;
        }

        @keyframes change-color-list {
            0% {
                opacity: 0;
            }
            40% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        .navbar-container.mobile-toggle #hamburgerIcon span {
            background: #000;
        }

        .navbar-container .navbar-list.active .navbar-item,
        .navbar-container .navbar-list.active .navbar-item-button {
            padding: 15px 25px;
            text-align: center;
        }

        .navbar-container .navbar-list.active .navbar-item {
            border-bottom: 1px solid #000;
            margin-right: 0;
        }

        .navbar-container .navbar-list.active .navbar-item-button {
            border-bottom: 1px solid transparent;
            margin-right: 0;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .navbar-container .navbar-list.active .navbar-item a {
            color: #000000;
        }
    }

    @media only screen and (min-width: 992px) {
        .navbar-logo-icon {
            height: 45px;
            top: 12px;
            left: 30px;
        }

        .navbar-list {
            display: flex;
        }

        #hamburgerIcon {
            display: none;
        }

        .navbar-item:hover:after {
            animation: add-border-bottom 0.3s both;
        }

        .navbar-item:not(:hover):after {
            margin-left: auto;
            animation: remove-border-bottom 0.3s both;
        }

        @keyframes add-border-bottom {
            0% {
                height: 30%;
                width: 0;
            }
            100% {
                height: 30%;
                width: 100%;
            }
        }

        @keyframes remove-border-bottom {
            0% {
                height: 30%;
                width: 100%;
            }
            100% {
                height: 30%;
                width: 0;
            }
        }
    }
</style>