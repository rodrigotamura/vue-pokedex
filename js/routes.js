const routes = [
    { path: '/', component: Vue.component('homepage') },
    { path: '/:number', component: Vue.component('about-page') }
]

// Initiating routing
const myRouter = new VueRouter({ routes });

// Preventing unknown number of Pokemon
myRouter.beforeEach((to, from, next) => {
    if(to.path !== '/'){
        var pkmNumber = to.path.slice(1); // getting number
        
        if(!pkmNumber.match(/\D/g)){ // checking if it is a number
            next();
        }else{
            next('/');
        }

    }else{
        next();
    }
})