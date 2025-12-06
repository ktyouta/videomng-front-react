import Twitter from "react-color/lib/components/twitter/Twitter";

type propsType = {
  color: string,
  changeColor: (color: string) => void,
  triangle?: "hide" | "top-left" | "top-right",
  width?: string,
}

export function ColorPickerTwitter(props: propsType) {

  return (
    <Twitter
      color={props.color}
      onChange={(colorResult) => {
        props.changeColor(colorResult.hex)
      }}
      triangle={props.triangle}
      width={props.width}
    />
  );
}