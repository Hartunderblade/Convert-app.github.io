<script setup>
import { createApp, ref, computed } from 'vue';

const inputText = ref('');
const numberResult = ref(null);
const errorMessage = ref('');
const operationResult = ref(null);
const operation = ref('');
const secondNumber = ref(null);

const textToNumberMap = {
    'ноль': 0,
    'один': 1,
    'два': 2,
    'три': 3,
    'четыре': 4,
    'пять': 5,
    'шесть': 6,
    'семь': 7,
    'восемь': 8,
    'девять': 9,
    'десять': 10,
    'одиннадцать': 11,
    'двенадцать': 12,
    'сто': 100,
    'двадцать': 20,
    'тридцать': 30,
    'сорок': 40,
    'пятьдесят': 50,
    'шестьдесят': 60,
    'семьдесят': 70,
    'восемьдесят': 80,
    'девяносто': 90,
    'сто двадцать пять': 125,
};

const convertTextToNumber = () => {
    errorMessage.value = '';
    try {
        if (inputText.value.trim() in textToNumberMap) {
            numberResult.value = textToNumberMap[inputText.value.trim()];
        } else {
            throw new Error('Некорректный текст для преобразования.');
        }
    } catch (error) {
        errorMessage.value = error.message;
    }
};

const performOperation = () => {
    errorMessage.value = '';
    try {
        if (numberResult.value === null || secondNumber.value === null) {
            throw new Error('Оба числа должны быть введены.');
        }
        const num1 = Number(numberResult.value);
        const num2 = Number(secondNumber.value);

        switch (operation.value) {
            case '+':
                operationResult.value = num1 + num2;
                break;
            case '-':
                operationResult.value = num1 - num2;
                break;
            case '*':
                operationResult.value = num1 * num2;
                break;
            case '/':
                if (num2 === 0) throw new Error('Деление на ноль невозможно.');
                operationResult.value = num1 / num2;
                break;
            default:
                throw new Error('Некорректная операция.');
        }
    } catch (error) {
        errorMessage.value = error.message;
    }
};

</script>

<template>
    <div class="calculator">
        <h1 class="calculator__title" style="">Преобразование текста в число & Калькуляторо</h1>

        <div class="convert">
            <label class="convert__title" for="inputText">Введите текст:</label>
            <input class="convert__input" id="inputText" v-model="inputText"
                placeholder="Например: сто двадцать пять" />
            <button class="convert__button" @click="convertTextToNumber">Преобразовать</button>
        </div>

        <p class="result" v-if="numberResult !== null">Результат преобразования: {{ numberResult }}</p>

        <div class="convert" v-if="numberResult !== null">
            <h2 style="margin-top: 3rem; margin-bottom: 1rem;">Выполнение операции</h2>
            <label for="operation">Операция:</label>
            <select class="convert__operation" id="operation" v-model="operation">
                <option value="+">Сложение</option>
                <option value="-">Вычитание</option>
                <option value="*">Умножение</option>
                <option value="/">Деление</option>
            </select>

            <label class="convert__title" for="secondNumber">Второе число:</label>
            <input class="convert__input" id="secondNumber" v-model="secondNumber" type="number"
                placeholder="Введите число" />
            <button class="convert__button" @click="performOperation">Выполнить</button>

            <p class="result" v-if="operationResult !== null">Результат операции: {{ operationResult }}</p>
        </div>

        <p class="error" v-if="errorMessage">Ошибка: {{ errorMessage }}</p>
    </div>
</template>

<style scoped lang="scss">
.calculator {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 5rem;
    }
}

.convert {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    &__title {
        font-size: 1rem;
    }

    &__input {
        border-bottom: 1px solid #838383;
        padding-left: 1rem;
        width: 630px;
        height: 37px;
        background-color: var(--vt-c-black-soft);
        color: #bababa;
    }

    &__button {
        border: 1px solid #1e1e1e;
        padding: 1.6rem 0;
        width: 630px;
        font-weight: 600;
        font-size: 1.1rem;
        text-transform: capitalize;
        color: #1e1e1e;
    }

    &__operation {
        width: 10rem;
        padding: 0.6rem 0.4rem;
    }
}

.result {
    margin-top: 1rem;
    color: #63a1ff;
}

.error {
    color: rgb(201, 0, 0);
}
</style>