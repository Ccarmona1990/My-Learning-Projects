import { main } from "./utils/main.js";

    const zeldagamesAPI_url = 'https://zeldagammes-api.onrender.com/zelda_games';
    
    const getZeldaGames = async () => {
        try {
            const response = await fetch(zeldagamesAPI_url);
            const data = await response.json(); 
            console.log(data);
        } catch (error) {
            console.log(error);
        } } 
    getZeldaGames(); 
    main();
