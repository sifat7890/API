function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('ERROR');
    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw "Please enter a number"

        }
        else if (age < 18) {
            throw "Baby are not allowed"
        }
        else if (age > 30){
            throw "big big brothers are not allowed"
        }
            errorTag.innerHTML = '';

    }
    catch (err) {
        console.log('ERROR:', err);
        errorTag.innerHTML = 'ERROR:' + err;

    }
    finally {
        console.log('All done inside try catch');

    }
}
