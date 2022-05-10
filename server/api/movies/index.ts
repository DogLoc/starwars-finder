import {Movies} from "~/utils/types"

export default (req, res): Movies[] => {
    const movies: Movies[] = [
        {
        title: "Stars Wars",
        episode_id: 1,
        opening_crawl: "bla bla bla",
        director: "Me",
        producer: "Me",
        release_date: "today",
        characters: ['Me', 'and Me'],
        planets: ['My planet'],
        starships: ['my starship'],
        vehicles: ['my vehicles'],
        },
        {
            title: "Stars Wars",
            episode_id: 2,
            opening_crawl: "bla bla bla",
            director: "Me",
            producer: "Me",
            release_date: "today",
            characters: ['Me', 'and Me'],
            planets: ['My planet'],
            starships: ['my starship'],
            vehicles: ['my vehicles'],
        },
        {
            title: "Stars Wars",
            episode_id: 2,
            opening_crawl: "bla bla bla",
            director: "Me",
            producer: "Me",
            release_date: "today",
            characters: ['Me', 'and Me'],
            planets: ['My planet'],
            starships: ['my starship'],
            vehicles: ['my vehicles'],
        },
        {
            title: "Stars Wars",
            episode_id: 2,
            opening_crawl: "bla bla bla",
            director: "Me",
            producer: "Me",
            release_date: "today",
            characters: ['Me', 'and Me'],
            planets: ['My planet'],
            starships: ['my starship'],
            vehicles: ['my vehicles'],
        },
        {
            title: "Stars Wars",
            episode_id: 2,
            opening_crawl: "bla bla bla",
            director: "Me",
            producer: "Me",
            release_date: "today",
            characters: ['Me', 'and Me'],
            planets: ['My planet'],
            starships: ['my starship'],
            vehicles: ['my vehicles'],
        }
    ]
    return movies as Movies[]
}
