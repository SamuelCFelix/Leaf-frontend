import { Visibility } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  container: {
    width: "100vw",
    height: "100vh",
  },
  header: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: "2px solid #e0e0e0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "0 20px",
  },
  boxConteudo: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflowY: "auto",
    overflowX: "hidden",
  },
  boxTitulo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px 20px 10px 20px",
  },
  boxCards: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
    padding: "0px 20px",
  },
  cardValores: {
    minWidth: "170px",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "10px",
    backgroundColor: "#ffffff",
    border: "2px solid #00e08e",
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      scale: "1.02",
      transition: "scale 0.1s ease-in-out",
    },
  },
  accordionFluxoGeral: {
    width: "250px",
    flexShrink: 0,
    backgroundColor: "#ffffff",
    border: "2px solid #00e08e",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    transition: "all 0.2s ease-in-out",

    "&::before": {
      display: "none",
    },

    "&.Mui-expanded": {
      margin: 0,
      borderTopLeftRadius: "25px",
      borderBottomRightRadius: "25px",
      transition: "all 0.2s ease-in-out",
    },
  },

  accordionDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  boxFluxoMensal: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "20px",
  },

  accordionFluxoMensal: {
    width: "200px",
    flexShrink: 0,
    backgroundColor: "#ffffff",
    border: "2px solid #00e08e",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    transition: "all 0.2s ease-in-out",

    "&::before": {
      display: "none",
    },

    "&.Mui-expanded": {
      margin: 0,
      borderTopLeftRadius: "25px",
      borderBottomRightRadius: "25px",
      transition: "all 0.2s ease-in-out",
    },
  },
  buttonBackHome: {
    margin: "20px 0 0 20px",
    fontWeight: "bold",
    borderTopLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  },
  buttonCard: {
    marginTop: "10px",
    fontWeight: "bold",
    borderTopLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  },
};

const CaixaMensal = () => {
  const navigate = useNavigate();

  return (
    <Box sx={style.container}>
      {/* Header */}
      <Box bgcolor="background.paper" position="static" sx={style.header}>
        <Typography color="text.primary" fontWeight={"bold"} fontSize="1.6rem">
          LEAF - FH Maison
        </Typography>
      </Box>

      {/* Conteúdo principal */}
      <Box sx={style.boxConteudo}>
        <Button
          variant="contained"
          sx={style.buttonBackHome}
          onClick={() => {
            navigate("/home");
          }}
        >
          Voltar para Home
        </Button>

        {/* Info Caixa Geral do Mês */}
        <Box sx={style.boxTitulo}>
          <Typography
            color="text.secondary"
            fontWeight={"bold"}
            fontSize={"1.4rem"}
          >
            Caixa Geral do Mês de Fevereiro/2026
            <IconButton size="small" sx={{ marginLeft: "8px" }}>
              <Visibility sx={{ color: "primary.main" }} />
            </IconButton>
          </Typography>
        </Box>
        <Box sx={style.boxCards}>
          <Box sx={style.cardValores}>
            <Typography color="text.secondary" fontWeight={"bold"}>
              RENDA MENSAL TOTAL
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.4rem"}
              color="primary.main"
            >
              R$ 1.440,00
            </Typography>
          </Box>
          <Box sx={style.cardValores}>
            <Typography color="text.secondary" fontWeight={"bold"}>
              ENTRADAS DO MÊS
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              color="primary.main"
            >
              R$ 2.540,00
            </Typography>
          </Box>
          <Box sx={{ ...style.cardValores, borderColor: "primary.error" }}>
            <Typography color="text.error" fontWeight={"bold"}>
              SAÍDAS DO MÊS
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              color="primary.error"
            >
              R$ 1.100,00
            </Typography>
          </Box>
        </Box>

        {/* Registros Mensais */}
        <Box sx={style.boxTitulo}>
          <Typography
            color="text.secondary"
            fontWeight={"bold"}
            fontSize={"1.4rem"}
          >
            Registros Mensais
            <IconButton size="small" sx={{ marginLeft: "8px" }}>
              <Visibility sx={{ color: "primary.main" }} />
            </IconButton>
          </Typography>
        </Box>
        <Box sx={style.boxCards}>
          <Box sx={style.cardValores}>
            <Typography color="text.secondary" fontWeight={"bold"}>
              Cartão de Crédito
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.4rem"}
              color="primary.main"
            >
              R$ 1.440,00
            </Typography>
          </Box>
          <Box sx={style.cardValores}>
            <Typography color="text.secondary" fontWeight={"bold"}>
              Cartão de Débito
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              color="primary.main"
            >
              R$ 2.540,00
            </Typography>
          </Box>
          <Box sx={style.cardValores}>
            <Typography color="text.secondary" fontWeight={"bold"}>
              Dinheiro
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.4rem"}
              color="primary.main"
            >
              R$ 1.440,00
            </Typography>
          </Box>
          <Box sx={{ ...style.cardValores, borderColor: "primary.error" }}>
            <Typography color="text.error" fontWeight={"bold"}>
              Saída Conta Bancária
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              color="primary.error"
            >
              R$ 1.100,00
            </Typography>
          </Box>
          <Box sx={{ ...style.cardValores, borderColor: "primary.error" }}>
            <Typography color="text.error" fontWeight={"bold"}>
              Saída em Dinheiro
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              color="primary.error"
            >
              R$ 1.100,00
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CaixaMensal;
