/**
 * Creates a header and footer element, and then asynchronously retrieves their data from
 * their HTML files and finally inserts the data into them. Returns the header and footer as an object.
 */
export const getHeaderFooter = async () => {
    const header: HTMLElement = document.createElement('header');
    const footer: HTMLElement = document.createElement('footer');
    const headerSrc = './src/html/header.html';
    const footerSrc = './src/html/footer.html';
    
    await Promise.all([
        fetch(headerSrc).then(headerRes => headerRes.text()).then(headerText => header.innerHTML = headerText),
        fetch(footerSrc).then(footerRes => footerRes.text()).then(footerText => footer.innerHTML = footerText)
    ]);
    
    return {header, footer};
};

/**
 * Inserts a header and footer 
 * @param {HTMLElement} header a header HTML element.
 * @param {HTMLElement} footer a footer HTML element.
 */
export const insertHeaderFooter = (header: HTMLElement, footer: HTMLElement) => {
    const main: HTMLElement = document.querySelector('#main');
    main.insertBefore(header, main.firstChild);
    main.appendChild(footer);
};