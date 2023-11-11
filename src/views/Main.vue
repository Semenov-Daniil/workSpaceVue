<template>
  <section class="slogan container">
    <h1 class="slogan__text">
      Найди работу<br />
      <span>Своей мечты</span>
    </h1>

    <img src="img/site/slogan_img.png" alt="img" class="slogan__img" />
  </section>

  <div class="main_content container">
    <aside class="filter">
      <p class="filter__link__mobile no-show">
        Фильтр
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 0H0L4 6Z" fill="#2A18FF" />
        </svg>
      </p>
      <form action="#" method="get" class="filter__form" @submit.prevent>
        <div class="filter__form__title">
          <p class="filter__form__title__text">Фильтр</p>
          <!-- <input type="reset" value="Очистить" class="filter__form__reset" /> -->
          <button class="filter__form__reset" @click="reset">Очистить</button>
        </div>

        <div class="filter__form__item">
          <label for="city_list" class="filter__form__item__label">Город</label>

          <my-select
            v-model="selectSort"
            :options="selectCity"
          />

        </div>

         <div class="filter__form__item">
          <label for="salary" class="filter__form__item__label">Заработная плата</label>
          <div class="filter__form_item__salary">
            <input 
              type="text" 
              class="filter__form_item__input" 
              name="start_salary" 
              id="salary" 
              :placeholder="`от ${minWage} ₽`"
              v-model="minWageValue"
              @keypress="isNumber"
              @blur="validateMinWageValue"
            />
          <input 
            type="text" 
            class="filter__form_item__input" 
            name="end_salary" 
            id="salary" 
            :placeholder="`до ${maxWage} ₽`"
            v-model="maxWageValue"
            @keypress="isNumber"
            @blur="validateMaxWageValue"
          />
          </div>
        </div>

        <checkbox-list
          :title="formWork.title"
          v-model:checkboxList="formWork.checkboxList"
        />

        <checkbox-list
          :title="experience.title"
          v-model:checkboxList="experience.checkboxList"
        />

        <checkbox-list
          :title="employment.title"
          v-model:checkboxList="employment.checkboxList"
        />

        <div class="filter__form__operation">
          <input type="submit" class="filter__form__submit btn" value="Применить" @click="submit"/>
          <input type="reset" class="filter__form__reset no-show" value="Очистить" />
        </div> 
      </form>
    </aside>
    <!-- <work-list/> -->
  </div>
</template>

<script>
import workList from "@/components/workList.vue"
import checkboxList from "@/components/checkboxList.vue"

export default {
  components: {
    workList,
    checkboxList,
  },
  data() {
    return {
      selectCity: [
        {value: "Saint-Petersburg", name: "Санкт-Петербург"},
        {value: "Moscow", name: "Москва"},
      ],
      selectSort: "",

      minWage: 10,
      maxWage: 1000000000,
      minWageValue: '',
      maxWageValue: '',

      formWork: {
        title: "Формат",
        checkboxList: [
          {title: 'Офис', value: false, id: 'format_office'},
          {title: 'Удаленный', value: false, id: 'format_remote'},
          {title: 'Гибкий', value: false, id: 'format_flexible'},
        ],
      },
      experience: {
        title: "Опыт работы",
        checkboxList: [
          {title: 'Не важно', value: false, id: 'experience_not-important'},
          {title: 'Без опыта', value: false, id: 'experience_whithout'},
          {title: 'От 1 года до 3-х лет', value: false, id: 'experience_from-one-to-three'},
          {title: 'От 3-х лет', value: false, id: 'experience_to-three'},
        ],
      },
      employment: {
        title: "Занятость",
        checkboxList: [
          {title: 'Полная', value: false, id: 'employment_full'},
          {title: 'Частичная', value: false, id: 'employment_partially'},
          {title: 'Стажировка', value: false, id: 'employment_internship'},
          {title: 'Проектная работа', value: false, id: 'employment_project'},
        ],
      }
    }
  },
  methods: {
    submit() {
      console.log(JSON.parse(JSON.stringify({
        selectSort: this.selectSort,
        wage: {
          minWageValue: this.minWageValue,
          maxWageValue: this.maxWageValue,
        },
        formWork: {...this.formWork.checkboxList},
        experience: {...this.experience.checkboxList},
        employment: {...this.employment.checkboxList}
      })));
    },
    isNumber(event) {  
      let charCode = event.charCode;
      if (charCode < 48 || charCode > 57) {  
        event.preventDefault();  
      }  
    }, 
    reset() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    validateMaxWageValue() {
      if (this.maxWageValue > this.maxWage) {
        this.maxWageValue = this.maxWage;
      }

      if (this.maxWageValue < this.minWage && this.maxWageValue !== '') {
        this.maxWageValue = this.minWage;
      }

      if (this.maxWageValue < this.minWageValue) {
        this.maxWageValue = this.minWageValue;
      }

      if (this.maxWageValue !== '') this.maxWageValue = Number(this.maxWageValue);
    },
    validateMinWageValue() {
      if (this.minWageValue > this.maxWage) {
        this.minWageValue = this.maxWage;
      }

      if (this.minWageValue < 0) {
        this.minWageValue = 0;
      }

      if (this.minWageValue !== '') this.minWageValue = Number(this.minWageValue);
    }
  },
  computed: {

  },
  watch: {

  }
}
</script>

<style>

</style>