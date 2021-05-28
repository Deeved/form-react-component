import { Flex } from "@chakra-ui/react"

import Login from './pages/Login'
function App() {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center" bgGradient="linear(to-tr, #4f3f66, #3b2e5f, #1f1f59,#001253, #00004e)" >
      <Login/>
    </Flex>
  );
}

export default App;
