<template>
  <form action="">
    <fieldset>
      <legend>Adicione um livro aqui</legend>
      <p>
        <label for="size_3">Livro:</label> <br>
        <input type="text" name="size" id="size_3" value="Insira o nome aqui" />
      </p>

      <p>
        <input type="submit" @click="submitForm">
      </p>
    </fieldset>
  </form>

  <fieldset>
    <legend>Lista de Livros</legend>
    <div class="cart">
      <span class="cart-counter">{{ cartItems }}</span>
      <button class="cart-button" @click="showCart = !showCart">Carrinho</button>
    </div>
    <div class="books">
      <ul>
        <li v-for="book in books" :key="book.id">
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p>{{ book.author }}</p>
            <p>R${{ book.price }}</p>
          </div>
          <button @click="addToCart(book)">Adicionar ao Carrinho</button>
        </li>
      </ul>
    </div>
    <div class="cart-overlay" v-if="showCart" @click="showCart = false"></div>
    <div class="cart-items" v-if="showCart">
      <h2>Carrinho de Compras</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          <div class="cart-item-info">
            <h3>{{ item.title }}</h3>
            <p>R${{ item.price }}</p>
          </div>
          <button @click="removeFromCart(item)">Remover</button>
        </li>
      </ul>
    </div>
  </fieldset>
</template>
<script>


export default {
  name: 'App',
  data() {
    return {
      books: [
        { id: 1, title: 'Sherlock Holmes', author: 'Sir Arthur Conan Doyle', price: 29.99 },
        { id: 2, title: 'Dom Clube da Luta', author: 'Chuck Palahniuk', price: 14.99 },
      ],
      cart: [],
      showCart: false,
    };
  },
  computed: {
    cartItems() {
      return this.cart.length;
    },
  },
  methods: {
    submitForm() {
      alert("Livro adicionado com sucesso!")
    },

    addToCart(book) {
      this.cart.push(book);
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
}

.cart {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.cart-counter {
  background-color: #ff0000;
  color: #fff;
  padding: 5px;
  border-radius: 50%;
  font-size: 12px;
  margin-right: 5px;
}

.cart-button {
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.books {
  margin-bottom: 20px;
}

.books ul {
  list-style-type: none;
  padding: 0;
}

.books li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}

.book-info h3 {
  margin: 0;
}

.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.cart-items {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  z-index: 2;
}

.cart-items h2 {
  text-align: center;
  margin-top: 0;
}

.cart-items ul {
  list-style-type: none;
  padding: 0;
}

.cart-items li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}

.cart-item-info h3 {
  margin: 0;
}

button {
  padding: 5px 10px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
