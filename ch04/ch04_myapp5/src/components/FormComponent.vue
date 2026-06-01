<template>
<from @sumbmit.prevent="submitForm">
    <label for = "name">Name:</label>
    <input type="text" id="name" v-model="formData.name" />
    <label for = "email">Email:</label> 
    <input type="email" id="email" v-model="formData.email" />
    <button type="submit" class="button">Submit</button>

</from>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>