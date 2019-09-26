import React from 'react'
import {SeachboxWrapper,TextBox,SubmitButton} from './elements'

class SearchBox extends React.Component{
    searchText = ''
    handleChange=(event)=>{
       this.searchText = event.target.value
    }
    handleClick=()=>{
        const {onSubmit} = this.props
        onSubmit(this.searchText)
    }
    render(){
        return(
            <>
                <SeachboxWrapper>
                    <TextBox type='text' className='search-box' onChange={this.handleChange} placeholder='Ex: Good or test '/>
                    <SubmitButton onClick={this.handleClick}>Search</SubmitButton>
                </SeachboxWrapper>
                
            </>
        )
    }
}

export default SearchBox
export {SearchBox}