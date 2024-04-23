<template>
    <div class="back-to-top">
        <i class="back-to-top-icon mdi mdi-chevron-up-circle"></i>
        <p class="back-to-top-text">Back to top</p>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.back-to-top {
    position: fixed;
    display: none;
    bottom: 25px;
    right: 25px;
    height: 50px;
    width: auto;
    padding: 0 25px;
    background: #18A0FB;
    border-radius: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #FFF;
    cursor: pointer;
}

.back-to-top-text {
    margin: auto;
}

.back-to-top-icon {
    margin: auto;
    margin-right: 5px;
}
</style>