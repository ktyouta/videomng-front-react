import ReactPaginate from 'react-paginate';
import '../styles/css/Pagenatetion.css';
import React from 'react';

export type PagenationSize = "default" | "compact";

type propsType = {
    changePage: (nowPage: number) => void,
    totalPage: number,
    selectedPage: number,
    size?: PagenationSize,
}

export function Pagenation(props: propsType) {

    const isCompact = props.size === "compact";
    const containerClassName = isCompact ? 'pagination pagination--compact' : 'pagination';
    const pageClassName = isCompact ? 'page-item page-item--compact' : 'page-item';
    const pageLinkClassName = isCompact ? 'page-link page-link--compact' : 'page-link';

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
                    containerClassName={containerClassName}
                    pageClassName={pageClassName}
                    pageLinkClassName={pageLinkClassName}
                    activeClassName='active'
                    previousLabel='<'
                    nextLabel='>'
                    previousClassName={pageClassName}
                    nextClassName={pageClassName}
                    previousLinkClassName={pageLinkClassName}
                    nextLinkClassName={pageLinkClassName}
                    disabledClassName='disabled'
                    breakLabel='...'
                    breakClassName={pageClassName}
                    breakLinkClassName={pageLinkClassName}
                />
            }
        </React.Fragment>
    );
}