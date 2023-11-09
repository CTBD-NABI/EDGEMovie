
import { createContext, useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { toast } from "react-toastify";


export const MyContext = createContext()

export const DataProvider = ({ children }) => {

    const [movies, setAllMovies] = useState([])
    const [loading, setLoading] = useState()
    const [category, setCategory] = useState([])
    const [ticketBooked, setTicket] = useState([])
    const [page, setPage] = useState(1)
    const [isLastPage, setLastPage] = useState(false)

    const itemsPerPage = 10

    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    console.log("🚀 ~ file: MyContext.jsx:16 ~ DataProvider ~ page:", page)

    const ticketBookHandeler = (userTicket) => {

        setTicket([...ticketBooked, userTicket])

        // alert
        toast.success('🦄 Ticket Booked!', {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const userSearch = (e) => {
        const searchData = e.target.value
        movieSearch(searchData)

    }
    const movieSearch = async (movieUserSeacrh) => {
        setLoading(true)
        const query = `*[_type == "movies" && name match "${movieUserSeacrh}*" ] {name, _id, cast, category, poster, trailerUrl, category->{name},"nabi": poster.asset->url }`
        const searchedMovie = await client.fetch(query)
        setAllMovies(searchedMovie)
        setLoading(false)

    }

    // console.log(ticketBooked)
    const getAllMovies = async () => {
        setLoading(true)
        const rangeSelction = (page - 1) * itemsPerPage

        const query = `*[_type == "movies"  ]{name, _id, cast, category, poster, trailerUrl, category->{name},"nabi": poster.asset->url }[${rangeSelction}...${rangeSelction + itemsPerPage + 1}]`
        const allMovies = await client.fetch(query)
        setAllMovies(allMovies)
        setLoading(false)
    }
    const getAllCategory = async () => {
        const query = `*[_type == "category"]`
        const allCategory = await client.fetch(query)
        setCategory(allCategory)

    }

    // console.log(category)


    useEffect(() => {
        getAllMovies()
        getAllCategory()
    }, [page])




    return <MyContext.Provider value={{ movies, loading, category, ticketBookHandeler, ticketBooked, userSearch, nextPage, prevPage, page }}>
        {children}
    </MyContext.Provider>

}