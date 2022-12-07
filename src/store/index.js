import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  }, // estado da aplicação global
  mutations: {
    SET_TODO: (state, todos) => {
      state.todos = todos
    }
  }, // mutações do estado
  actions: {
    fetchTodos(context) {
      const todos = [
        { id: 1, text: 'Estudar HTML & CSS', done: true },
        { id: 2, text: 'Conceitos Vuex', done: true },
        { id: 3, text: 'Atomic Design', done: false },
        { id: 4, text: 'Começar com Nuxt', done: false },
        { id: 5, text: 'Back-end com Adonis', done: false }
      ]

      context.commit('SET_TODO', todos)
    }
  }, // ações que podem ser disparadas
  getters: {
    $allTodos: (state) => state.todos, // todos
    $doneTodos: (state) => state.todos.filter((todo) => todo.done) // todos feitos
  } // getters que podem ser usados
})

// state é o estado da aplicação
// mutations são as mutações do estado
// actions são as ações que podem ser disparadas
// getters são os getters que podem ser usados (é uma função que retorna um valor)
