import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Cart = () => {
    const { ticketBooked } = useContext(MyContext)
    return (
        <div><div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Cast</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        ticketBooked.map(ticket => <tr key={ticket._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={ticket.nabi} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{ticket.name}</div>

                                    </div>
                                </div>
                            </td>
                            <td>

                                <span className="badge badge-accent badge-sm">{ticket.category?.name}</span>
                            </td>
                            {
                                ticket.cast.map((c, i) => <td>{c}</td>)
                            }
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>)
                    }

                </tbody>
                {/* foot */}


            </table>
        </div></div>
    )
}

export default Cart