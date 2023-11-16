<template>
  <section class="slogan container">
    <h1 class="slogan__text">
      Найди работу<br />
      <span>Своей мечты</span>
    </h1>
    <div class="container__image">
      <img src="img/site/slogan_img.png" alt="img" class="slogan__img" />
    </div>
  </section>

  <div class="main_content container">
    <aside class="filter">
      <div class="filter__form__title">
          <div class="wrap__filter__title" @click="filterShow = !filterShow">
            <p class="filter__form__title__text">
              Фильтр
            </p>
            <div class="wrap-filter-arrow">
              <svg :class="{'filter__svg':true, 'reversed':filterShow}" width="8" height="6" viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 0H0L4 6Z" fill="#2A18FF" />
              </svg>
            </div>
          </div>
          <input form="filter__form" type="reset" value="Очистить" class="filter__form__reset form-title__reset" />
          <!-- <button class="filter__form__reset" @click="reset">Очистить</button> -->
      </div>

      <transition name="form-fade">
        <form 
          action="#" 
          method="get" 
          class="filter__form"
          id="filter__form"
          @submit.prevent
          v-show="filterShow"
        >
          
  
          <div class="filter__form__item">
            <label for="city_list" class="filter__form__item__label">Город</label>
  
            <my-select
              v-model="selectSort"
              :options="selectCity"
            />
  
          </div>
  
           <div class="filter__form__item">
            <label for="" class="filter__form__item__label">Заработная плата</label>
            <div class="filter__form_item__salary">
              <input 
                type="text" 
                class="filter__form_item__input" 
                name="start_salary" 
                id="salary" 
                :placeholder="`от ${minWage.toLocaleString('ru-RU')} ₽`"
  
                v-model="minWageTitle"
                @input="this.minWageValue = $event.target.value"
                
                @keypress="isNumber"
  
                @blur="validateMinWageValue"
                @focus="this.minWageTitle = this.minWageValue"
              />
            <input 
              type="text" 
              class="filter__form_item__input" 
              name="end_salary" 
              id="salary" 
              :placeholder="`до ${maxWage.toLocaleString('ru-RU')} ₽`"
  
              v-model="maxWageTitle"
              @input="this.maxWageValue = $event.target.value"
  
              @keypress="isNumber"
  
              @blur="validateMaxWageValue"
              @focus="this.maxWageTitle = this.maxWageValue"
            />
            </div>
          </div>
  
          <div class="wrap__filter__item">
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
          </div>
  
          <div class="filter__form__operation">
            <input type="submit" class="filter__form__submit btn" value="Применить" @click="submit"/>
            <input type="reset" class="filter__form__reset form__operation__reset" value="Очистить" />
          </div> 
        </form>
      </transition>
    </aside>
    <work-list
      :workList="workList"
      @popup="console.log($event)"
    />
    <div class="wrapper__popup">
      <div class="popup">
        <div class="popup__title">
          <img src="img/work_company/logo_company_3.png" alt="img" class="popup__title__img" />
          <div class="popup__title__info">
            <p>Creative People</p>
            <span>Графический дизайнер</span>
          </div>
        </div>
        <div class="popup__info">
          Привет. Мы в CreativePeople ищем middle графического дизайнера в свою
          дизайн команду. Удаленно, из любой точки нашей страны, где у вас будет
          хороший интернет. Опыт работы в разработке логотипов, фирменных стилей
          обязателен.<br />
          У нас в портфолио много крупных российских компаний, с некоторыми
          мы работаем уже много лет и делаем самые разные проекты, от сайтов
          до мобильных приложений.
        </div>
        <div class="popup__tags">
          <span class="popup__tags__item"> от 110 000₽ </span>
          <span class="popup__tags__item"> проектная работа </span>
          <span class="popup__tags__item"> удаленный </span>
          <span class="popup__tags__item"> опыт от 1 года до 3-х лет </span>
          <span class="popup__tags__item"> Москва </span>
        </div>
        <div class="popup__link">
          Отправляйте резюме на
          <a href="mailto:CreativePeople@gmail.com">CreativePeople@gmail.com</a>
        </div>
      </div>
    </div>
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
      selectCity: [],
      selectSort: "",

      minWage: 10,
      maxWage: 1000000000,
      minWageValue: '',
      minWageTitle: '',
      maxWageValue: '',
      maxWageTitle: '',

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
      },

      workList: [],

      homeUrl: 'https://workspace-methed.vercel.app/',

      filterShow: true,
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
      this.featchCity();
      this.featchVacancy();
    },

    validateMinWageValue() {
      if (this.minWageValue > this.maxWage) {
        this.minWageValue = this.maxWage;
      }

      if (this.minWageValue < 0) {
        this.minWageValue = 0;
      }

      if (this.minWageValue !== '') {   
        this.minWageValue = Number(this.minWageValue);
      }

      if (this.minWageValue === 0) {
        this.minWageValue = Number(this.minWageValue);
      }

      if (this.minWageValue !== '') {
        this.minWageTitle = 'от ' + this.minWageValue.toLocaleString('ru-RU') + ' ₽';
      }
    },

    validateMaxWageValue() {
      if (this.maxWageValue > this.maxWage) this.maxWageValue = this.maxWage;

      if (this.maxWageValue < this.minWage && this.maxWageValue !== '') this.maxWageValue = this.minWage;

      if (this.maxWageValue < this.minWageValue) this.maxWageValue = this.minWageValue;

      if (this.maxWageValue !== '') this.maxWageValue = Number(this.maxWageValue);

      if (this.maxWageValue) this.maxWageTitle = 'до ' + this.maxWageValue.toLocaleString('ru-RU') + ' ₽';
    },

    async featchCity() {
      try {
        let response = await fetch('https://workspace-methed.vercel.app/api/locations');
        this.selectCity = await response.json();
      } catch(err) {
        alert(err);
      }
    },

    async featchVacancy() {
      try {
        let response = await fetch('https://workspace-methed.vercel.app/api/vacancy');
        this.workList = (await response.json()).vacancies;
        // console.log(await response.json());
      } catch(err) {
        alert(err);
      }
    }
  },
  computed: {

  },
  watch: {

  },
  mounted() {
    this.featchCity();
    this.featchVacancy();
  }
}
</script>

<style>
  .form-fade-enter-active,
  .form-fade-leave-active {
    transition: all 0.3s linear;
  }

  .form-fade-enter-from,
  .form-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>