import React from 'react'
import {observable, decorate} from 'mobx'
import {observer} from 'mobx-react'
import {isEmptyObj} from '../../utils'
import {IoIosThumbsDown as ThumbsDownIcon,IoIosThumbsUp as ThumbsUpIcon} from 'react-icons/io'
import {Header,SearchPageWrapper,Sentence,SentenceList,MathcedSentence,SentenceHeader,SentenceWrapper,SentimentWrapper,IconsWrapper,PostiveIcon,NegativeIcon} from './elements'
import {SearchBox} from '../../components/SearchBox'
import Pagination from '../../components/Pagination'
import {searchContainer} from '../../models'
import Loader from 'react-loader-spinner'

class SearchPage extends React.Component{
    searchResult = {}
    matchedSentences = []
    isLoaderVisible = false
    start = 0
    end = 30
    limit = 30
    handleSearchResult=async(searchText)=>{
        this.searchResult = {}
        if(searchText!==''){
            this.isLoaderVisible = true
            const response = await searchContainer.getSearchResults(searchText)
            this.isLoaderVisible = false
            this.searchResult = response  
        }
    }

    renderSentence=(item)=>{
        return(
            <Sentence>
                {item}
            </Sentence>
        )
    }

    renderDistribution=(sentimentDistribution)=>{
        const {negative,positive} = sentimentDistribution
        return(
            <SentimentWrapper>
                <h2>Sentiment Distribution</h2>
                <IconsWrapper>
                    <PostiveIcon><ThumbsUpIcon/>{positive}</PostiveIcon>
                    <NegativeIcon><ThumbsDownIcon/>{negative}</NegativeIcon>
                </IconsWrapper>
            </SentimentWrapper>
        )
    }

    handleClick=(start,end)=>{
        this.start = start
        this.end = end
    }

    renderData=()=>{
        const {sentences,sentimentDistribution} = this.searchResult
        // const matchedSentences = []
        //API Error : 
        // sentences are not in correct format
        // sentences are maintain as object instead of array
        for(let sentence in sentences){
            this.matchedSentences.push(sentence)
        }
        const totalCount = this.matchedSentences.length
        this.paginationCount = Math.ceil(totalCount/this.limit)
        const senetenceList = this.matchedSentences.slice(this.start,this.end)
        return(
                <SentenceWrapper>
                    <MathcedSentence>
                        <SentenceHeader> Mathced Sentences </SentenceHeader>
                        <SentenceList>
                            {senetenceList.map(this.renderSentence)}
                        </SentenceList>
                        {this.paginationCount >1 && <Pagination paginationCount = {this.paginationCount} onClick={this.handleClick}/>}
                    </MathcedSentence>
                    {this.renderDistribution(sentimentDistribution)}
                </SentenceWrapper>
        )
    }
    render(){
        return(
            <SearchPageWrapper>
                <Header>
                    <SearchBox onSubmit={this.handleSearchResult}/>
                </Header>
                {this.isLoaderVisible && <Loader  type="Oval" color="#00BFFF" height={100} width={100}/>}
                { !isEmptyObj(this.searchResult)  && this.renderData()}
            </SearchPageWrapper>
        )
    }
}

decorate(
    SearchPage,{
        start:observable,
        end:observable,
        searchResult:observable,
        MathcedSentence:observable,
        isLoaderVisible:observable,
        limit :observable
    }
)
export default observer(SearchPage)