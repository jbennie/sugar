// add mocha div aside with the html
// from the .tests files
let html = `
    <div id="mocha"></div>
    ${window.html.join('')}
`;

// add mocha if needed
if ( ! window.mocha) {
    html += `
        <link rel="stylesheet" href="../node_modules/mocha/mocha.css" />
        <script src="../node_modules/mocha/mocha.js"></script>
    `;
}

// append the html to the document
document.body.innerHTML = html;

// launch mocha
if ( ! window.mocha) {
    setTimeout(() => {
		mocha.run();
    });
}
