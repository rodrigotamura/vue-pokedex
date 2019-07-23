Vue.component('homepage', {
    template: `
        <div>
            <input type="text" id="pokeFilter" v-model="$parent.nameFilter" v-focus placeholder="Search..." maxlength="20" />
            <ul>
                <my-list v-for="item in $parent.pokeList" :pokemon="item" :key="item.number"></my-list>
            </ul>
        </div>`
});