import React, { useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { AddCircle } from "@mui/icons-material";

const EnhancedTableToolbar = (props) => {
  const { selected } = props;

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(selected.length > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {selected.length > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {selected.length} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Produtos
          </Typography>
        )}

        {selected.length > 0 && (
          <Tooltip title="Deletar">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
        {selected.length === 1 && (
          <Tooltip title="Edit">
            <IconButton onClick={props.handleOpenModal}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Criar" >
          <IconButton onClick={props.handleOpenModal}>
            <AddCircle />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </>
  );
};

EnhancedTableToolbar.propTypes = {
  selected: PropTypes.array.isRequired,
};

export default EnhancedTableToolbar;
