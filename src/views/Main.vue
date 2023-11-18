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
          <input form="filter__form" type="reset" value="Очистить" class="filter__form__reset form-title__reset" @click="reset"/>
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
            <input type="reset" class="filter__form__reset form__operation__reset" value="Очистить" @click="reset"/>
          </div> 
        </form>
      </transition>
    </aside>
    <work-list
      :workList="workList"
      @popup="openPopup"
    />
    <div class="wrapper__popup" v-show="companyShow" @click="closePopup">
      <div class="popup" @click.stop>
        <div class="popup__title">
          <img 
            :src="'https://workspace-methed.vercel.app/' + company.logo" 
            :alt="company.logo" 
            class="popup__title__img"
          />
          <div class="popup__title__info">
            <p class="popup__title__company">{{ company.company }}</p>
            <span class="popup__title__vacancy">{{ company.title }}</span>
          </div>
        </div>
        <div class="popup__info">
          <p class="popup__info__desc">
            {{(company.description) }}
          </p>
          <ul class="popup__tags">
            <li class="popup__tags__item">от {{ (Number(company.salary)).toLocaleString("ru-RU") }}₽</li>
            <li class="popup__tags__item">{{ company.type }}</li>
            <li class="popup__tags__item">{{ company.format }}</li>
            <li class="popup__tags__item">опыт {{ company.experience }}</li>
            <li class="popup__tags__item">{{ company.location }}</li>
          </ul>
        </div>
        <div class="popup__link">
          Отправляйте резюме на <a :href="'mailto:' + company.email">{{ company.email }}</a>
        </div>
        <div class="likemen">
          <img src="img/site/likemen.png" alt="likemen">
        </div>
        <div class="close_icon" @click="closePopup">
          <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.78335 6L11.3889 1.39444C11.4799 1.28816 11.5275 1.15145 11.5221 1.01163C11.5167 0.871815 11.4587 0.739182 11.3598 0.640241C11.2608 0.541299 11.1282 0.483337 10.9884 0.477936C10.8486 0.472535 10.7118 0.520094 10.6056 0.611109L6.00001 5.21666L1.39446 0.605553C1.28984 0.50094 1.14796 0.442169 1.00001 0.442169C0.852067 0.442169 0.710181 0.50094 0.605568 0.605553C0.500955 0.710167 0.442183 0.852053 0.442183 0.999998C0.442183 1.14794 0.500955 1.28983 0.605568 1.39444L5.21668 6L0.605568 10.6056C0.547411 10.6554 0.500178 10.7166 0.466831 10.7856C0.433485 10.8545 0.414746 10.9296 0.411791 11.0061C0.408836 11.0826 0.421728 11.1589 0.449658 11.2302C0.477588 11.3015 0.519954 11.3662 0.574095 11.4204C0.628237 11.4745 0.692985 11.5169 0.764277 11.5448C0.835569 11.5727 0.911865 11.5856 0.988375 11.5827C1.06489 11.5797 1.13996 11.561 1.20888 11.5276C1.27781 11.4943 1.3391 11.447 1.3889 11.3889L6.00001 6.78333L10.6056 11.3889C10.7118 11.4799 10.8486 11.5275 10.9884 11.5221C11.1282 11.5167 11.2608 11.4587 11.3598 11.3598C11.4587 11.2608 11.5167 11.1282 11.5221 10.9884C11.5275 10.8485 11.4799 10.7118 11.3889 10.6056L6.78335 6Z"/>
          </svg>
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
      companyShow: false,

      company: {},
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
    },

    async openPopup(event) {
      try {
        let response = await fetch('https://workspace-methed.vercel.app/api/vacancy/' + event);
        this.company = (await response.json());
        this.companyShow = true;
      } catch(err) {
        alert(err);
      }
    },

    closePopup() {
      this.company = {};
      this.companyShow = false;
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