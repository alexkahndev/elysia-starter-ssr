import { readdir, writeFile, rm, mkdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { $ } from 'bun';

const buildDir = './build';
const assetsDir = './src/backend/assets';
const reactIndexDir = './src/frontend/indexes';
const reactPagesDir = './src/frontend/pages';

export async function build() {
    await rm(buildDir, { recursive: true, force: true });
    await generateReactIndexFiles();

    const reactFiles = await readdir(reactIndexDir);

    const reactEntryPoints = reactFiles.filter(
        (file) => extname(file) === '.tsx'
    );

    const entryPaths = reactEntryPoints.map((file) =>
        join(reactIndexDir, file)
    );

    const buildTimeStamp = Date.now();

	const { logs, success } = await Bun.build({
		entrypoints: entryPaths,
		outdir: './build',
		naming: `[dir]/[name].${buildTimeStamp}.[ext]`,
		//minify: true,
		//splitting: true,
		format: 'esm'
	});

    if (!success) {
        throw new AggregateError(logs);
    }

    await copyAssetsToBuildDir();

    return buildTimeStamp;
}

async function copyAssetsToBuildDir() {
    await $`cp -R ${assetsDir} ${buildDir}`;
}

async function generateReactIndexFiles() {
    await rm(reactIndexDir, { recursive: true, force: true });
    await mkdir(reactIndexDir);

    try {
        const files = await readdir(reactPagesDir);

        for (const file of files) {
            const componentName = file.split('.')[0];

            const content = [
                'import { hydrateRoot } from "react-dom/client";',
                `import { ${componentName} } from "../pages/${componentName}";\n`,
                `hydrateRoot(document, <${componentName} />);`
            ].join('\n');

            await writeFile(
                join(reactIndexDir, `${componentName}Index.tsx`),
                content
            );
        }
    } catch (error) {
        console.error(`Error generating index files: ${error}`);
    }
}