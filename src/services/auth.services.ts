const baseUrl = 'https://rickandmortyapi.com/api';

const characterUrl = `${baseUrl}/character`;

export const getMorty = async () => {
    const data = await fetch(`${characterUrl}/2`);
    const resp = await data.json();
    return resp;
}