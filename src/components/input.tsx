
import {

  Input,
  Box,
  Text,
 
} from "@chakra-ui/react";

interface CustomInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: ()=> void;
  width?: string | number;
  height?: string | number;
  bgColor?: string;
  labelFontWeight?: string | number;
  labelFontSize?: string | number;
  labelFontStyle?: string | number | any;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontStyle?: string | number | any;
  border?: string;
  borderRadius?: string;
}

type RequireProperty<T, Prop extends keyof T> = T & { [key in Prop]-?: T[key] };
type RequireInputProps =
  | RequireProperty<CustomInputProps, "label">
  | RequireProperty<CustomInputProps, "placeholder">;

const CustomInput = ({
  name,
  label,
  placeholder = " ",
  type = "text",
  value,
  onChange, 
  width = "100%",
  height = "48px",
  bgColor,
  labelFontSize,
  labelFontWeight,
  labelFontStyle,
  border,
  borderRadius,

  ...props
}: RequireInputProps) => {
  return (
    <Box width={width} height={height} {...props}>
      <Text
        fontSize={labelFontSize ? labelFontSize : "20px"}
        fontWeight={labelFontWeight}
        fontStyle={labelFontStyle}
        display={"flex"}
        mr={"5px"}
      >
        {label}
       
      </Text>
      <Box >
        <Input
          border={border ? border : '1px solid #000000'}
          borderRadius={borderRadius ? borderRadius : 'none'}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          color={"textColor.input"}
          bgColor={bgColor ? bgColor : ""}
          height={height ? height : "56px"}
          // borderRadius={20}
          // paddingTop={2}
        />

        {/* {children} */}
      </Box>
    </Box>
  );
};

export default CustomInput