const { minify } = require('terser');
const fs = require('fs-extra');
const path = require('path');
const package = require('./package.json');

async function build() {
    // Create dist directory
    await fs.ensureDir('dist');

    // Read the source file
    const source = await fs.readFile('src/widget.js', 'utf8');
    
    // Minify the code
    const minified = await minify(source, {
        compress: true,
        mangle: true
    });

    // Write versioned and latest files
    const version = package.version;
    
    // Write non-minified versioned file
    await fs.writeFile(
        `dist/widget.v${version}.js`,
        source
    );
    
    // Write non-minified latest file
    await fs.writeFile(
        'dist/widget.latest.js',
        source
    );
    
    // Write minified versioned file
    await fs.writeFile(
        `dist/widget.v${version}.min.js`,
        minified.code
    );
    
    // Write minified latest file
    await fs.writeFile(
        'dist/widget.latest.min.js',
        minified.code
    );

    console.log('Build completed successfully!');
}

build().catch(console.error); 