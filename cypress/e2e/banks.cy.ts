import { FAILED_BANKS_PAGE } from '../fixtures/failed_banks'

describe('Failed bank list', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('search should return only one bank using keyword "Silicon"', () => {
		FAILED_BANKS_PAGE.getSearchField().type('Silicon')
		FAILED_BANKS_PAGE.getApplyButton().click()
		FAILED_BANKS_PAGE.getResultSearchTable()
			.should('have.length', 1)
			.then($row => {
				expect($row.text()).to.include('Silicon Valley Bank')
			})
	})

	it('should have 568 banks in the list', () => {
		FAILED_BANKS_PAGE.chooseShowAllBanksListSelector()
		FAILED_BANKS_PAGE.getApplyButton().click()
		FAILED_BANKS_PAGE.getResultSearchTable()
			.should('have.length.gt', 0)
			.then($rows => {
				const actualCount = $rows.length
				expect(actualCount).to.equal(568)
			})
	})
})
