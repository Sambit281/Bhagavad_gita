const chapter = document.getElementById("chapter");
const chapter_name = document.getElementById("name");
const name_meaning = document.getElementById("meaning");
const summary = document.getElementById("summary");
const next = document.getElementById("next");
let result = " ";
let num = 0;


const getNewresult = () => {
    if (num == 0 || num == 18) {
        num = 0;
    }

    chapter.innerHTML = `Chapter: ${result[num].chapter_number}`
    chapter_name.innerHTML = `Name: ${result[num].name_translated}`
    name_meaning.innerHTML = `Meaning: ${result[num].name_meaning}`
    summary.innerHTML = `${result[num].chapter_summary}`
    next.addEventListener('click', getNewresult);
    num = num + 1;
}

const gitaapi = async () => {
    const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a301aa1b03mshdec2fa833a1d26fp1c4114jsn48658eef1a38',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        result = await response.json();
        getNewresult();
    } catch (error) {
        console.error(error);
    }
};
gitaapi();