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
</template>

<script>

export default {
  name: 'App',
  methods: {
    submitForm() {
      alert('Enviado')
    }
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
</style>
