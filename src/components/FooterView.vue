<template>
    <footer class="footer-container">
        <p class="footer-container-text">© {{ getYear }} Luis Rafael S. Octaviano</p>
    </footer>
</template>
<script>
export default {
    data () {
        return {
            getYear: ''
        }
    },
    mounted () {
        const date = new Date()
        this.getYear = date.getFullYear()
    }
}
</script>
<style scoped>
.footer-container {
    height: 100px;
    width: 100%;
    display: flex;
    font-size: 15px;
    color: #000;
    background: #FFF;
}

.footer-container-text {
    text-align: center;
    width: 100%;
    margin: auto;
}

@media only screen and (min-width: 992px) {
    .footer-container {
        font-size: 20px;
    }
}
</style>