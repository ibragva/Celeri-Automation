/// <reference types="cypress"/>

describe('Pruebas del Inicio de la pagina Celeri',()=>{

    it('Login Correcto', () => {

        //ENTRAMOS A LA PAGINA 
        cy.visit('https://app.staging.celeri.co/login')
        //VALIDAMOS QUE ESTEMOS EN LA PAGINA
        cy.title().should('eq', 'Requerimientos by celeri')

        //LOCALIZAMOS LOS INPUT EMAIL Y PWS PARA INGRESAR LAS CREDENCIALES DE AUTENTICACION
        cy.get('#mui-1').type('challenge+qa@celeri.app')
        cy.get('#mui-2').type('qaManual2022')

        //HICIMOS CLICK EN EL BOTON DE INGRESAR 
        cy.get('[type="button"]').click({ force: true })
        cy.wait(2000)

        //VALIDAMOS QUE ENTRAMOS AL HOME DE LA PAGINA
        cy.get('.title').should('contain.text', 'Home')
    });


    it('Login Mail Invalido', () => {
        //ENTRAMOS A LA PAGINA 
        cy.visit('https://app.staging.celeri.co/login')
        //VALIDAMOS QUE ESTEMOS EN LA PAGINA
        cy.title().should('eq', 'Requerimientos by celeri')

        //LOCALIZAMOS EL INPUT EMAIL Y COLOCAMOS UN FORMATO INCORRECTO
        cy.get('#mui-1').type('pepito.com')
        cy.get('p').should('contain.text','Ingresar un email válido')

        //LOCALIZAMOS EL INPUT PSW E INGRESAMOS LOS DATOS
        cy.get('#mui-2').type('qaManual2022')

        //Buscamos el boton Ingresar y validamos que este inactivo, ya que una de las credenciales es erronea
        cy.get('[type="button"]').should('contain.attr','tabindex','-1')

    });




})