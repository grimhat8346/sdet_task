export const FAILED_BANKS_PAGE = {
	getSearchField() {
		return cy.findByPlaceholderText(/Search this Listing/i)
	},
	getApplyButton() {
		return cy.findByRole('button', { name: /Apply/i })
	},
	getResultSearchTable() {
		return cy.get('tbody tr')
	},

	chooseShowAllBanksListSelector() {
		return cy.get('#edit-items-per-page').select('All')
	},
}
