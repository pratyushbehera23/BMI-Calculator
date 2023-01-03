const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    const height = Number(document.getElementById('height').value) / 100;
    const weight = Number(document.getElementById('weight').value);

    const bmi = Number((weight / (height * height)).toFixed(2));

    // console.log(weight, height, bmi);
    document.getElementById('output').textContent = `${bmi} kg/m2`;

    // BMI Index: UnderWeight <18.5  Normal 18.5-24.9  OverWeight 25-30  Obese <30
    const ind = document.getElementById('index');
    if (bmi < 18.5) {
        ind.textContent = 'UnderWeight';
        document.querySelector('.container').style.backgroundColor = '#001e64';
    } else if (bmi >= 18.5 && bmi < 25) {
        ind.textContent = 'Normal';
        document.querySelector('.container').style.backgroundColor = '#006400';
    } else if (bmi >= 25 && bmi < 30) {
        ind.textContent = 'OverWeight';
        document.querySelector('.container').style.backgroundColor = '#642600';
    } else if (bmi >= 30) {
        ind.textContent = 'Obese';
        document.querySelector('.container').style.backgroundColor = '#640000';
    }
})