import React from 'react'

const NewsThumbNail = ({imageUrl}) => {
    return (
        <div className="col-span-12 md:col-span-6">
            <img
                className="w-full"
                src={imageUrl}
                alt="thumb"
            />
        </div>
    )
}

export default NewsThumbNail