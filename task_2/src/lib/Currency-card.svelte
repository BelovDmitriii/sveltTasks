<script lang="ts">
  import { onMount } from 'svelte';
  import API_KEY from '../consts/consts';
  import Loader from './Loader.svelte';

  let isLoading = false;
  let amount:number = 1;
  let finalAmount:number = 1;
  let convertFrom:string = '';
  let convertTo = '';
  let currencyList:string[] = [];
  let currencyDescription:string[] = [];
  let rate = 1;
  let API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/`;

  async function getCurrencies(currency: string) {
    const response = await fetch(API_URL + 'latest/' + currency);
    return await response.json();
  }

  async function getCodes() {
    const res = await fetch(API_URL + 'codes');
    return await res.json();
  }

  async function calculateCurrencyTo() {
    const data = await getCurrencies(convertFrom);
    rate = data.conversion_rates[convertTo];
    finalAmount = (rate * amount).toFixed(2);
  }

  async function calculateCurrencyFrom() {
    const data = await getCurrencies(convertTo);
    rate = data.conversion_rates[convertFrom];
    amount = (rate * finalAmount).toFixed(2);
  }

  function getDescription(descr:string[]) {
    let obj = descr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
    }, {});
    return obj;
  };

  onMount(async () => {
    isLoading = true;
    const data = await getCurrencies("USD");
    const descr = await getCodes();
    currencyDescription = getDescription(descr.supported_codes);
    currencyList = Object.keys(data.conversion_rates);
    currencyList.sort((a, b) => (a < b ? -1 : 1));
    convertFrom = currencyList[0];
    convertTo = currencyList[0];
    isLoading = false;
  });
</script>

<div class="card">
  {#if isLoading}
    <Loader />
  {:else}
  <form>
    <h1 class="container__title">Конвертер валют</h1>

    <div class="row">
      <div class="column">
        <label for="name">Отдам:</label>
        <select
          class="form__select"
          id="input"
          bind:value={convertFrom}
          on:change={calculateCurrencyTo}
        >
          {#each currencyList as currency }
            <option value={currency}>
              {currency} - {currencyDescription[currency]}
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
          on:change={calculateCurrencyFrom}
        >
          {#each currencyList as currency }
            <option value={currency}>
              {currency} - {currencyDescription[currency]}
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
          bind:value="{amount}"
          on:change={calculateCurrencyTo}
        />
      </div>
      <div class="column">
        <input
          id="result"
          type="number"
          class="form__control"
          bind:value="{finalAmount}"
          on:change={calculateCurrencyFrom}
        />
      </div>
    </div>
  </form>
  <div class="description"> {amount} {convertFrom} соответствуют {finalAmount} {convertTo}</div>
  {/if}
</div>

<style>
  .container__title {
    color: darkcyan;
    margin: 0;
  }

  .column {
    width: 50%;
  }

  .row{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    font-size: 20px;
  }

  .form__select {
    font-size: 17px;
    background-color: #eae1e1;
    height: 5vh;
    max-width: 60%;
  }
  .form__control {
    font-size: 20px;
    background-color: #eae1e1;
    border-radius: 10px;
    margin-top: 20px;
    text-align: center;
    padding: 5px;
  }

  .description {
    margin-top: 20px;
    font-size: 20px;
    color: grey;
  }
</style>