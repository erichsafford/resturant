const clearScreen = () => {
    let container = document.querySelector('.body-content')
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

export { clearScreen }