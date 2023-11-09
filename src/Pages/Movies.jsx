import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import MovieCard from '../component/MovieCard'
import { Loader } from '../component/Loader'

const Movies = () => {
    const { movies, loading, category, userSearch, nextPage, prevPage, page } = useContext(MyContext)
    const movieLength = movies.length
    console.log(movieLength)
    // console.log(category)

    return (
        <div className='container mx-auto'>

            <div className='flex justify-center gap-4'>
                <input onChange={userSearch} type="search" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <select className="select select-bordered  max-w-xs">
                    <option disabled selected>Category</option>
                    {
                        category.map(cat => <option key={cat._id}>{cat.name}</option>)
                    }
                </select>
            </div>


            <div className='flex flex-wrap gap-3 justify-center mt-5'>

                {
                    loading && <Loader />
                }


                {
                    movies.slice(0, 10).map(movie => <MovieCard key={movie._id} movie={movie} />)
                }
            </div>
            <div>
                <div className='my-4'>
                    <div className='flex justify-between'>
                        <button onClick={prevPage} disabled={page == 1} className='btn btn-primary'>Previous</button>
                        <button onClick={nextPage} className='btn btn-secondary' disabled={movieLength < 11}>Next</button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Movies