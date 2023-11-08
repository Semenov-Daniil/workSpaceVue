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

          <input type="reset" value="Очистить" class="filter__form__reset" />
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
              placeholder="от" 
              v-model="minWage"
            />
          <input 
            type="text" 
            class="filter__form_item__input" 
            name="end_salary" 
            id="salary" 
            placeholder="до" 
            v-model="maxWage"
          />
          </div>
        </div>

        <checkbox-list
          :checkboxData="formWork"
        
        />

        <checkbox-list
          :checkboxData="experience"
        
        />

        <checkbox-list
          :checkboxData="employment"
    
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
      minWage: '',
      maxWage: "",
      formWork: {
        title: "Формат",
        checkboxList: [
          {title: 'Офис', value: false},
          {title: 'Удаленный', value: false},
          {title: 'Гибкий', value: false},
        ]
      },
      experience: {
        title: "Опыт работы",
        checkboxList: [
          {title: 'Не важно', value: false},
          {title: 'Без опыта', value: false},
          {title: 'От 1 года до 3-х лет', value: false},
          {title: 'От 3-х лет', value: false},
        ]
      },
      employment: {
        title: "Занятость",
        checkboxList: [
          {title: 'Полная', value: false},
          {title: 'Частичная', value: false},
          {title: 'Стажировка', value: false},
          {title: 'Проектная работа', value: false},
        ] 
      }
    }
  },
  methods: {
    submit() {
      console.log(this.selectSort, this.formWork.checkboxList, this.experience.checkboxList, this.employment.checkboxList);
    }
  }
}
</script>

<style>

</style>