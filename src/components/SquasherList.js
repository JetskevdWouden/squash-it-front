import React from 'react';

export default function SquasherList(props) {
    console.log("IM RUNNING 3")
    const squashers = props.squashers

    return (
        <div>
            <div>
                <h1>Here are your squashers:</h1>
            </div>
            <ul>
                {squashers &&
                    squashers.map(squasher => 
                        <li key={squasher.id}>
                            <img src={squasher.image} alt={squasher.name} />
                        </li>
                    )
                }
                {!squashers && <li>loading your squashers...</li>}
            </ul>
        </div>
    )
}