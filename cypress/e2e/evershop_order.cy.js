import 'cypress-xpath'
describe('Login User', () => {
  beforeEach(() => {
    cy.visit('https://demo.evershop.io/account/login')
    cy.xpath("(//input[@placeholder='Email'])[1]").type('akuntester@yopmail.com')
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Password'])[1]").type('Password1')
    cy.wait(2000)
    cy.xpath("(//button[@type='submit'])[1]").click()
    cy.wait(2000)
  }
)
  //belajar push
  // it('klik_product', () => {
  //   cy.xpath("(//h3[normalize-space()='Featured Products'])[1]").scrollIntoView();
  //   cy.xpath("(//span[normalize-space()='Nike zoom fly'])[1]").click()
  //   cy.url().should('eq','https://demo.evershop.io/nike-zoom-fly-161')
  //   cy.xpath("(//a[normalize-space()='S'])[1]").click()
  //   cy.xpath("(//a[normalize-space()='Blue'])[1]").click()
  //   cy.xpath("(//input[@placeholder='Qty'])[1]").clear()
  //   cy.xpath("(//input[@placeholder='Qty'])[1]").type(1)
  // })

  // it('add_to_cart', () => {
  //   cy.xpath("(//h3[normalize-space()='Featured Products'])[1]").scrollIntoView();
  //   cy.xpath("(//span[normalize-space()='Nike zoom fly'])[1]").click()
  //   cy.url().should('eq','https://demo.evershop.io/nike-zoom-fly-161')
  //   cy.xpath("(//a[normalize-space()='S'])[1]").click()
  //   cy.wait(2000)
  //   cy.xpath("(//a[normalize-space()='Blue'])[1]").click()
  //   cy.wait(2000)
  //   cy.xpath("(//input[@placeholder='Qty'])[1]").clear()
  //   cy.wait(2000)
  //   cy.xpath("(//input[@placeholder='Qty'])[1]").type(1)
  //   cy.wait(2000)
  //   cy.xpath("(//button[@type='button'])[1]").click()
  // })

  it('checkout_item', () => {
    cy.xpath("(//h3[normalize-space()='Featured Products'])[1]").scrollIntoView();
    cy.xpath("(//span[normalize-space()='Nike zoom fly'])[1]").click()
    cy.url().should('eq','https://demo.evershop.io/nike-zoom-fly-161')
    cy.xpath("(//a[normalize-space()='S'])[1]").click()
    cy.wait(2000)
    cy.xpath("(//a[normalize-space()='Blue'])[1]").click()
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Qty'])[1]").clear()
    cy.wait(2000)
    cy.xpath("(//input[@placeholder='Qty'])[1]").type(1)
    cy.wait(2000)
    cy.xpath("(//button[@type='button'])[1]").click()
    cy.wait(2000)

    //add to cart
    cy.xpath("(//a[normalize-space()='VIEW CART (1)'])[1]").click()
    cy.xpath("(//a[@class='button primary'])[1]").click()

    //input data diri
    //cy.xpath("(//a[normalize-space()='Change'])[1]").click()
    cy.xpath("(//input[@placeholder='Full name'])[1]").type('testing')
    cy.xpath("(//input[@placeholder='Telephone'])[1]").type('08998904456')
    cy.xpath("(//input[@placeholder='Address'])[1]").type('jogja')
    cy.xpath("(//input[@placeholder='City'])[1]").type('jogja')
    cy.xpath("(//select[@id='address[country]'])[1]").select('China')
    cy.xpath("(//select[@id='address[province]'])[1]").select('Beijing')
    cy.xpath("(//input[@placeholder='Postcode'])[1]").type('12345')

    //klik jasa pengirimin
    cy.xpath("(//span[normalize-space()='Express Delivery - $15.00'])[1]").click()
    cy.xpath("(//button[@type='submit'])[1]").click()
    cy.wait(5000)

    //payment
    cy.xpath("(//*[name()='svg'])[11]").click()
    cy.xpath("(//button[@type='button'])[2]").click()
    cy.xpath("(//a[@class='button primary'])[1]").scrollIntoView()
    
    //validasi element
    cy.xpath("(//a[@class='button primary'])[1]").should('be.visible')
  })
})