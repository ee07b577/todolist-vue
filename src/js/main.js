    var app = new Vue({
        el: '#app',
        data: {
            todolist: [{
                title: '完成todolist简单demo',
                done: true
            }, {
                title: '拆分出组件',
                done: false
            }, {
                title: '尝试使用vuex',
                done: false
            }, {
                title: '尝试转战webpack',
                done: false
            }],
            newTodo: '',
            showlist: [],
            filters: ['all', 'done', 'notDone']
        },
        computed: {

        },
        created() {
            this.showlist = this.todolist
        },
        methods: {
            add() {
                this.todolist.push({
                    title: this.newTodo,
                    done: false
                })
                this.newTodo = ''
            },
            tagDone(index) {
                this.todolist[index].done = true
            },
            filtrate(filterStr) {
                switch (filterStr) {
                    case 'all':
                        this.showlist = this.todolist
                        break;
                    case 'done':
                        this.showlist = this.todolist.filter((todo) => {
                            return todo.done
                        })
                        break;
                    default:
                        this.showlist = this.todolist.filter((todo) => {
                            return !todo.done
                        })
                }
            }
        }
    })
