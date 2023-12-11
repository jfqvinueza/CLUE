
import { StackScreenProps } from "@react-navigation/stack";
import { FC } from "react";
import { Text } from "react-native";

interface Props extends StackScreenProps<any> {}

const PaginaTres: FC<Props> = ({route}) => {
  const params = route.params;
  return (
    <>
    <Text>{JSON.stringify(params, null, 3)}</Text>
    </>
  )
}

export default PaginaTres;