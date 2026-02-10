import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const style = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: "2px solid #e0e0e0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "0 20px",
    zIndex: 1000,
  },
  conteudo: {
    width: "100vw",
    height: "90vh",
    marginTop: "10vh",
    overflowX: "hidden",
  },
};

const Layout = () => {
  return (
    <>
      <Box bgcolor="background.paper" position="static" sx={style.header}>
        <Typography color="text.primary" fontWeight={"bold"} fontSize="1.6rem">
          LEAF - FH Maison
        </Typography>
      </Box>
      <Box sx={style.conteudo}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
