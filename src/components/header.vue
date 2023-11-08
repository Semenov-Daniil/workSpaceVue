<template>
    <div class="header_content container">
        <div 
            class="header_content__logo" 
            @click="$router.push('/')"
        >
            <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 1H16V5" stroke="#171717" stroke-width="1.5" />
                <path d="M15 13H1V9" stroke="#171717" stroke-width="1.5" />
                <path d="M5 14.5H10.5" stroke="#171717" stroke-width="2" />
            </svg>

            <h1 class="header_content__logo__company-name">
                <span>Work</span> Space
            </h1>
        </div>
        <a href="#" class="header_content__btn btn"> Посмотреть вакансии </a>
    </div>
</template>

<script>
export default {
    methods: {
        test() {
            console.log('clik');
        }
    }
};
</script>

<style>
    .header_content__logo {
        cursor: pointer;
    }
</style>
