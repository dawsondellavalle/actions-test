import * as core from '@actions/core';
// import * as exec from '@actions/exec';

import fs from 'fs';

// import { tmpFile } from './tmp';
// import path from 'path';

// const parseInputFiles = (files: string): string[] => {
// 	return files.split(/\r?\n/).reduce<string[]>(
// 		(acc, line) =>
// 			acc
// 				.concat(line.split(','))
// 				.filter(pat => pat)
// 				.map(pat => pat.trim()),
// 		[],
// 	);
// };

async function run(): Promise<void> {
	const tmpFiles: string[] = [];

	try {
		const manifestJson = core.getInput('manifest');
		const buildJson = core.getInput('build');

		const manifest = JSON.parse(manifestJson);

		core.info(buildJson);
		core.info(manifest);

		// const cmd: string[] = [];
		// const env: { [key: string]: string } = {};

		// const exitCode = await exec.exec(ansibleBin || 'ansible-playbook', cmd, {
		// 	cwd: directory,
		// 	env,
		// 	listeners: {
		// 		// stdout: stdout => {
		// 		// 	// core.info(stdout.toString());
		// 		// 	// console.log(stdout);
		// 		// 	// output.push(stdout);
		// 		// },
		// 		// stderr: stderr => {
		// 		// 	// core.error(stderr.toString());
		// 		// 	// console.error(stderr);
		// 		// 	// output.push(stderr);
		// 		// },
		// 	},
		// });

		// if (exitCode !== 0) {
		// 	throw new Error(`${ansibleBin || 'ansible-playbook'} run failed!`);
		// }
		// core.setOutput('manifest')
	} catch (error) {
		if (error instanceof Error) core.setFailed(error.message);
	} finally {
		for (const file of tmpFiles) {
			await fs.promises.unlink(file);
		}
	}
}

run();
