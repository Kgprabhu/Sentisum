class SearchContainer {

    getSearchResults=(searchText)=>{
      const url  = 
      `https://api-demo.sentisum.com/api/v1/comments/textsearch?source=dhl-parcel&terms=${searchText}&sentiment=all&apiKey=AU_WtVnh93Tixe_CNZqp`
      const searchResult = fetch(url).then((response)=>{
         const searchData = response.json().then((data)=>{
            return data
        })
        return searchData
       }
      )
      console.log('final res',searchResult)
      return searchResult
    }

}


const searchContainer = new SearchContainer()
export {searchContainer,SearchContainer}
export default searchContainer

