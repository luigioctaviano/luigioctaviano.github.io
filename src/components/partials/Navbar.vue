<template>
    <b-navbar class="navbar-container" id="NavigationBar">
        <template slot="brand">
            <b-navbar-item class="navbar-title" tag="router-link" :to="{ path: '/' }">
                <strong>&lt;Luigi/&gt;</strong>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <b-navbar-item href="#about">
                    About Me
                </b-navbar-item>
                <b-navbar-item href="#">
                    My Works
                </b-navbar-item>
                <div class="buttons">
                    <a class="button is-primary is-rounded">
                        <strong>Get in touch!</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style scoped>

</style>