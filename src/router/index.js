import Vue from 'vue'
import Router from 'vue-router'
import VueObserveVisibility from 'vue-observe-visibility'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(VueObserveVisibility)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
