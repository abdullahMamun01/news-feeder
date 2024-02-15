export const buildNewsUrl = (options) => {
    let baseUrl  = 'http://localhost:8000/v2/top-headlines'
    const {searchNews ,selectedCategory} = options
    if(searchNews){
        baseUrl = `http://localhost:8000/v2/search?q=${searchNews}`
    }else if(selectedCategory){
        
        baseUrl = `http://localhost:8000/v2/top-headlines?category=${selectedCategory}`
    }

    return baseUrl
}