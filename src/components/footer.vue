<template>
    <div class="footer_content container">
        <div 
            class="footer_content__info-company"
            @click="$router.push('/')"
        >
            <div class="footer_content__info-company__logo">
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

                <h1 class="footer_content__info-company__logo__text">
                <span>Work</span> Space
                </h1>
            </div>

            <p class="footer_content__info-company__copyright">© Work Space, 2023</p>
        </div>

        <p class="footer_content__dev-info">
        Designer: Anastasia Ilina<br />
        Developer: Semenov Daniil
        </p>
    </div>
</template>

<script>
export default {

};
</script>

<style>
    .footer_content__info-company {
        cursor: pointer;
    }
</style>
