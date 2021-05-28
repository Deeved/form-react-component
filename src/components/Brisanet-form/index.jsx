import { Input } from "@chakra-ui/input"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { useState } from "react"

function useForm({
  initialValues
}){
  console.log(initialValues)

  return {
    values: initialValues
  }
} 

function BrisanetForm(props){

  const { configuration, header, fields } = props
  
  const { 
    p = '2rem', 
    borderRadius="1rem", 
    w="100%", 
    direction="column", 
    formBgColor="white" 
  } = configuration

  const { 
    title = '',
    size = '2xl',
    titleBgColor = 'white',
    color='black',
  } = header
  
  const formValues = fields.map(field =>({[field.id]: 'aaa'}))

  const form = useForm({
    initialValues:{...formValues} 
  })


  const newField = (field) => (
    <Box m="1rem">
      {
        field.type ==='input' &&
        <Input
          placeholder={field.placeholder || ''}
          name={field.id || ''}
          value={form.values[0][field.id]}
        />
      }
    </Box>
  )  
  
  console.log(form.values.username)
  return(
    <Flex 
      p={p} 
      borderRadius={borderRadius}
      w={w}
      direction={direction}
      bgColor={formBgColor} 
    >
      <form >
        <Box>
          <Heading textAlign="center" size={size} bgColor={titleBgColor} color={color}>{title}</Heading>
        </Box>

        {/* construi os campos do formulario */}
        {fields.map(field => newField(field)) }  

      </form>
    </Flex>
  )
}

export default BrisanetForm
