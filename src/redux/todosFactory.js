import api from '../API'

var todosFactory = {

    set: (todos) => {
        var action = {
            type:'SET_TODOS',
            payload:todos
        }
        return action
    },

    load : () => {
        var thunk = (dispatch) => {

            api.getTodos()
            .then(res => {
                var todos = res.data
                dispatch(todosFactory.set(todos))
            })
        }

        return thunk
    },

    add : (todo) => {
        var action = {
            type:'ADD_TODO',
            payload:todo
        }
        return action
    },
    remove : (id) => {
        var action = {
            type:'REMOVE_TODO',
            payload:id
        }
        return action
    },

}

export default todosFactory