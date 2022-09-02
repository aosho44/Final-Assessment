describe('Rubric App', () => {
	it('opens the Rubric App', async () => {
		await browser.url('https://inspiring-wisp-f3b8d3.netlify.app/');
		await expect(browser).toHaveUrl(
			'https://inspiring-wisp-f3b8d3.netlify.app/'
		);
	});

	it('clicks on all the table cells on the top row', async () => {
		browser.refresh();
		const value = await $('#score');
		let score;
		const tableCell1 = await $('tr:nth-child(1) > td:nth-child(2)');
		const tableCell2 = await $('tr:nth-child(1) > td:nth-child(3)');
		const tableCell3 = await $('tr:nth-child(1) > td:nth-child(4)');
		const tableCell4 = await $('tr:nth-child(1) > td:nth-child(5)');

		await tableCell1.click();
		score = await value.getText();
		await expect(score).toBe('10');

		await tableCell2.click();
		score = await value.getText();
		await expect(score).toBe('8');

		await tableCell3.click();
		score = await value.getText();
		await expect(score).toBe('6');

		await tableCell4.click();
		score = await value.getText();
		await expect(score).toBe('0');
	});

	it('clicks on all the table cells on the middle row', async () => {
		browser.refresh();
		const value = await $('#score');
		let score;
		const tableCell1 = await $('tr:nth-child(2) > td:nth-child(2)');
		const tableCell2 = await $('tr:nth-child(2) > td:nth-child(3)');
		const tableCell3 = await $('tr:nth-child(2) > td:nth-child(4)');
		const tableCell4 = await $('tr:nth-child(2) > td:nth-child(5)');

		await tableCell1.click();
		score = await value.getText();
		await expect(score).toBe('10');

		await tableCell2.click();
		score = await value.getText();
		await expect(score).toBe('8');

		await tableCell3.click();
		score = await value.getText();
		await expect(score).toBe('6');

		await tableCell4.click();
		score = await value.getText();
		await expect(score).toBe('0');
	});

	it('clicks on all the table cells on the bottom row', async () => {
		browser.refresh();
		const value = await $('#score');
		let score;
		const tableCell1 = await $('tr:nth-child(1) > td:nth-child(2)');
		const tableCell2 = await $('tr:nth-child(1) > td:nth-child(3)');
		const tableCell3 = await $('tr:nth-child(1) > td:nth-child(4)');
		const tableCell4 = await $('tr:nth-child(1) > td:nth-child(5)');

		await tableCell1.click();
		score = await value.getText();
		await expect(score).toBe('10');

		await tableCell2.click();
		score = await value.getText();
		await expect(score).toBe('8');

		await tableCell3.click();
		score = await value.getText();
		await expect(score).toBe('6');

		await tableCell4.click();
		score = await value.getText();
		await expect(score).toBe('0');
	});

	it('clicks on a random table cell ', async () => {
		browser.refresh();
		const value = await $('#score');
		let score;
		const row = Math.ceil(Math.random() * 3);
		const column = Math.floor(Math.random() * (4 - 2 + 1) + 2);
		const tableCell = await $(`tr:nth-child(${row}) > td:nth-child(${column})`);

		await tableCell.click();
		score = await value.getText();
		await expect(score).toBe(score);
	});

	it('clicks on one table cell on each column then checks score matches the result and percentage', async () => {
		browser.refresh();
		const value = await $('#score');
		let score;
		let percentage;
		const column = Math.floor(Math.random() * (4 - 2 + 1) + 2);
		const tableCell1 = await $(`tr:nth-child(1) > td:nth-child(${column})`);
		const tableCell2 = await $(`tr:nth-child(2) > td:nth-child(${column})`);
		const tableCell3 = await $(`tr:nth-child(3) > td:nth-child(${column})`);

		await tableCell1.click();
		await tableCell2.click();
		await tableCell3.click();
		score = await value.getText();
		await expect(score).toBe(score);
		percentage = Math.floor((score / 30) * 100);
		expect(percentage).toBe(percentage);
	});
});
