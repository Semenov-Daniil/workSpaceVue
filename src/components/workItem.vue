<template>
    <div class="work-list__item" style="cursor: pointer;">
        <img 
            :src="getLogoCompany(workCard.company)" 
            :alt="workCard.company" 
            class="work-list__item__img"
        />
        <p class="work-list__item__company">{{ workCard.company }}</p>
        <p class="work-list__item__title">{{ workCard.title }}</p>
        <ul class="work-list__item__info">
            <li>от {{ (workCard.wage).toLocaleString("ru-RU") }}₽</li>
            <li>{{ workCard.employment }}</li>
            <li>{{ workCard.formWork }}</li>
            <li>опыт {{ workCard.experience }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        workCard: {
            type: Object,
            required: true
        }
    },
    methods: {
        getLogoCompany(company) {
            let logo = '';
            console.log()
            switch(company) {
                case 'YADRO':
                    logo = '/img/work_company/logo_company_1.png';
                    break;
                case 'ВкусВилл':
                    logo = '/img/work_company/logo_company_2.png';
                    break;
                case 'Creative People':
                    logo = '/img/work_company/logo_company_3.png';
                    break;
            }
            return logo;
        }
    }
}
</script>

<style>

</style>