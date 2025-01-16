import 'cypress-xpath'
describe('template spec', () => {
  it('order non login', () => {
    cy.visit('https://demo.evershop.io/')
    cy.xpath("(//h3[normalize-space()='Featured Products'])[1]").scrollIntoView()

    //checkout item
    cy.xpath("(//span[normalize-space()='Nike court vision low'])[1]").click()
    cy.xpath("(//a[normalize-space()='X'])[1]").click()
    cy.wait(2000)
    cy.xpath("(//a[normalize-space()='White'])[1]").click()
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Qty'])[1]").clear()
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Qty'])[1]").type('2')
    cy.wait(2000)
    cy.xpath("(//button[@type='button'])[1]").click()
    cy.wait(2000)
    cy.xpath("(//a[normalize-space()='VIEW CART (1)'])[1]").click()
    cy.wait(2000)
    cy.xpath("(//a[@class='button primary'])[1]").click()
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Email'])[1]").type('akuntester@yopmail.com')
    cy.xpath("(//button[@type='submit'])[1]").click()
    cy.wait(2000)

    //input data diri
    cy.xpath("(//input[@placeholder='Full name'])[1]").type('testing')
    cy.xpath("(//input[@placeholder='Telephone'])[1]").type('08998904456')
    cy.xpath("(//input[@placeholder='Address'])[1]").type('jogja')
    cy.xpath("(//input[@placeholder='City'])[1]").type('jogja')
    cy.xpath("(//select[@id='address[country]'])[1]").select('China')
    cy.xpath("(//select[@id='address[province]'])[1]").select('Beijing')
    cy.xpath("(//input[@placeholder='Postcode'])[1]").type('12345')
    cy.xpath("(//span[normalize-space()='Express Delivery - $15.00'])[1]").click()
    cy.xpath("(//button[@type='submit'])[1]").click()
    cy.wait(5000)

    //payment
    cy.xpath("(//*[name()='svg'])[11]").click()
    cy.xpath("(//button[@type='button'])[2]").click()

    //validasi
    cy.xpath("(//a[@class='button primary'])[1]").scrollIntoView()
    cy.xpath("(//a[@class='button primary'])[1]").should('be.visible')
  })
})