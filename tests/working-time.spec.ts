import { test, expect, type Page } from "@playwright/test";
import * as Credentials from "../secrets.json";

test("start working", async ({ page }) => {
	await signIn(page);

	if (
		await page
			.locator(".icon-streamline-controls-play")
			.filter({ visible: true })
			.isVisible()
	) {
		// currently not working
		await page
			.locator(".icon-streamline-controls-play")
			.filter({ visible: true })
			.click();

		await page.waitForSelector(".icon-streamline-controls-pause");
	} else if (
		await page
			.locator(".icon-streamline-controls-pause")
			.filter({ visible: true })
			.isVisible()
	) {
		// currently working
		console.log("already working");
	}
});

test("stop working", async ({ page }) => {
	await signIn(page);

	if (
		await page
			.locator(".icon-streamline-controls-play")
			.filter({ visible: true })
			.isVisible()
	) {
		// currently not working
		console.log("already not working");
	} else if (
		await page
			.locator(".icon-streamline-controls-pause")
			.filter({ visible: true })
			.isVisible()
	) {
		// currently working
		await page
			.locator(".icon-streamline-controls-pause")
			.filter({ visible: true })
			.click();

		await page.waitForSelector(".icon-streamline-controls-play");
	}
});

async function signIn(page: Page) {
	await page.goto("https://ssl4.hrworks.de");

	await fillCredential(page, "Company ID", Credentials.groupId);
	await fillCredential(page, "User ID", Credentials.username);
	await fillCredential(page, "Password", Credentials.password);

	await page.getByRole("button", { name: "Log in to HR WORKS" }).click();
	await page.waitForURL(/dashboard/);
}

async function fillCredential(page: Page, label: string, credential: string) {
	const fieldLocator = page
		.locator(".me-input-field")
		.filter({ hasText: label })
		.locator("input");

	await fieldLocator.focus();

	await page.waitForTimeout(500);

	await fieldLocator.fill(credential);
}
