import React from 'react'

const Card = (props) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt={`${props.name} Image`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}
export default Card


//db.<table_name>.insertOne({query},{})
//db.<table_name>.find()
//db.<table_name>.updateOne()
//db.<table_name>.deleteOne({query},{})