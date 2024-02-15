import useNewsQuery from "../../hooks/useNewsQuery"
import ErrorDisplay from "../ErrorDisplay"
import FeaturedNewsCard from "./FeaturedNewsCard"
import NewsCard from "./NewsCard"
import NewsPreview from "./NewsPreview"
import TopHeadline from "./TopHeadline"


const NewsFeed = () => {
    const { newsData, error, loading } = useNewsQuery()
    if (loading.state) {
        return (
            <div className="w-full min-h-screen col-span-12 bg-gray-300">
                <h1 className="text-center dark:text-gray-700 p-5 text-bold">{loading.message}</h1>
            </div>
        );
    }

    if (error || newsData.length === 0) {
        return (
            <div className="col-span-12">
                <ErrorDisplay>
                    <span>{error ? error.message : 'Oops! News Not found'}</span>
                </ErrorDisplay>
            </div>
        );
    }

    // Filter out news articles with no image or placeholder image
    const filteredNewsData = newsData?.filter(item => item.imageUrl && item.imageUrl !== 'https://placehold.co/600x400');
    // Filter out news articles with only placeholder image
    const placeHolderData = newsData?.filter(item => item.imageUrl === 'https://placehold.co/600x400');

    // Split filtered news articles into top headline and other articles
    const [topHeadline, ...newsArticles] = [...filteredNewsData, ...placeHolderData] || [];

    // Define the featured news from remaining articles
    const featuredNews = newsArticles[0];

    return (
        <main className="my-10 lg:my-14">
            <div className="container mx-auto grid grid-cols-12 gap-8 ">
                {/* left side news */}
                <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8  grid-flow-row-dense">
                    {topHeadline && <TopHeadline key={topHeadline.id} {...topHeadline} />}
                    {featuredNews && <FeaturedNewsCard key={featuredNews.id} {...featuredNews} />}

                    {newsArticles.slice(1, Math.ceil(newsArticles.length / 2)).map((news) => (
                        <NewsCard
                            key={news.id}
                            {...news}
                        />
                    ))}
                </div>

                {/* right side news*/}
                <div className="col-span-12 self-start xl:col-span-4">
                    <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                        {newsArticles.slice(Math.ceil(newsArticles.length / 2)).map((news, index) => (
                            <NewsPreview
                                key={news.id}
                                {...news}
                                // Only set imageUrl if it's the first item in the array
                                imageUrl={index === 0 ? news.imageUrl : undefined}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NewsFeed