import { Box, Text } from "@chakra-ui/react";

interface ButtonProps {
  onClick: () => void;
  disable?: boolean;
  label: string;
  width?: string | number | object;
  height?: string | number | object;
  border?: string | number | object;
  borderWidth?: string | number | object;
  bgColor?: string;
  color?: string;
  borderRadius?: string | number | object;
  padding?: string | number | object;
  paddingLeft?: string | number | object;
  paddingRight?: string | number | object;
  paddingTop?: string | number | object;
  paddingBottom?: string | number | object;
  paddingX?: string | number | object;
  paddingY?: string | number | object;
  fontWeight?: string | number | object;
  fontSize?: string | number | object;
  alignItems?: string | object;
  alignSelf?: string | object;
  flexDirection?: string;
  display?: string;
  justifyContent?: string;
  borderColor?: string | object;
  textAlign?: string;
  rowGap?: string | number | object;
  columnGap?: string | number | object;
  textColor?: string | object;
  paddingLeftText?: string | number;
  _hover?: object;
  variant: "primary" | "outline" | "cancel" | 'white';
}

export default function Button({
  onClick,
  label,
  width = "fit-content",
  height = "auto",
  borderRadius = "5px",
  paddingY = 3,
  paddingX = 7,
  fontWeight = "700",
  fontSize = "20px",
  alignItems = "center",
  justifyContent = "center",
  display = "flex",
  variant,
  disable = false,
  _hover,
}: ButtonProps) {
  const variantStyles =
    variant === "primary"
      ? {
          bgColor: "#D9433D",
          color: "white",
          border: "none",
          _hover: { bgColor: "#b3322d" },
        }
     : variant === 'cancel'
     ?
      {
          bgColor: "transparent",
          color: "#D9433D",
          border: "1px solid #D9433D",
          borderRadius: "3px",
          _hover: { bgColor: "#c44844ff" },
        }
        : variant === 'white'
     ?
      {
          bgColor: "transparent",
          color: "#DBCECE",
          border: "1px solid #fff",
          borderRadius: "3px",
          _hover: { bgColor: "#c448" },
        }
      : 
      {
          bgColor: "transparent",
          color: "black",
          border:"1px solid black" ,
          borderRadius: "8px",
          _hover: { bgColor: "rgba(0, 0, 0, 0.05)" },
        };
    

  return (
    <Box
      as="button"
      onClick={onClick}
      width={width}
      height={height}
      borderRadius={borderRadius}
      paddingY={paddingY}
      paddingX={paddingX}
      fontWeight={fontWeight}
      fontSize={fontSize}
      alignItems={alignItems}
      justifyContent={justifyContent}
      display={display}
      cursor={disable ? "not-allowed" : "pointer"}
      bgColor={variantStyles.bgColor}
      color={variantStyles.color}
      border={variantStyles.border}
      _hover={_hover || variantStyles._hover}
      transition="all 0.2s ease"
    >
      <Text>{label}</Text>
    </Box>
  );
}
