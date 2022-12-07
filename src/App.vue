<template>
  <ul>
    <li v-for="todo in $allTodos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    $allTodos() {
      return this.$store.getters.$allTodos
    }
  },
  created() {
    this.$store.dispatch('fetchTodos')
  }
}
</script>
