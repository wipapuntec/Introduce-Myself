import { IconButton as iconButton, Button as button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { Typography } from "./Typography";
import { Card } from "./Grid";

export const IconButton = iconButton;
export const Button = button;

const RootStyle = styled(Card)(({ theme, color }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(2, 0),
  color: theme.palette.primary.light,
  backgroundColor: color ?? theme.palette.primary.lighter,
  cursor: "pointer",
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(9),
  height: theme.spacing(9),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.dark,
    0
  )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
  "&:active": {},
}));

export const MenuButton = ({ icon, text, color, textColor }: any) => {
  return (
    <RootStyle color={color} textColor={textColor}>
      <IconWrapperStyle>{icon}</IconWrapperStyle>

      <Typography
        variant="subtitle2"
        color={(theme) => textColor ?? theme.palette.primary.light}
      >
        {text}
      </Typography>
    </RootStyle>
  );
};
