import ReactPaginate from 'react-paginate';
import '../css/Pagenatetion.css';
import React from 'react';

type propsType = {
    changePage: (nowPage: number) => void,
    totalPage: number,
    selectedPage: number,
}

export function Pagenation(props: propsType) {

    return (
        <React.Fragment>
            {
                props.totalPage > 0 &&
                <ReactPaginate
                    pageCount={props.totalPage}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={(selectedItem: {
                        selected: number;
                    }) => {
                        props.changePage(selectedItem.selected + 1);
                    }}
                    forcePage={props.selectedPage - 1}
                    containerClassName='pagination'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    activeClassName='active'
                    previousLabel='<'
                    nextLabel='>'
                    previousClassName='page-item'
                    nextClassName='page-item'
                    previousLinkClassName='page-link'
                    nextLinkClassName='page-link'
                    disabledClassName='disabled'
                    breakLabel='...'
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                />
            }
        </React.Fragment>
    );
}