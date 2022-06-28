/// <reference types="cypress"/>

describe('Pruebas del Inicio de la pagina Celeri',()=>{

    beforeEach('Login en Celeri',()=>{

        //ENTRAMOS A LA PAGINA 
        cy.visit('https://app.staging.celeri.co/login')
        //VALIDAMOS QUE ESTEMOS EN LA PAGINA
        cy.title().should('eq', 'Requerimientos by celeri')

        //LOCALIZAMOS LOS INPUT EMAIL Y PWS PARA INGRESAR LAS CREDENCIALES DE AUTENTICACION
        cy.get('#mui-1').type('challenge+qa@celeri.app')
        cy.get('#mui-2').type('qaManual2022')
        cy.get('[type="button"]').click({ force: true })

        cy.wait(2000)
    })


    it('Crear contacto exitoso', () => {
        //INGRESAMOS AL MODULO DE CONTACTOS
        cy.get('ul').children('div').eq(2).click()
        cy.get('.MuiBox-root').children('button').eq(0).click()

        cy.get('form').children('div').eq(0)
        cy.get('form').children('div').eq(1).type('Pablo')
        cy.get('form').children('div').eq(2).type('Perez')
        cy.get('form').children('div').eq(3).type('Pepe.P@gmail.com')
        cy.get('form').children('div').eq(4).type('+5411413344')
        cy.get('form').children('div').eq(5).type('Cuenta Unica')
        cy.get('form').children('button')
 
    });


    it.only('Crear contacto Campos Obligatorios ', () => {
        //INGRESAMOS AL MODULO DE CONTACTOS
        cy.get('ul').children('div').eq(2).click()
        cy.get('.MuiBox-root').children('button').eq(0).click()

        cy.get('form').children('div').eq(4).type('+5411413344')
        cy.get('form').children('div').eq(5).type('Cuenta Unica')
        cy.get('form').children('button').click()

        cy.get('form').children('div').eq(0)
        cy.get('p').eq(0).should('contain.text','Este campo es obligatorio')
        cy.get('p').eq(1).should('contain.text','Este campo es obligatorio')
        cy.get('p').eq(2).should('contain.text','Este campo es obligatorio')
   });






})