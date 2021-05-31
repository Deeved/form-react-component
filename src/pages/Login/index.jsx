import { Flex } from "@chakra-ui/react"

import BrisanetForm from '../../components/Brisanet-form'

function Login(){

  return(
    <Flex w="50%" >
      <BrisanetForm
        configuration
        header={
          {title:'Login'}
        }
        fields={
          [
            {type: 'input', name: 'username', placeholder: 'Nome de usuário ou email', defaultValue:''},
            {type: 'input', name: 'password', placeholder: 'senha', isPassword:true},
          ]
        }
      >
      </BrisanetForm>
     
    </Flex>
  )
}

export default Login