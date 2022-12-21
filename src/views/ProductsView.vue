<template>
    <div class="container">
        <div class="row">
            <h1 class="display-1">Products</h1>
            <table>
                <tr>
                  <th>Id</th>
                  <th>Make</th>
                  <th>Spec</th>
                  <th>Amount</th>
                  <th>Image</th>
                </tr>
                <tr v-for="products in products" :key="products.id">
                  <td>{{ products.id }}</td>
                  <td>{{ products.make }}</td>
                  <td>{{ products.spec }}</td>
                  <td>{{ products.amount }}</td>
                  <td>{{ products.image }}</td>
                </tr>
              </table>
        </div>   
    </div>
</template>

<script>
import {mapActions, mapGetters } from 'vuex';
export default {
    computed: {
    ...mapGetters["products"],    
    },
    methods: {
    ...mapActions(["fetchAllProducts"]),
    },
    created() {
        this.fetchAllProducts();
    },
};
</script>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 30rem;
    margin: auto;
    align-content: center;
    justify-content: center;
}

td,th {
    border: 1px solid #333;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd ; 
}
</style>