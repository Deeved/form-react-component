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
            {type: 'input', id: 'username', placeholder: 'Nome de usuário ou email'},
            
            
          ]
        }
      >
        {/* <Box >
          <Heading textAlign="center">Login</Heading>
        </Box>
        <Spacer />
        
        <Box mt="2rem">
          <Input
            placeholder="Nome de Usuário ou email"
            name="username"
            value={username}
            onChange={()=>handleChange('username')}
          ></Input>
        </Box>
        <Spacer />

        <Box mt="2rem">
          <Input
            placeholder="Senha"
            type="password"
            name="password"
          ></Input>
        </Box>
        <Spacer />

        <Box mt="3rem" textAlign="end" >
          <Button
            bgColor="blue.500"
            color="white"
          >
              Logar
          </Button>
        </Box> */}
      </BrisanetForm>
     
    </Flex>
  )
}

export default Login