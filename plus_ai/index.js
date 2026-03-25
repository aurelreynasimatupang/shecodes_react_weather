let apiKey = '2f06037930c0t042fb8364af86adf19o';
let apiUrl = '';
let context = '';
let promptText = '';

const displayPoem = (res) => {
    console.log(res.data.answers);
    new Typewriter('#poem', {
        strings: res.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    })
}

const generatePoem = (event) => {
    event.preventDefault();
    const userInput = document.querySelector("#user-prompt");
    const poemText = document.querySelector('#poem');
    poemText.innerHTML = `Writing a porm on '${userInput.value}'`;

    console.log('Processing');
    context = 'You are a romantic poem expert that specialize in short poems, proses and rhymes';
    promptText = userInput.value;
    apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayPoem);
}

const formComponenet = document.querySelector("form");
formComponenet.addEventListener("submit", generatePoem);
