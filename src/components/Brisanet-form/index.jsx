import { Input } from "@chakra-ui/input"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { useState } from "react";

function useForm({
  initialValues
}){
  const [values, setValues] = useState(initialValues)

  function handleChange(event){
    const name = event.target.getAttribute('name')
    const value = event.target.value

    setValues({
      ...values,
      [name] : value
    })
    
  }

  
  return {
    values,
    handleChange
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
  
  // Configura os estados iniciais para o controle dos inputs
  const formValues = {}
  fields.forEach( field => {
    formValues[field.name] = ''
  });
  

  const form = useForm({
    initialValues: {...formValues} 
  })


  const newField = (field, index) => (
    <Box m="1rem" key={index}>
      {
        field.type ==='input' &&
        <Input
          placeholder={field.placeholder || ''}
          name={field.name || ''}
          // value={form.values[index][field.id]}
          value={form.values[field.name]}
          onChange={form.handleChange}
        />
      }
    </Box>
  )  
  
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

        {/* cria os campos do formulário */}
        {fields.map( (field, index) => newField(field, index)) }  

      </form>
    </Flex>
  )
}

export default BrisanetForm
