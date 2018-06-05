<template>
    <ul>
        <li v-for="student in students" v-bind:key="student.id">
            {{ student.name }}
            <i>{{ student.char.length }} characters he has.</i>
            <button>Team A</button>
            <button>Team B</button>
        </li>
    </ul>
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
