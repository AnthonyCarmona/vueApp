<template>
    <p>Server Status: {{}}</p>
    <hr>
    <button @click ="changeStatus">Change Status</button>
</template>

<script>
    export default {
        data: function () {
            return {
                status:"critical"
            }
        },
        methods: {
            changeStatus() {
                this.status ="normal";
            }
        }
    }
</script>