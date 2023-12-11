
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { TextInput } from 'react-native'

interface Props {
    name: string,
    label: string,
    control: any
}

export const Input:FC <Props> = ({ control, name , label }) => {

    const { field } = useController({
        control,
        defaultValue: "",
        name
    })


 return (
   <>
   <TextInput
    id={name}
    value={field.value}
    onChangeText={field.onChange}
    placeholder={label}
    style={{
        margin: 2,
        padding: 2,
        borderColor: "solid 1px #ced4da",
        borderRadius: 10,
      }}
   />
   </>
 )
}