import React, { useRef } from 'react'
import getTimeFormate from '../../utils/getTimeFormate'

const TopHeadline = ({ title, description, publishedAt, imageUrl, author, url }) => {
    const imageRef = useRef(null)

    const handleImageError = () => {
        imageRef.current.src = 'https://placehold.co/600x400'
    }
    return (
        <div className="col-span-12 grid grid-cols-12 gap-4">

            <div className="col-span-12 lg:col-span-4">
                <a href={url} target='_blank' >
                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                        {title}
                    </h3>
                </a>
                <p className="text-base text-[#5C5955] dark:text-[#94A3B8]">
                    {description}
                </p>
                <p className="mt-5 text-base text-[#5C5955] dark:text-gray-400">{getTimeFormate(publishedAt)}</p>
            </div>

            <div className="col-span-12 lg:col-span-8">
                <img className="w-full" src={imageUrl} alt="thumb" ref={imageRef} onError={handleImageError} />
                <p className="mt-5 text-base text-[#5C5955] dark:text-gray-400">
                    {author}
                </p>
            </div>

        </div>
    )
}

export default TopHeadline