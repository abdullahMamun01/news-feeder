import NewsThumbNail from "./NewsThumbNail";
import getTimeFormate from "../../utils/getTimeFormate";
const NewsCard = ({ title, imageUrl, description, publishedAt, url }) => {
    const handleLinkClick = (url) => {
        // Prevent the default behavior of following the link
        // You can perform additional logic here before navigating to the URL
        window.open(url, '_blank');
    };
    return (

        <div className="col-span-12 md:col-span-6 lg:col-span-4">

            <div className="col-span-12 md:col-span-4">
                <a href={url} target='_blank' >
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                        {title}
                    </h3>
                </a>
                <p className="text-base text-[#292219] dark:text-gray-400">
                    {description?.slice(0, 150)}
                </p>
                <p className="mt-5 text-base text-[#94908C]">
                    {getTimeFormate(publishedAt)}
                </p>
            </div>
        </div>


    )
}

export default NewsCard;
