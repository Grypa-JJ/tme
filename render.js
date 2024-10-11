const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const render = async (filename) => {
    const filePath = path.join(process.cwd(), filename);

    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously',  // runScripts, not runeScript
        resources: 'usable'
    });

    return new Promise((resolve,reject) =>{
        dom.window.document.addEventListener('DOMContentLoaded', () =>{
           resolve(dom);
        });
    });

};

module.exports = render;
