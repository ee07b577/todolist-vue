Vue.component('filter-component', {
    template: '<a @click="clickfn">{{text}}</a>',
    props: ['text'],
    methods: {
        clickfn: function() {
            this.$emit('filterateevent')
        }
    }
})
