import { Visibility } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";

import { Outlet, useNavigate } from "react-router-dom";

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
    minWidth: "190px",
    height: "60px",
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
  buttonCard: {
    marginTop: "10px",
    fontWeight: "bold",
    borderTopLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  },
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box bgcolor={"background.default"} sx={style.container}>
      {/* Header */}
      <Box bgcolor="background.paper" position="static" sx={style.header}>
        <Typography color="text.primary" fontWeight={"bold"} fontSize="1.6rem">
          LEAF - FH Maison
        </Typography>
      </Box>

      {/* Conteúdo principal */}
      <Box sx={style.boxConteudo}>
        {/* Caixa Geral */}
        <Box sx={style.boxTitulo}>
          <Typography
            color="text.secondary"
            fontWeight={"bold"}
            fontSize={"1.4rem"}
          >
            Caixa Geral
            <IconButton size="small" sx={{ marginLeft: "8px" }}>
              <Visibility sx={{ color: "primary.main" }} />
            </IconButton>
          </Typography>
        </Box>
        <Box sx={style.boxCards}>
          <Box sx={style.cardValores}>
            <Typography color="text.secondary" fontWeight={"bold"}>
              CAPITAL ATUAL
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.8rem"}
              color="primary.main"
            >
              R$ 4.642,00
            </Typography>
          </Box>
          <Box sx={style.cardValores}>
            <Typography color="text.secondary" fontWeight={"bold"}>
              VALOR EM BANCO
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              color="primary.main"
            >
              R$ 3.140,00
            </Typography>
          </Box>
          <Box sx={style.cardValores}>
            <Typography color="text.secondary" fontWeight={"bold"}>
              VALOR EM DINHEIRO
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              color="primary.main"
            >
              R$ 1.502,00
            </Typography>
          </Box>
          <Box sx={{ ...style.cardValores, borderColor: "primary.error" }}>
            <Typography color="text.error" fontWeight={"bold"}>
              EMERGÊNCIA
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              color="primary.main"
            >
              R$ 2.100,00
            </Typography>
          </Box>
        </Box>

        {/* Dados Financeiros Gerais */}
        <Box sx={style.boxTitulo}>
          <Typography
            color="text.secondary"
            fontWeight={"bold"}
            fontSize={"1.4rem"}
          >
            Dados Financeiros Gerais
            <IconButton size="small" sx={{ marginLeft: "8px" }}>
              <Visibility sx={{ color: "primary.main" }} />
            </IconButton>
          </Typography>
        </Box>
        <Box sx={style.boxCards}>
          {/* Card Fluxo Geral */}
          <Accordion defaultExpanded sx={style.accordionFluxoGeral}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: "primary.main", fontSize: "1.8rem" }}
                />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                color="text.secondary"
                fontWeight="bold"
                component="span"
              >
                Fluxo Geral
              </Typography>
              <SyncAltIcon sx={{ color: "primary.main", marginLeft: "8px" }} />
            </AccordionSummary>
            <AccordionDetails sx={style.accordionDetails}>
              <Typography color="text.secondary" fontWeight={"bold"}>
                Caixa Total de Entrada
              </Typography>
              <Typography fontWeight={"bold"}>R$ 83.200,00</Typography>
              <Typography
                color="text.secondary"
                fontWeight={"bold"}
                marginTop={"10px"}
              >
                Caixa Total de Saída
              </Typography>
              <Typography color="text.error" fontWeight={"bold"}>
                R$ 81.535,00
              </Typography>
              <Typography
                color="text.secondary"
                fontWeight={"bold"}
                marginTop={"10px"}
              >
                Gastos Fixos
              </Typography>
              <Typography color="text.error" fontWeight={"bold"}>
                R$ 5.687,99
              </Typography>
              <Typography
                color="text.secondary"
                fontWeight={"bold"}
                marginTop={"10px"}
              >
                Dívidas Total Pendentes
              </Typography>
              <Typography color="text.error" fontWeight={"bold"}>
                R$ 74.565,49
              </Typography>
              <Typography
                color="text.secondary"
                fontWeight={"bold"}
                marginTop={"10px"}
              >
                Gasto Médio Mensal
              </Typography>
              <Typography color="text.warning" fontWeight={"bold"}>
                R$ 16.120,00
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Card Fluxo Mensal */}
          <Box sx={style.boxFluxoMensal}>
            <Accordion defaultExpanded sx={style.accordionFluxoMensal}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "primary.main", fontSize: "1.8rem" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  color="text.secondary"
                  fontWeight="bold"
                  component="span"
                >
                  Fevereiro/2026
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={style.accordionDetails}>
                <Typography color="text.secondary" fontWeight={"bold"}>
                  Entrada do Mês
                </Typography>
                <Typography fontWeight={"bold"}>R$ 2.540,00</Typography>
                <Typography
                  color="text.secondary"
                  fontWeight={"bold"}
                  marginTop={"10px"}
                >
                  Saída do Mês
                </Typography>
                <Typography color="text.error" fontWeight={"bold"}>
                  R$ 1.100,00
                </Typography>
                <Typography
                  color="text.secondary"
                  fontWeight={"bold"}
                  marginTop={"10px"}
                >
                  Renda Mensal Total
                </Typography>
                <Typography fontWeight={"bold"}>R$ 1.440,00</Typography>
                <Button
                  variant="contained"
                  sx={style.buttonCard}
                  onClick={() => {
                    navigate("/home/caixa-mensal");
                  }}
                >
                  Abrir Caixa
                </Button>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={style.accordionFluxoMensal}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "primary.main", fontSize: "1.8rem" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  color="text.secondary"
                  fontWeight="bold"
                  component="span"
                >
                  Janeiro/2026
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={style.accordionDetails}>
                <Typography color="text.secondary" fontWeight={"bold"}>
                  Entrada do Mês
                </Typography>
                <Typography fontWeight={"bold"}>R$ 10.500,00</Typography>
                <Typography
                  color="text.secondary"
                  fontWeight={"bold"}
                  marginTop={"10px"}
                >
                  Saída do Mês
                </Typography>
                <Typography color="text.error" fontWeight={"bold"}>
                  R$ 9.200,00
                </Typography>
                <Typography
                  color="text.secondary"
                  fontWeight={"bold"}
                  marginTop={"10px"}
                >
                  Renda Mensal Total
                </Typography>
                <Typography fontWeight={"bold"}>R$ 1.440,00</Typography>
                <Button variant="contained" sx={style.buttonCard}>
                  Abrir Caixa
                </Button>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={style.accordionFluxoMensal}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "primary.main", fontSize: "1.8rem" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  color="text.secondary"
                  fontWeight="bold"
                  component="span"
                >
                  Dezembro/2025
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={style.accordionDetails}>
                <Typography color="text.secondary" fontWeight={"bold"}>
                  Entrada do Mês
                </Typography>
                <Typography fontWeight={"bold"}>R$ 16.200,00</Typography>
                <Typography
                  color="text.secondary"
                  fontWeight={"bold"}
                  marginTop={"10px"}
                >
                  Saída do Mês
                </Typography>
                <Typography color="text.error" fontWeight={"bold"}>
                  R$ 14.285,00
                </Typography>
                <Typography
                  color="text.secondary"
                  fontWeight={"bold"}
                  marginTop={"10px"}
                >
                  Renda Mensal Total
                </Typography>
                <Typography fontWeight={"bold"}>R$ 1.440,00</Typography>
                <Button variant="contained" sx={style.buttonCard}>
                  Abrir Caixa
                </Button>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
