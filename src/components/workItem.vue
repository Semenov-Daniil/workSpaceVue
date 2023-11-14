<template>
    <div 
        class="work-list__item" 
        style="cursor: pointer;" 
        @click="$emit('popup', workCard.id)"
    >
        <img 
            :src="img" 
            :alt="workCard.company" 
            class="work-list__item__img"
        />
        <p class="work-list__item__company">{{ workCard.company }}</p>
        <p class="work-list__item__title">{{ workCard.title }}</p>
        <ul class="work-list__item__info">
            <li>от {{ (Number(workCard.salary)).toLocaleString("ru-RU") }}₽</li>
            <li>{{ workCard.type }}</li>
            <li>{{ workCard.format }}</li>
            <li>{{ workCard.experience }}</li>
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
    data() {
        return {
            img: 'https://workspace-methed.vercel.app/' + this.workCard.logo,
        }
    },
    methods: {
        getLogoCompany(company) {
            let logo = '';
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