import {createRouter, createWebHashHistory} from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import BuildPcPage from '@/views/BuildPC/BuildPCPage.vue';
import SearchPage from '@/views/SearchFlow/SearchPage.vue';
import BrowseTutorialPage from '@/views/TutorialFLow/BrowseTutorialPage.vue';
import EnlargedVidTutorialPage from '@/views/TutorialFLow/EnlargedVidTutorialPage.vue';


const routes = [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/build',
        component: BuildPcPage
    },
    {
        path: '/search',
        component: SearchPage
    },
    {
        path: '/tutorials',
        component: BrowseTutorialPage
    },
    {
        path: '/tutorial/video',
        component: EnlargedVidTutorialPage
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;