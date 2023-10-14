<script lang="ts">
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="container">
    <div class="card">
      <form>
        <h1 class="container__title">Конвертер валют</h1>

        <div class="courses">
          <div class="course__item">
            <div class="course__item__title">Курс USD</div>
            <div class="course__item__value" data-value="USD">--.--</div>
          </div>
          <div class="course__item">
            <div class="course__item__title">Курс EUR</div>
            <div class="course__item__value" data-value="EUR">--.--</div>
          </div>
          <div class="course__item">
            <div class="course__item__title">Курс RUB</div>
            <div class="course__item__value" data-value="RUB">--.--</div>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <label for="name">Отдам:</label>
            <select
              class="form__select"
              id="input"
            >
              <option value="USD">USD — Доллар США</option>
              <option value="EUR">EUR — Евро</option>
              <option value="RUB">RUB — Рубли</option>
            </select>
          </div>
          <div class="column">
            <label for="name">Получу:</label>
            <select
              id="result"
              class="form__select"
            >
              <option value="USD">USD — Доллар США</option>
              <option value="EUR">EUR — Евро</option>
              <option value="RUB">RUB — Рубли</option>
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
            />
          </div>
          <div class="column">
            <input
              id="result"
              type="number"
              class="form__control"
            />
          </div>
        </div>
      </form>
		</div>
  </div>
</main>
<style>
  .container {
    width: 40em;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }

  .container__title {
    color: darkcyan;
    margin: 0;
  }

  .courses {
    display: flex;
    justify-content: space-between;
  }

  .course__item {
    padding: 25px;
  }

  .course__item__title {
    font-size: 24px;
    color: indigo;
  }

  .course__item__value {
    font-size: 20px;
    color: red;
  }

  .row{
    display: flex;
    justify-content: space-around;
    margin: 5px;
    font-size: 20px;
    color: #605858;
  }

  .form__select {
    font-size: 17px;
    background-color: #eae1e1;
  }
  .form__control {
    font-size: 20px;
    background-color: #eae1e1;
    border-radius: 10px;
    margin-top: 20px;
  }
</style>
