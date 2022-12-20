<!-- <template>
    <table>
        <tr>
          <th>id</th>
          <th>make</th>
          <th>spec</th>
          <th>amount</th>
          <th>image</th>
        </tr>
        <tr v-for="product in Products" :key="product.make">
          <td>{{ product.id }}</td>
          <td>{{ product.make }}</td>
          <td>{{ product.spec }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.image }}</td>
        </tr>
      </table>
</template>

<script>
import { mapActions } from 'vuex';
export default {
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
    max-width: 600px;
}

td,th {
    border: 1px solid #333;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd ; 
}
</style> -->