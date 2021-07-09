//Обьявление констант
const input = document.querySelector(".input");
let power = "";
//Ввод данных
const insert = (num) => {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else {
        input.textContent += num;
    }
}
//Очистка
const clean = () => {
    input.textContent = "0";
    power = "";
}
//Удаление одного элемента
const back = () => {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}
//Результат
const equal = () => {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}
//Остаток от деления
const percent = () => {
    input.textContent = eval(input.textContent) / 100;
}
//Вывод констант из библиотеки Math -> PI и e
const constant = (name) => {
    if (input.textContent == 0) {
        input.textContent = "0";
    }
    if (name == "pi") {
        input.textContent += Math.PI.toFixed(8);
    }
    if (name == "e") {
        input.textContent += Math.E.toFixed(8);
    }
}

//Функция для возведения в степень 
const operation = (name) => {
    if (name == "sqrt") {
        input.textContent = Math.sqrt(eval(input.textContent));
    }
    if (name == "sqr") {
        input.textContent = Math.pow(eval(input.textContent), 2);
    }
    if (name == "^-1") {
        input.textContent = Math.pow(eval(input.textContent), -1);
    }
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}
//Считаем факториал
const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
//Обработчик factorial
const fact = () => {
    input.textContent = factorial(+eval(input.textContent));
}
//Логарифмы 

const log = (name) => {
    if (name == "lg") {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
    }
    if (name == "ln") {
        input.textContent = Math.log(eval(input.textContent)).toFixed(8);
    }
}
//Переключение с гдасусов на раиданы
document.querySelector('.type').addEventListener('click', function () {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
    }
})

//Вычисление всего что связанно с тригонометрией

const f = (name) => {
    if (name == 'sin') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'cos') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'tan') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'ctg') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
}