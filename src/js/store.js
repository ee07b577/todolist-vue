const store = new Vuex.Store({
    state: {
        todolist: [{
            title: '完成todolist简单demo',
            done: true
        }, {
            title: '拆分出组件',
            done: true
        }, {
            title: '修复不同标签下不能点击完成的bug',
            done: true
        }, {
            title: '尝试使用vuex',
            done: true
        }, {
            title: '尝试转战webpack',
            done: false
        }]
    },
    getters: {},
    mutations: {
        add(state, todo) {
            state.todolist
                .push(todo)
        },
        changeCurrentFilter(state, filter) {
            state.currentFilter = filter
        },
        toggleDone(state, index) {
            state.todolist[index].done = !state.todolist[index].done
        }
    }
})
