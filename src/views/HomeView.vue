<template>
    <Navbar />
    <Products/>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import Products from '@/components/Products.vue'
export default {
    name: 'home',
    components: {
        Navbar,
        Products
    }
}
</script>

<style></style>

