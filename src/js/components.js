Vue.component('filter-component', {
    template: '<a :class="classname">{{text}}</a>',
    props: ['text', 'classname']
});
