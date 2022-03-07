import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

const EnhancedTablePagination = (props) => {
  const labelDisplayedRows = ({ from, to, count }) => {
    return `${from}-${to} de ${count !== -1 ? count : `mais que ${to}`}`;
  };
  
  const handleChangeRowsPerPage = (event) => {
    props.updateRowsPerPage(parseInt(event.target.value, 10));
    props.updatePage(0);
  };
  
  const handleChangePage = (event, newPage) => {
    props.updatePage(newPage);
  };
  
  return (
    <>
      <TablePagination
          rowsPerPageOptions={[5, 15, 30, 100]}
          labelRowsPerPage="Produtos por página"
          labelDisplayedRows={labelDisplayedRows}
          component="div"
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          count={props.count}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </>
  );
};

export default EnhancedTablePagination;
