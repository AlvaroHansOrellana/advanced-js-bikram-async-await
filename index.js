//DESARROLLA AQUI TUS SOLUCIONES

// EJERCICIO 01

const getRandomPokemon = async () => {
    try {
        // Realizar la solicitud a la API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 177)}`);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }

        // Si la respuesta es exitosa, procesar los datos
        const data = await response.json();
        console.log('Personaje:', data);
        return data;

    } catch (error) {
        // Manejar errores de red o del servidor
        console.error('Hubo un problema con la solicitud:', error.message);
    }
};

getRandomPokemon().then(data => console.log(data));


// EJERCICIO 02

const getImageAndName = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;
        return { name, img }
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error.message);
    }
};

// EJERCICIO 03 ----- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:


const printImageAndName = async () => {
    try {
        const data = await getImageAndName();  // Realizar la solicitud a la API
        return `
        <section>
        <img src="${data.img}" alt="${data.name}">
            <h1>${data.name}</h1>
            </section>`
    } catch (error) {
        // Manejar errores de red o del servidor
        console.error('Hubo un problema con la solicitud:', error.message);
    }
};


//EJERCICIO 04

const getRandomDogImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        let data = await response.json()
        let imagen = data.message
        //console.log(imagen);
        return imagen;
    } catch (error) {
        // Manejar errores de red o del servidor
        console.error('Hubo un problema con la solicitud:', error.message);
    }
}

// getRandomDogImage().then(item => console.log(item));

//EJERCICIO 05  

const getRandomPokemonImage = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        let data = await response.json()
        let imagen = data.sprites.front_default;
        return imagen;
    } catch (error) {
        console.error('Hubo un error en la solicitud', error.message);
    }

};

//EJERCICIO 06

// const printPugVsPikachu = async () => {
//     try {
//         let dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
//         let pokeResponse = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
//         if (!dogResponse.ok) {
//             throw new Error(`Error HTTP: ${dogResponse.status} - ${dogResponse.statusText}`);
//         }
//         if (!pokeResponse.ok) {
//             throw new Error(`Error HTTP: ${pokeResponse.status} - ${pokeResponse.statusText}`);
//         }
//         let dogData = await dogResponse.json();
//         let dogImg = dogData.message;
//         let pokeData = await pokeResponse.json();
//         let pokeImg = pokeData.sprites.front_default;
//         let vs = "https://imgs.search.brave.com/G9N1fEk2XqKORl-MFJ-mJL2BkHl93WrHPnXecsG3TBw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTEvVmVy/c3VzLVBORy1IRC5w/bmc";
//         const createImageContainer = (images) => {
//             let container = document.createElement('div');
//             container.setAttribute('id', 'pug-vs-pikachu');
//             container.style.display = 'flex';

//             for (let i = 0; i < images.length; i++) {
//                 const { src, alt, width } = images[i];
//                 container.appendChild(createImageElement(src, alt, width));
//             }

//             return container;
//         };

//         let dogImageElement = document.createElement('img');
//         dogImageElement.src = dogImg;

//         let vsImageElement = document.createElement('img');
//         vsImageElement.src = vs;

//         let pokeImageElement = document.createElement('img');
//         pokeImageElement.src = pokeImg;

//         container.appendChild(dogImageElement);
//         container.appendChild(vsImageElement);
//         container.appendChild(pokeImageElement);

//         // Insertar el contenedor en el cuerpo del documento
//         document.body.appendChild(container);
//     } catch (error) {
//         console.error('Hubo un error en la segunda solicitud', error.message);
//     };
//    };

// printPugVsPikachu();

//Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.

async function getRandomCharacter() {
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 827)}`)

        let data = await response.json();
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        return data
    } catch (error) {
        // Manejar errores de red o del servidor
        console.error('Hubo un problema con la solicitud:', error.message);
    }
}


//   Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

const getRandomCharacterInfo = async () => {
    try {
        let response = await fetch('https://rickandmortyapi.com/api/character/4');
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        let img = data.image;
        console.log(img)
        let name = data.name;
        console.log(name)
        let episodes = data.episode;
        let episodeLength = episodes.length;
        console.log(episodes)
        let firstEpisode = data.episode[0]
        console.log(firstEpisode)

        let secondResponse = await fetch('https://rickandmortyapi.com/api/episode/6');
        const secondData = await secondResponse.json();
        if (!secondResponse.ok) {
            throw new Error(`Error HTTP: ${secondResponse.status} - ${secondResponse.statusText}`);
        }
        let firstEpisodes = await fetch(secondResponse);
        let firstEpisodeName = secondResponse.name;
        let airDate = secondData.air_date;
        return { img, name, episodes, firstEpisodes, firstEpisodeName, airDate, episodeLength };
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error.message);
    }
}

// EJERCICIO 09

async function getRandomCharacterInfo() {
    try {
        let data = await getRandomCharacter();

        let img = data.image;
        let name = data.name;
        let episodes = data.episode;
        console.log(episodes);
        let episodesLength = episodes.length;
        let firstEpisodeUrl = episodes[0];
        console.log(firstEpisodeUrl)
        let datosPrimerEpisodio = await fetch(firstEpisodeUrl);

        let datosFecha = await datosPrimerEpisodio.json();
        let firstEpisode = datosFecha.name;

        let dateEpisode = datosFecha.air_date;
        console.log(dateEpisode)



        return { img, name, episodes, dateEpisode, firstEpisode, episodesLength }

    } catch (error) {
        // Manejar errores de red o del servidor
        console.error('Hubo un problema con la solicitud:', error.message);
    }
}
// IM DONE

//Ejercicio 9. Pintar en el dom las tarjetas de personaje. ++++++++++++++++++++ 
async function pintarEnElDom() {
    let dat = await getRandomCharacterInfo();
    console.log(dat);
  
    //Pintamos la tarjeta de personaje en el dom:
    //empezamos creando los elementos section, ul, li, img
    let section = document.createElement("section");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = dat.img;
    //creamos los contenedores de texto, <p>
    let nombrePersonaje = document.createElement("p");
    nombrePersonaje.textContent = (`${dat.name}`);
    let episodiosPersonaje = document.createElement("p");
    episodiosPersonaje.textContent = (`Número de episodios en los que sale: ${dat.episodesLength}`);
    let primerEpisodio = document.createElement("p");
    primerEpisodio.textContent = (`Primera aparición en la serie: ${dat.firstEpisode}`);
    //append de p al li
    li.appendChild(nombrePersonaje);
    li.appendChild(img);
    li.appendChild(episodiosPersonaje);
    li.appendChild(primerEpisodio);
    //append de lis al ul
    ul.appendChild(li);
    section.appendChild(ul);
    //append del container al body
    document.body.appendChild(section);
  
  }
  pintarEnElDom();