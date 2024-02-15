import { useEffect, useState } from "react"
import {useContext} from 'react'
import { SearchContext, SelectedCategoryContext } from "../contexts"
import { buildNewsUrl } from "../utils/buildNewsUrl"

const useNewsQuery = () => {
    const [newsData, setNewsData] = useState([])
    const [error, setError] = useState(null)
    const {selectedCategory} = useContext(SelectedCategoryContext)
    const {searchNews} = useContext(SearchContext)

    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    const transFormData  = (data) =>{
        return data.map((item,i) =>  ({
            id:  crypto.randomUUID() ,
            source: item.source ,
            title: item.title ,
            description: item.description ,
            publishedAt: item.publishedAt ,
            content: item.content,
            url: item.url ,
            imageUrl : item.urlToImage || 'https://placehold.co/600x400',
            author: item.author
        }))
    }



    const url  = buildNewsUrl({searchNews,selectedCategory})
    //fetch data from news api
    const fetchNewsData = async (url) => {
        try {
            setLoading({
                ...loading ,
                state: true,
                message: 'Fetching news data...'
            })
            const response = await fetch(url)
            if(!response.ok){
                const message = `Fetching data failed : ${response.status}`
                throw new Error(message)
            }

            const data = await response.json()
            const updateNewsData = transFormData(data.articles || data.result)
            setNewsData(updateNewsData)

        } catch (error) {
            console.log(error.status)
            setError(error)

        } finally {
            
            setLoading({
                ...loading,
                state:false ,
                message:""
            })
        }
    }



    useEffect(() =>{
        let ignore  = false
        if(!ignore){
            fetchNewsData(url)
        }
        return () => {
            ignore = true
        }


    } , [selectedCategory,searchNews])

    return {
        newsData ,
        error,
        loading
    }

}

export default useNewsQuery