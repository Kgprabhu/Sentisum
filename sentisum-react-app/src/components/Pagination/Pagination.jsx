import React from 'react'
import {observable, decorate} from 'mobx'
import {observer} from 'mobx-react'
import {PaginationList,PaginationItem,PaginationWrapper,PaginationPrev,PaginationNext} from './elements'

class Pagination extends  React.Component{
    start = 0
    end = 30
    limit = 30
    paginationStart = 1
    paginationEnd = 10
    paginationLimit = 10
    activeIndex = 1
    handlePaginationClick=(number)=>{
        const {onClick} = this.props
        this.activeIndex = number
        this.start = (number-1) * this.limit
        this.end = this.start + this.limit
        onClick(this.start,this.end)
    }
    handlePrev=()=>{
        this.activeIndex = -1
        if(this.paginationStart !==1){
            this.paginationStart = this.paginationStart - this.paginationLimit
            this.paginationEnd = (this.paginationStart-1) + this.paginationLimit
        }
    }
    handleNext=()=>{
        const {paginationCount} = this.props
        this.activeIndex = -2
       if(  this.paginationEnd !== paginationCount ){
            this.paginationStart = this.paginationEnd + 1
            const end = (this.paginationStart-1) + this.paginationLimit
            this.paginationEnd = end > paginationCount ? paginationCount : end 
       }
    }
    renderPaginationItem=()=>{
        const items = []
        for(let number=this.paginationStart;number<=this.paginationEnd;number++){
            items.push(
            <PaginationItem key={number}   
            onClick={() => this.handlePaginationClick(number)}
            isActive = {this.activeIndex === number}
            >
                {number}
            </PaginationItem>)
        }
        return(
            <PaginationWrapper>
                <PaginationPrev isActive = {this.activeIndex === -1} onClick={this.handlePrev}>Prev</PaginationPrev>
                <PaginationList>
                    {items}   
                </PaginationList>
                <PaginationNext isActive = {this.activeIndex === -2} onClick={this.handleNext}>Next</PaginationNext>
            </PaginationWrapper>
        )
    }
    
    render(){
        return this.renderPaginationItem()
    }
}
decorate(
    Pagination,{
        start:observable,
        end:observable,
        limit:observable,
        paginationStart:observable,
        paginationEnd:observable,
        activeIndex:observable,
    }
)
export default observer(Pagination)
