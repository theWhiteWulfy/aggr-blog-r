import React from 'react'
import {
    OffcanvasSearch,
    OffcanvasSearchBox,
    SearchRemove,
    SearchOverlayForm,
    MobileNavigationClose,
    Form,
    Input
} from './style'

const SearchPopup = ({ofcanvasSearchOpen, SearchHandaler}) => {
    return (
        <OffcanvasSearch className={`main-search-active ${ofcanvasSearchOpen ? "inside" : ""}`}>
            <OffcanvasSearchBox>
                <SearchRemove>
                    <MobileNavigationClose onKeyDown={SearchHandaler} onClick={SearchHandaler}></MobileNavigationClose>
                </SearchRemove>
                <SearchOverlayForm>
                    <Form action="#">
                        <Input 
                          type="text"
                          placeholder="Search"
                        />
                    </Form>
                </SearchOverlayForm>
            </OffcanvasSearchBox>
        </OffcanvasSearch>
    )
}

export default SearchPopup