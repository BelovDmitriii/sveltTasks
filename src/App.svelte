<script lang="ts">
  import Card from './lib/Currency-card.svelte'
</script>

<main>
  <div class="container">
    <Card />
  </div>
</main>

<style>
  .container {
    width: 40em;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }
</style>
