var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        filters: [{
            text: 'all',
            isActive: true
        }, {
            text: 'done',
            isActive: false
        }, {
            text: 'notDone',
            isActive: false
        }],
        currentFilter: 0
    },
    store,
    computed: {
        todos() {
            return this.parseArrToObj(this.$store.state.todolist)
        },
        dones() {
            let todos = this.todos
            let ret = {}
            for (let key in todos) {
                if (todos[key].done) {
                    ret[key] = todos[key]
                }
            }
            return ret
        },
        notdones() {
            let todos = this.todos
            let ret = {}
            for (let key in todos) {
                if (!todos[key].done) {
                    ret[key] = todos[key]
                }
            }
            return ret
        },
        showlist() {
            switch (this.currentFilter) {
                case 0:
                    return this.todos
                    break;
                case 1:
                    return this.dones
                    break;
                default:
                    return this.notdones
            }
        }
    },
    created() {
        // this.showlist = this.todos
    },
    methods: {
        parseArrToObj(arr) {
            let result = {}
            for (let i = 0, len = arr.length; i < len; i++) {
                result[i] = arr[i]
            }
            return result
        },
        add() {
            this
                .$store.commit('add', {
                    title: this.newTodo,
                    done: false
                })
            this.newTodo = ''
        },
        toggleDone(index) {
            this.$store.commit('toggleDone', index)
                // todo: 刷新待实现
        },
        filtrate(key) {
            this.currentFilter = key
            this.filters = this.filters.map(function(item) {
                item.isActive = false
                return item
            })
            this.filters[key].isActive = true

        }
    }
});
