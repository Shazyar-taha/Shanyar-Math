let number = [];

// to addition number
function addition() {
    number = [];
    let rows = document.querySelectorAll('.row');

    for (let i = 1; i < 3; i++) {
        let row = rows[i].children;

        for (let j = 0; j < row.length; j++) {


            if (row[j].children.length == 4) {

                let num1 = getRandomNumberBetween(1, 10000);
                let num2 = getRandomNumberBetween(1, 10000);


                number.push({
                    row_name: rows[i].id,
                    col_name: 'col-' + j,
                    res: num1 + num2
                });
                row[j].children[0].innerHTML = num1 + '&nbsp; &nbsp;';
                row[j].children[1].innerHTML = num2 + '&nbsp;+';
            } else if (row[j].children.length == 5) {
                let num1 = getRandomNumberBetween(1, 1000000);
                let num2 = getRandomNumberBetween(1, 1000000);
                let num3 = getRandomNumberBetween(1, 1000000);


                number.push({
                    row_name: rows[i].id,
                    col_name: 'col-' + j,
                    res: num1 + num2 + num3
                });

                row[j].children[0].innerHTML = num1 + '&nbsp; &nbsp;';
                row[j].children[1].innerHTML = num2 + '&nbsp; &nbsp;';
                row[j].children[2].innerHTML = num3 + '&nbsp;+';

            } else {
                let numbers = [];

                for (let i = 0; i < 4; i++) {
                    numbers[i] = getRandomNumberBetween(1, 1000000);
                }


                number.push({
                    row_name: rows[i].id,
                    col_name: 'col-' + j,
                    res: numbers.reduce((a, b) => a + b, 0)
                });

                for (let i = 0; i < 4; i++) {
                    if (i == 3) {
                        row[j].children[i].innerHTML = numbers[i] + '&nbsp;+';
                    } else {
                        row[j].children[i].innerHTML = numbers[i] + '&nbsp; &nbsp;';

                    }

                }

            }
        }

    }

    console.log(number);


}

// to subtraction number
function subtraction() {
    number = [];
    let rows = document.querySelectorAll('.row');

    for (let i = 1; i < 3; i++) {
        let row = rows[i].children;

        for (let j = 0; j < row.length; j++) {


            if (row[j].children.length == 4) {

                let num1 = getRandomNumberBetween(1, 100000);
                let num2 = getRandomNumberBetween(1, 10000);


                number.push({
                    row_name: rows[i].id,
                    col_name: 'col-' + j,
                    res: num1 - num2
                });
                row[j].children[0].innerHTML = num1 + '&nbsp; &nbsp;';
                row[j].children[1].innerHTML = num2 + '&nbsp;-';
            } else if (row[j].children.length == 5) {
                let num1 = getRandomNumberBetween(1, 100000);
                let num2 = getRandomNumberBetween(1, 10000);
                let num3 = getRandomNumberBetween(1, 1000);

                while ((num2 + num3) >= num1) {
                    num2 = getRandomNumberBetween(1, 10000);
                    num3 = getRandomNumberBetween(1, 1000);
                }

                number.push({
                    row_name: rows[i].id,
                    col_name: 'col-' + j,
                    res: (num1 - num2) - num3
                });

                row[j].children[0].innerHTML = num1 + '&nbsp; &nbsp;';
                row[j].children[1].innerHTML = num2 + '&nbsp; &nbsp;';
                row[j].children[2].innerHTML = num3 + '&nbsp;-';

            } else {
                let numbers = [];
                let thousand = 100000000;
                for (let i = 0; i < 4; i++) {
                    thousand = thousand / 10;
                    numbers[i] = getRandomNumberBetween(1, thousand);
                }

                let sum = numbers.slice(1, 4).reduce((a, b) => a + b, 0);


                thousand = 100000000;
                while (numbers[0] <= sum) {

                    for (let i = 1; i < 4; i++) {
                        // 100,000,000
                        thousand = thousand / 10;
                        numbers[i] = getRandomNumberBetween(1, thousand);
                    }

                    sum = numbers.slice(1, 4).reduce((a, b) => a + b, 0);
                }


                number.push({
                    row_name: rows[i].id,
                    col_name: 'col-' + j,
                    res: numbers[0] - numbers.slice(1, 4).reduce((a, b) => a + b, 0)
                });

                for (let i = 0; i < 4; i++) {
                    if (i == 3) {
                        row[j].children[i].innerHTML = numbers[i] + '&nbsp;-';
                    } else {
                        row[j].children[i].innerHTML = numbers[i] + '&nbsp; &nbsp;';

                    }

                }

            }
        }

    }

    console.log(number);


}

function multiplication() {
    number = [];
    let rows = document.querySelectorAll('.row');

    for (let i = 1; i < 3; i++) {
        let row = rows[i].children;

        for (let j = 0; j < row.length; j++) {
            let num1 = getRandomNumberBetween(1, 15);
            let num2 = getRandomNumberBetween(1, 15);


            number.push({
                row_name: rows[i].id,
                col_name: 'col-' + j,
                res: num1 * num2
            });
            row[j].children[0].innerHTML = num1 + '&nbsp; &nbsp;';
            row[j].children[1].innerHTML = num2 + '&nbsp;*';

        }

    }

    console.log(number);


}


function divison() {
    number = [];
    let rows = document.querySelectorAll('.row');

    for (let i = 1; i < 3; i++) {
        let row = rows[i].children;

        for (let j = 0; j < row.length; j++) {
            let num1 = getRandomNumberBetween(1, 225);
            let num2 = getRandomNumberBetween(1, 15);

            while ((num1 / num2) % 10 > 0) {
                num1 = getRandomNumberBetween(1, 225);
                num2 = getRandomNumberBetween(1, 15);
            }

            number.push({
                row_name: rows[i].id,
                col_name: 'col-' + j,
                res: num1 / num2
            });
            row[j].children[0].innerHTML = num1 + '&nbsp; &nbsp;';
            row[j].children[1].innerHTML = num2 + '&nbsp;/';

        }

    }

    console.log(number);


}


// to the result
function afterChange(rowName, colName, e) {
    let result = number.find(r => r.row_name == rowName && r.col_name == colName).res;
    if (result == e.value) {
        if (e.classList.contains('border')) {
            let borderColor = e.classList.contains('border-success') ? 'border-success' : 'border-danger';
            e.classList.replace(borderColor,
                'border-success')
        } else {
            e.classList.add('border');
            e.classList.add('border-success');
            e.classList.add('border-2');
        }
    } else {
        if (e.classList.contains('border')) {
            let borderColor = e.classList.contains('border-danger') ? 'border-danger' : 'border-success';
            e.classList.replace(borderColor,
                'border-danger');
        } else {
            e.classList.add('border');
            e.classList.add('border-danger');
            e.classList.add('border-2');
        }

    }
}

// show the result
function showResult() {
    let rows = document.querySelectorAll('.row');

    for (let i = 1; i < 4; i++) {

        let row = rows[i].children;

        for (let j = 0; j < row.length; j++) {
            let column = row[j].children;
            let [input] = column[column.length - 1].children;
            console.log(input);
            input.value = number.find(r => r.row_name == ('row-' + i) && r.col_name == ('col-' + j)).res;
            // console.log(number.find(r => r.row_name == ('row-' + i) && r.col_name == ('col-' + j)));
        }

    }
}









// get random number between a number
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}