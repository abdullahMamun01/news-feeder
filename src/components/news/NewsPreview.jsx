import React, { useRef, useState } from 'react'
import getTimeFormate from '../../utils/getTimeFormate'

const NewsPreview = ({ title, content, publishedAt, imageUrl, url }) => {
    const imageRef = useRef(null)

    const handleImageError = () => {
        imageRef.current.src = 'https://placehold.co/600x400'
    }

    return (

        <div className="col-span-12 mb-6 md:col-span-8">
            {imageUrl && <img className="w-full " ref={imageRef} src={imageUrl} alt="thumb" onError={handleImageError} />}

            <div className="col-span-12 mt-6 md:col-span-4">
                <a href={url} target='_blank' >
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]  cursor-pointer">
                        {title}
                    </h3>
                </a>
                <p className="text-base text-[#292219] dark:text-[#94A3B8]">
                    {content?.slice(0, 150)}
                </p>
                <p className="mt-5 text-base  text-[#94908C] dark:text-gray-400 ">
                    {getTimeFormate(publishedAt)}
                </p>
            </div>
        </div>

    )
}

export default NewsPreview