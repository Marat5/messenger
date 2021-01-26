// Добавляет .js в импорты

const FileHound = require('filehound');
const fs = require('fs');

const files = FileHound.create()
	.paths(`${__dirname}/static`)
	.discard('node_modules')
	.ext('js')
	.find();

files.then((filePaths) => {
	filePaths.forEach((filepath) => {
		fs.readFile(filepath, 'utf8', (err, data) => {
			if (!data.match(/import .* from/g)) {
				return;
			}
			const newData = data.replace(/(import .* from\s+['"])(.*)(?=['"])/g, '$1$2.js');
			if (err) throw err;

			fs.writeFile(filepath, newData, (error) => {
				if (error) {
					throw error;
				}
			});
		});
	});
});
