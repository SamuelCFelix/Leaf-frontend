import {
  AccessTime,
  AccountBalance,
  Circle,
  CurrencyExchange,
  Delete,
  InfoOutline,
  MoreVert,
  Paid,
  Payment,
  Payments,
  Pix,
  Receipt,
  Settings,
  ShoppingCart,
  Store,
  Visibility,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  container: {
    width: "100%",
    height: "100%",
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
    padding: "20px 20px 6px 20px",
  },
  boxCards: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
    padding: "0px 20px 5px 20px",
  },
  cardValores: {
    minWidth: "150px",
    minHeight: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "10px",
    backgroundColor: "#ffffff",
    border: "1px solid #00e08e",
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      scale: "1.02",
      transition: "scale 0.1s ease-in-out",
    },
  },

  boxCaixasDiario: {
    width: "80vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0px 20px 20px 20px",
    gap: "20px",
  },

  accordionCaixaDiario: {
    width: "100%",
    flexShrink: 0,
    backgroundColor: "#ffffff",
    border: "1px solid #00e08e",
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

  accordionCaixaDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  boxTitulosCaixaDetails: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: "10px",
    marginBottom: "10px",
    gap: "40px",
    borderBottom: "1px solid #e0e0e0",
  },

  boxInfoCaixaDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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

  boxBotaoFazerRegistro: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "6px",
    flex: 1,
  },
  boxListCardRegistro: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "4px",
    padding: "8px 0px",
  },

  cardRegistro: {
    width: "calc(100% - 16px)",
    height: "46px",
    borderTopLeftRadius: "6px",
    borderBottomLeftRadius: "6px",
    borderLeft: "6px solid #009e66",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10px",
  },
  boxValorCardRegistro: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: "4px",
  },
  boxTituloIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },
  iconTituloIcon: {
    color: "text.quaternary",
    fontSize: "18px",
  },
  boxTopoConteudoDialog: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0px",
  },
  estiloSelect: {
    color: "text.secondary",
    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "flex-start",
    },
  },
  boxInputsRegistro: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: "30px",
    margin: "14px 0px",
  },
};

const CaixaMensal = () => {
  /* Variáveis de Estado */
  const [openDialog, setOpenDialog] = useState(false);
  const [valueTipoRegistro, setValueTipoRegistro] = useState("entrada");
  const [valueTipoEntrada, setValueTipoEntrada] = useState("venda");
  const [valueFormaPagamento, setValueFormaPagamento] = useState("credito");
  const [valueTimePicker, setValueTimePicker] = useState(dayjs());
  const [valueTransferencia, setValueTransferencia] = useState("0,00");
  const [valueParcelas, setValueParcelas] = useState("1x");
  const [valueBandeiraCartao, setValueBandeiraCartao] = useState("mastercard");
  const [valueObservacaoRegistro, setValueObservacaoRegistro] = useState("");

  const navigate = useNavigate();

  const parcelasArray = Array.from({ length: 12 }, (_, i) => i + 1);

  /* Funções */
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChangeValueTipoRegistro = (event) => {
    setValueTipoRegistro(event.target.value);
  };

  const handleChangeValueTipoEntrada = (event) => {
    setValueTipoEntrada(event.target.value);
  };

  const handleChangeValueFormaPagamento = (event) => {
    setValueFormaPagamento(event.target.value);
  };

  const handleChangeValueTransferencia = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    const numberValue = Number(value) / 100;
    const formattedValue = numberValue.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setValueTransferencia(formattedValue);
  };

  const handleChangeValueParcelas = (event) => {
    setValueParcelas(event.target.value);
  };

  const handleChangeValueBandeiraCartao = (event) => {
    setValueBandeiraCartao(event.target.value);
  };

  const handleChangeValueObservacaoRegistro = (event) => {
    setValueObservacaoRegistro(event.target.value);
  };

  return (
    <Box sx={style.container}>
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
            Renda - Fevereiro/2026
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
            <Typography color="text.secondary" fontWeight={"bold"}>
              SAÍDAS DO MÊS
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              color="primary.error"
            >
              -R$ 1.100,00
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
            <Box sx={style.boxTituloIcon}>
              <Typography color="text.secondary" fontWeight={"bold"}>
                Cartão de Crédito
              </Typography>
              <Payment sx={style.iconTituloIcon} />
            </Box>
            <Typography fontWeight={"bold"} color="primary.main">
              R$ 1.440,00
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={"bold"}
              marginTop={"10px"}
            >
              Entradas
            </Typography>
            <Typography fontWeight={"bold"} color="text.primary">
              32
            </Typography>
          </Box>
          <Box sx={style.cardValores}>
            <Box sx={style.boxTituloIcon}>
              <Typography color="text.secondary" fontWeight={"bold"}>
                Cartão de Débito
              </Typography>
              <Payment sx={style.iconTituloIcon} />
            </Box>
            <Typography fontWeight={"bold"} color="primary.main">
              R$ 2.540,00
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={"bold"}
              marginTop={"10px"}
            >
              Entradas
            </Typography>
            <Typography fontWeight={"bold"} color="text.primary">
              17
            </Typography>
          </Box>
          <Box sx={style.cardValores}>
            <Box sx={style.boxTituloIcon}>
              <Typography color="text.secondary" fontWeight={"bold"}>
                PIX
              </Typography>
              <Pix sx={style.iconTituloIcon} />
            </Box>

            <Typography fontWeight={"bold"} color="primary.main">
              R$ 2.680,00
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={"bold"}
              marginTop={"10px"}
            >
              Entradas
            </Typography>
            <Typography fontWeight={"bold"} color="text.primary">
              18
            </Typography>
          </Box>
          <Box sx={style.cardValores}>
            <Box sx={style.boxTituloIcon}>
              <Typography color="text.secondary" fontWeight={"bold"}>
                Dinheiro
              </Typography>
              <Payments sx={style.iconTituloIcon} />
            </Box>
            <Typography fontWeight={"bold"} color="primary.main">
              R$ 1.440,00
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={"bold"}
              marginTop={"10px"}
            >
              Entradas
            </Typography>
            <Typography fontWeight={"bold"} color="text.primary">
              8
            </Typography>
          </Box>
          <Box sx={{ ...style.cardValores, borderColor: "primary.error" }}>
            <Box sx={style.boxTituloIcon}>
              <Typography color="text.secondary" fontWeight={"bold"}>
                Saída C. Bancária
              </Typography>
              <AccountBalance
                sx={{ ...style.iconTituloIcon, color: "text.error" }}
              />
            </Box>
            <Typography fontWeight={"bold"} color="primary.error">
              -R$ 1.100,00
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={"bold"}
              marginTop={"10px"}
            >
              Saídas
            </Typography>
            <Typography fontWeight={"bold"} color="text.error">
              15
            </Typography>
          </Box>
          <Box sx={{ ...style.cardValores, borderColor: "primary.error" }}>
            <Box sx={style.boxTituloIcon}>
              <Typography color="text.secondary" fontWeight={"bold"}>
                Saída em Dinheiro
              </Typography>
              <Payments sx={{ ...style.iconTituloIcon, color: "text.error" }} />
            </Box>
            <Typography fontWeight={"bold"} color="primary.error">
              -R$ 360,00
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={"bold"}
              marginTop={"10px"}
            >
              Saídas
            </Typography>
            <Typography fontWeight={"bold"} color="text.error">
              3
            </Typography>
          </Box>
        </Box>

        {/* Tabelas do Caixa Mensal */}
        <Box sx={style.boxTitulo}>
          <Typography
            color="text.secondary"
            fontWeight={"bold"}
            fontSize={"1.4rem"}
          >
            Caixa Mensal
            <IconButton size="small" sx={{ marginLeft: "8px" }}>
              <Visibility sx={{ color: "primary.main" }} />
            </IconButton>
          </Typography>
        </Box>

        {/* Caixas */}
        <Box sx={style.boxCaixasDiario}>
          <Accordion sx={style.accordionCaixaDiario}>
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
                01/02/2026 - DOMINGO
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={style.accordionCaixaDetails}>
              <Box sx={style.boxTitulosCaixaDetails}>
                <Box sx={style.boxInfoCaixaDetails}>
                  <Typography color="text.secondary" fontWeight={"bold"}>
                    Faturamento
                  </Typography>
                  <Typography fontWeight={"bold"}>R$ 16.200,00</Typography>
                </Box>
                <Box sx={style.boxInfoCaixaDetails}>
                  <Typography color="text.secondary" fontWeight={"bold"}>
                    Entrada do Dia
                  </Typography>
                  <Typography color="text.primary" fontWeight={"bold"}>
                    R$ 14.285,00
                  </Typography>
                </Box>
                <Box sx={style.boxInfoCaixaDetails}>
                  <Typography color="text.secondary" fontWeight={"bold"}>
                    Saída do Dia
                  </Typography>
                  <Typography color="text.error" fontWeight={"bold"}>
                    -R$ 1.440,00
                  </Typography>
                </Box>
                <Box sx={style.boxBotaoFazerRegistro}>
                  <Button
                    variant="outlined"
                    sx={style.buttonCard}
                    onClick={handleOpenDialog}
                  >
                    FAZER REGISTRO
                  </Button>
                </Box>
              </Box>

              <Box sx={style.boxListCardRegistro}>
                <Box sx={style.cardRegistro}>
                  <Box sx={style.boxValorCardRegistro}>
                    <ShoppingCart />
                    <Typography>R$ 250,00</Typography>
                  </Box>
                  <Box sx={style.boxValorCardRegistro}>
                    <Payment sx={{ color: "text.quaternary" }} />
                    <Typography color="text.quaternary">3x Crédito</Typography>
                  </Box>
                  <Box sx={style.boxValorCardRegistro}>
                    <CurrencyExchange sx={{ color: "text.warning" }} />
                    <Typography color="text.warning">-R$ 20,00</Typography>
                  </Box>
                  <Box sx={style.boxValorCardRegistro}>
                    <Receipt />
                    <Typography>R$ 230,00</Typography>
                  </Box>
                  <Box sx={style.boxValorCardRegistro}>
                    <AccessTime sx={{ color: "text.quaternary" }} />
                    <Typography color="text.quaternary"> 14:46</Typography>
                  </Box>

                  <Box
                    sx={{
                      ...style.boxValorCardRegistro,
                      flex: 0,
                      marginRight: "2px",
                      gap: "8px",
                    }}
                  >
                    <IconButton>
                      <InfoOutline />
                    </IconButton>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </Box>
                </Box>

                <Box
                  sx={{ ...style.cardRegistro, borderLeftColor: "text.error" }}
                >
                  <Box sx={style.boxValorCardRegistro}>
                    <Paid sx={{ color: "text.error" }} />
                    <Typography color="text.error">-R$ 9,00</Typography>
                  </Box>
                  <Box sx={style.boxValorCardRegistro}>
                    <Pix sx={{ color: "text.quaternary" }} />
                    <Typography color="text.quaternary">PIX</Typography>
                  </Box>
                  <Box sx={style.boxValorCardRegistro}>
                    <ShoppingCart sx={{ color: "text.error" }} />
                    <Typography color="text.error">Compra</Typography>
                  </Box>
                  <Box sx={style.boxValorCardRegistro}>
                    <Store sx={{ color: "text.error" }} />
                    <Typography color="text.error">Alimento</Typography>
                  </Box>
                  <Box sx={style.boxValorCardRegistro}>
                    <AccessTime sx={{ color: "text.quaternary" }} />
                    <Typography color="text.quaternary"> 14:46</Typography>
                  </Box>
                  <Box
                    sx={{
                      ...style.boxValorCardRegistro,
                      flex: 0,
                      marginRight: "2px",
                      gap: "8px",
                    }}
                  >
                    <IconButton>
                      <InfoOutline />
                    </IconButton>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={style.accordionCaixaDiario}>
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
                02/02/2026 - SEGUNDA-FEIRA
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={style.accordionCaixaDetails}>
              <Box sx={style.boxTitulosCaixaDetails}>
                <Box sx={style.boxInfoCaixaDetails}>
                  <Typography color="text.secondary" fontWeight={"bold"}>
                    Faturamento
                  </Typography>
                  <Typography fontWeight={"bold"}>R$ 16.200,00</Typography>
                </Box>
                <Box sx={style.boxInfoCaixaDetails}>
                  <Typography color="text.secondary" fontWeight={"bold"}>
                    Entrada do Dia
                  </Typography>
                  <Typography color="text.primary" fontWeight={"bold"}>
                    R$ 14.285,00
                  </Typography>
                </Box>
                <Box sx={style.boxInfoCaixaDetails}>
                  <Typography color="text.secondary" fontWeight={"bold"}>
                    Saída do Dia
                  </Typography>
                  <Typography color="text.error" fontWeight={"bold"}>
                    -R$ 1.440,00
                  </Typography>
                </Box>
              </Box>

              <Button variant="outlined" sx={style.buttonCard}>
                FAZER REGISTRO
              </Button>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      {/* Diálog/Modal */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle id="alert-dialog-title" fontSize={"1.4rem"}>
          {"Fazer Registro de Caixa"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Faça o registro do caixa quanto a Entradas e Saídas monetárias
          </DialogContentText>
          <Box sx={style.boxTopoConteudoDialog}>
            <FormControl>
              <RadioGroup
                row
                value={valueTipoRegistro}
                onChange={handleChangeValueTipoRegistro}
                sx={{ gap: "100px" }}
              >
                <FormControlLabel
                  value="entrada"
                  control={<Radio />}
                  label={
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <ShoppingCart fontSize="small" />
                      <Typography>Entrada</Typography>
                    </Box>
                  }
                />
                <FormControlLabel
                  value="saida"
                  control={<Radio color="error" />}
                  label={
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <Paid sx={{ color: "text.error" }} fontSize="small" />
                      <Typography color="text.error">Saída</Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>
          {valueTipoRegistro === "entrada" ? (
            <>
              <Box sx={style.boxInputsRegistro}>
                <FormControl variant="standard" sx={{ minWidth: 140 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Tipo de Entrada
                  </InputLabel>
                  <Select
                    id="demo-simple-select-standard"
                    value={valueTipoEntrada}
                    onChange={handleChangeValueTipoEntrada}
                    label="Tipo de Entrada"
                    sx={style.estiloSelect}
                  >
                    <MenuItem sx={{ color: "text.secondary" }} value={"venda"}>
                      Venda
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "text.secondary" }}
                      value={"transferencia"}
                    >
                      Transferência
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 140 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Forma de Pagamento
                  </InputLabel>
                  <Select
                    id="demo-simple-select-standard"
                    value={valueFormaPagamento}
                    onChange={handleChangeValueFormaPagamento}
                    label="Forma de Pagamento"
                    sx={style.estiloSelect}
                  >
                    <MenuItem
                      sx={{ color: "text.secondary" }}
                      value={"credito"}
                    >
                      Crédito
                    </MenuItem>
                    <MenuItem sx={{ color: "text.secondary" }} value={"debito"}>
                      Débito
                    </MenuItem>
                    <MenuItem sx={{ color: "text.secondary" }} value={"pix"}>
                      PIX
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "text.secondary" }}
                      value={"dinheiro"}
                    >
                      Dinheiro
                    </MenuItem>
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={valueTimePicker}
                    onChange={(newValue) => setValueTimePicker(newValue)}
                    ampm={false}
                    format="HH:mm"
                    label="Horário da Transferência"
                    slotProps={{
                      textField: {
                        variant: "standard",
                        size: "small",
                        placeholder: "Horário",
                        InputProps: {
                          sx: {
                            color: "text.secondary",
                            "&::placeholder": {
                              color: "text.secondary",
                            },
                          },
                        },
                        sx: {
                          width: 140,
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={style.boxInputsRegistro}>
                <TextField
                  label="Valor"
                  variant="standard"
                  size="small"
                  value={valueTransferencia}
                  onChange={handleChangeValueTransferencia}
                  sx={{
                    width: 140,
                    "& .MuiInputBase-input": {
                      color: "text.secondary",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ marginBottom: "4px" }}
                      >
                        R$
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl variant="standard" sx={{ minWidth: 140 }}>
                  <InputLabel id="parcelamento-label">Parcelamento</InputLabel>
                  <Select
                    labelId="parcelamento-label"
                    id="parcelamento"
                    value={valueParcelas}
                    onChange={handleChangeValueParcelas}
                    label="Parcelamento"
                    sx={style.estiloSelect}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: 200,
                        },
                      },
                    }}
                  >
                    {parcelasArray.map((num) => (
                      <MenuItem
                        key={num}
                        value={`${num}x`}
                        sx={{ color: "text.secondary" }}
                      >
                        {num === 1 ? "À vista" : `${num}x Parcelas`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 140 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Bandeira Cartão
                  </InputLabel>
                  <Select
                    id="demo-simple-select-standard"
                    value={valueBandeiraCartao}
                    onChange={handleChangeValueBandeiraCartao}
                    label="Bandeira Cartão"
                    sx={style.estiloSelect}
                  >
                    <MenuItem
                      sx={{ color: "text.secondary" }}
                      value={"mastercard"}
                    >
                      Mastercard
                    </MenuItem>
                    <MenuItem sx={{ color: "text.secondary" }} value={"visa"}>
                      Visa
                    </MenuItem>
                    <MenuItem sx={{ color: "text.secondary" }} value={"elo"}>
                      Elo
                    </MenuItem>
                    <MenuItem sx={{ color: "text.secondary" }} value={"amex"}>
                      Amex
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                label="Observação"
                variant="standard"
                size="small"
                value={valueObservacaoRegistro}
                onChange={handleChangeValueObservacaoRegistro}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    color: "text.secondary",
                  },
                }}
              />
            </>
          ) : (
            <Box>Saída</Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="error">
            Cancelar
          </Button>
          <Button onClick={handleCloseDialog} autoFocus>
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default CaixaMensal;
