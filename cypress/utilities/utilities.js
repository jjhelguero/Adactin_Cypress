function clickOnElement(HTMLelement) {
    try {
        cy.get(HTMLelement).click()
    }
    catch (err) {
        cy.log(err)
    }
}

function inputTextElement(HTMLelement, inputText) {
    try {
        cy.get(HTMLelement).type(inputText)
    }
    catch (err) {
        cy.log(err)
    }
}

function clearTextElement(HTMLelement, inputText) {
    try {
        cy.get(HTMLelement).clear()
    }
    catch (err) {
        cy.log(err)
    }
}

function selectCheckboxRadioElement(HTMLelement, value) {
    try {
        cy.get(HTMLelement).check(value)
    }
    catch (err) {
        cy.log(err)
    }
}

function deselectCheckboxElement(HTMLelement, value) {
    try {
        cy.get(HTMLelement).uncheck(value)
    }
    catch (err) {
        cy.log(err)
    }
}

function selectOptionElement(HTMLelement, value) {
    try {
        cy.get(HTMLelement).select(value)
    }
    catch (err) {
        cy.log(err)
    }
}