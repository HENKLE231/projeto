function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('#profile img')

    let imgUrl = 'assets/avatar.png';
    let imgAlt = 'Foto de Mayk Brito sorrindo, usando óculos, camisa preta, barba e fundo amarelo';

    if (html.classList.contains('light')) {
        imgUrl = 'assets/avatar-light.png';
        imgAlt = 'Foto de Mayk Brito sorrindo, usando óculos de sol, jaqueta preta e fundo roxo com azul'
    }

    img.setAttribute('src', imgUrl);
    img.setAttribute('alt', imgAlt);
}