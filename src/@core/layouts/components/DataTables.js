import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export function DataTables({ columns, data = [], defaultSortFieldId, filterText, onFilter, onClick }) {
  const CustomStylesTable = {
    table: {
      style: {
        backgroundColor: 'none',
        width: 'auto' // set the width of the table wrapper
      }
    },
    cells: {
      style: {
        paddingLeft: '20px', // override the cell padding for data cells
        justifyContent: 'center',
        fontWeight: 'bold'
      }
    },
    rows: {
      style: {
        backgroundColor: '#D5D5D540',
        marginTop: '10px',
        borderRadius: '10px',
        border: '0px',
        minHeight: '72px', // override the row height
        '&:not(:last-of-type)': {
          border: '0px'
        }
      }
    },
    denseStyle: {
      minHeight: '32px'
    },
    headRow: {
      style: {
        backgroundColor: '#8F0D1E',
        minHeight: '52px',
        borderRadius: '10px'
      },
      denseStyle: {
        minHeight: '32px'
      }
    },
    headCells: {
      style: {
        paddingLeft: '20px', // override the cell padding for head cells
        paddingRight: '10px',
        justifyContent: 'center',
        color: 'rgb(243 241 241)'
      }
    }
  }

  // CSS styles
  const styles = `
          .pagination {
              display: flex;
              border-radius: 10px;
              justify-content: center;
              background-color: #D5D5D540;
              margin-top: 20px;
              width: 100%;
              padding: 10px 0;
          }
          .pagination li {
              display: inline-block;
              margin-right: 5px;
              padding: 5px;
              border-radius: 15px;
              background-color: transparent;
              width: 40px;
              text-align: center;
          }
          .pagination li.active {
              background-color: #8F0D1E;
          }
          .pagination li.disabled {
              opacity: 0.5;
              cursor: default;
          }
          .pagination li a {
              cursor: pointer;
              color: black;
          }
          .pagination li.active a {
              cursor: pointer;
              color: #fff;
          }
          .pagination li.disabled a {
              cursor: not-allowed;
              color: grey;
          }
          // .pagination li:hover{
          //     background-color: #8F0D1E;
          // }
          // .pagination li:hover a{
          //     background-color: #8F0D1E;
          //     color: #fff;
          // }
          .pagination li.disabled:hover{
              background-color: transparent;
          }
          .pagination li.disabled:hover a{
              background-color: transparent;
              color: grey;
          }
          `

  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState('all')

  const handleItemsPerPageChange = event => {
    setItemsPerPage(event.target.value)
    // setCurrentPage(0);
  }

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
    setItemsPerPage(itemsPerPage)
  }

  const offset = currentPage * itemsPerPage
  let currentPageData = []
  let pageCount = 0

  if (data !== null) {
    currentPageData = itemsPerPage === 'all' ? data : data.slice(offset, offset + itemsPerPage)
    pageCount = Math.ceil(data.length / itemsPerPage)
  }

  return (
    <>
      {data ? (
        <div>
          {data.length === 0 ? (
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '24px' }}>Loading...</h1>
            </div>
          ) : (
            <DataTable
              columns={columns}
              customStyles={CustomStylesTable}
              data={currentPageData}
              defaultSortAsc={false}
              defaultSortFieldId={defaultSortFieldId}
            />
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px' }}>Data Tidak Tersedia</h1>
        </div>
      )}
      {itemsPerPage !== 'all' && (
        <div>
          <style>{styles}</style>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            forcePage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      )}
    </>
  )
}
