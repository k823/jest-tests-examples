// Tutorial from Academind 

// Unit test 
const generateText = (name, age) => {
    //Returns output text
    return `${name} (${age} years old)`;
};

// Integration test

exports.checkAndGenerate = (name, age) => {
    if(
        !validateInput(name, true, false) ||
        !validateInput(age, false, true)
    ) {
        return false;
    }

return generateText(name, age);
}

const createElement = (type, text, className) => {
    // Creates a new HTML element and returns it 
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
};


const validateInput = (text, notEmpty, isNumber) => {
    // Validate user input with two pre-defined rules
    if(!text) {
        return false;
    };
    if(notEmpty && text.trim().length === 0) {
        return false;
    };
    if(isNumber && +text === NaN) {
        return false; 
    };
    return true;
};


const addUser = () => {
    // Fetches the user input, creates a new HTML element based on it
    // and appends the element to the DOM 
    const newUserNameInput = document.querySelector('input#name');
    const newUserAgeInput = document.querySelector('input#age');

    const outputText = checkAndGenerate(
        newUserNameInput.nodeValue,
        newUserAgeInput.value
        );

    if(!outputText) {
        return;
    }  
    
    const userList = document.querySelector('.user-list');
    const element = createElement('li', outputText, 'user-item');
    userList.appendChild(element);
}

exports.generateText = generateText;
exports.validateInput = validateInput;