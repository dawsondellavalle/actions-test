import * as core from '@actions/core';

import fs from 'fs';

async function run(): Promise<void> {
	try {
		const manifestPath = core.getInput('path');

		const content = fs.readFileSync(manifestPath);

		core.setOutput('json', JSON.parse(content.toString()));
	} catch (error) {
		if (error instanceof Error) core.setFailed(error.message);
	}
}

run();