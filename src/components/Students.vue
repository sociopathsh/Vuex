<template>
    
</template>

<script>
import data from '../api/data'
export default {
    data() {
        return {
            students : []
        }
    },
    created() {
        this.students = data.getStudents();
    }
}
</script>

<style>

</style>
