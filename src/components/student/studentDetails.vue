<template>
  <div>
    <h1>{{ studentName }}</h1>
    <ul v-for="(key, detail) in details" :key="key">
      <li>{{ detail }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StudentDetails",
  props: {
    studentName: String,
    details: Array
  }
};
</script>

<style lang="sass" scoped>
$name-bg: #175a33;

ul {
    list-style-type: none;
}
</style>