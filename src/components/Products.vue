<template>

<div class="container">
    <h1>Productos</h1>

    <input v-model="searchQuery"  class="mt-5 form-control" placeholder="Buscar Productos">
    <p>{{ searchQuery }}</p>

    <ul>
        <li v-for="product in filterProduct" :key="product.id">
        {{ product.nombre }} - ${{ product.precio }}</li>
    </ul>

</div>
</template>

<script>
import productService from '@/services/Api';

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
            }).catch (error => console.log(error))
        }
    },
    computed: {
        filterProduct() {
            const result = this.products.filter(product => product.titulo.toLowerCase().includes(this.searchQuery.toLowerCase()));
            console.log(result)
            return result

        }
    },

        created() {
            this.loadProducts();
    }
}
</script>