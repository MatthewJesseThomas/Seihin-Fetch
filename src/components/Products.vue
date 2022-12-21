<template>
    <table>
        <tr>
          <th>id</th>
          <th>make</th>
          <th>spec</th>
          <th>amount</th>
          <th>image</th>
        </tr>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.make }}</td>
          <td>{{ product.spec }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.image }}</td>
        </tr>
      </table>
</template>

<script>
import {mapActions, mapGetters } from 'vuex';
export default {
    computed: {
    ...mapGetters(["products"]),    
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