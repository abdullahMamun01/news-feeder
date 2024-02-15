import React, { useRef } from 'react'
import getTimeFormate from '../../utils/getTimeFormate'

const FeaturedNewsCard = ({ title, description, url, imageUrl, publishedAt }) => {

  const imageRef = useRef(null)

  const handleImageError = () => {
      imageRef.current.src = 'https://placehold.co/600x400'
  }

  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">

      <div className="col-span-12 md:col-span-6">
        <a href={url} target='_blank' >
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
            {title}
          </h3>
        </a>
        <p className="text-base text-[#292219] dark:text-gray-400">
          {description}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">{getTimeFormate(publishedAt)}</p>
      </div>

      <div className="col-span-12 md:col-span-6">
        <img className="w-full" src={imageUrl} alt={title} ref={imageRef} onError={handleImageError} />
      </div>
    </div>
  )
}

export default FeaturedNewsCard


