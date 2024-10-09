const img = document.querySelector('.images');

async function cats() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        console.log(data);

        img.src = `${data[0].url}`;

    } catch (error) {
        console.log('Error', error);

    }

}
