<template>
    <h1>Productos</h1>

    <input class="form-control" placeholder="Buscar Productos">
    <p>{{ searchQuery }}</p>
</template>

<script>
import productService from '@/service/Api';

export default {
    name: 'Products',
    data() {
        return {
            products:[],
            searchQuery: ''
        };
    },
    methods: {
        loadProducts() {
            productService.all()
            .then(data => {
                this.products = data;
                console.log(this.products);
            })
        }
    },
    created() {
        this.loadProducts();
    }
}
</script>