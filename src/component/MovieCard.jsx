import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const { ticketBookHandeler } = useContext(MyContext)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={movie.nabi} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {movie.name}
                        <div className="badge badge-secondary">{movie.category?.name}</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <button onClick={() => ticketBookHandeler(movie)} className='btn btn-primary btn-sm'>Book Ticket</button>
                        <Link to={`/movies/${movie._id}`}>
                            <button className='btn btn-info btn-sm'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard