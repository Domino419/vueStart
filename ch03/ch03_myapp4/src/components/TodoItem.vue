<template>
    <li class="pure-menu-item">
       <sapn> {{ todo.text }}</sapn>>
       <buttton @click ="remove" class="pure-button pure-button-error"> remove</buttton>
    </li>
</template>

<script>
export default {
  props: {
    todo: { type: Object, required: true },
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const remove = () => {
      emit('remove', props.todo.id); // props.todo로 접근해야 함
    };
    return { remove };
  },
};
</script>

<style scoped>
.pure-menu-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

</style>