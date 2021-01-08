const controls = document.querySelector('.controls')

controls.addEventListener('change', handleUpdate)

function handleUpdate(e) {

    if (e.target.tagName !== 'INPUT') {
        return
    }

    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}${suffix}`);

}


