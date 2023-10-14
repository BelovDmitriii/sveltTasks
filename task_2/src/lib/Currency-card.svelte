<script lang="ts">
  import API_KEY from '../consts/consts.ts';

  let amount = 0;
  let convertFrom = 'USD';
  let convertTo = 'RUB';
  let finalAmount = 0;
  let API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${convertFrom}`;

  let currencyList = [
    {name:"USD", desc:"USD - Доллар США"},
    {name:"EUR", desc:"EUR - Евро"},
    {name:"RUB", desc:"RUB - Рубли"}
  ];

  async function handleToCurrencyChange() {
    finalAmount = 0.00;
    await fetch(API_URL).then( response => {
      return response.json();
    })
    .then( data => {
      
      let rate = data.conversion_rates[convertTo];
      finalAmount = rate * amount;
    })
  }

</script>

<div class="card">
  <form>
    <h1 class="container__title">Конвертер валют</h1>

    <div class="row">
      <div class="column">
        <label for="name">Отдам:</label>
        <select
          class="form__select"
          id="input"
          bind:value={convertFrom}
          on:change={handleToCurrencyChange}
        >
          {#each currencyList as cl }
            <option value="{cl.name}">
                {cl.desc}
            </option>
          {/each}
        </select>
      </div>
      <div class="column">
        <label for="name">Получу:</label>
        <select
          id="result"
          class="form__select"
          bind:value={convertTo}
          on:change={handleToCurrencyChange}
        >
          {#each currencyList as cl }
            <option value="{cl.name}">
              {cl.desc}
            </option>
          {/each}
        </select>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <input
          id="input"
          type="number"
          class="form__control"
          autofocus
          bind:value="{amount}"
          on:change={handleToCurrencyChange}
        />
      </div>
      <div class="column">
        <input
          id="result"
          type="number"
          class="form__control"
          bind:value="{finalAmount}"
          on:change={handleToCurrencyChange}
        />
      </div>
    </div>
  </form>
  <div class="description"> {amount} {convertFrom} соответствуют {finalAmount} {convertTo}</div>
</div>

<style>
  .container__title {
    color: darkcyan;
    margin: 0;
  }

  .row{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 20px;
  }

  .form__select {
    font-size: 17px;
    background-color: #eae1e1;
    height: 5vh;
  }
  .form__control {
    font-size: 20px;
    background-color: #eae1e1;
    border-radius: 10px;
    margin-top: 20px;
    text-align: center;
  }

  .description {
    margin-top: 20px;
    font-size: 20px;
    color: grey;
  }
</style>