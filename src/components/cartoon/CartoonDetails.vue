<template>
    <div>gfhfhfgjghtryrtuyy
        <h3>{{cartoon}}sdfsdafsd</h3>
    </div>
</template>

<script lang="ts">
import { inject } from 'vue';

    export default {
        setup() {
            const cartoon = inject('cartoon')
            return {cartoon}
        }
    }
</script>

<style scoped>

</style>