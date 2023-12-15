import logo from './logo.svg';
import './App.css';

import photo from './blueshell.png';
import { FaThumbsUp } from "react-icons/fa6";

import {
  useState,
  useEffect
} from "react"; 
import { Center, VStack, Image, HStack, Input, IconButton } from '@chakra-ui/react'

function App() {

  const [coupon, setCoupon] = useState("");
  const [couponWorks, setCouponWorks] = useState(false);

  const goodCoupon = "CONQUERYOURNEWYEARSRESOLUTIONNOMATTERWHAT";

  
  useEffect(() => {
    document.title="CONQUER!!!";
  }, []);

  return (
    <div className="App">
      <Center>
        <VStack w={1000}>
          {couponWorks && <Image padding={10} src={photo}/>}
          <HStack>
            <Input
              w={500}
              placeholder="Coupon Code Here"
              padding="5px"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
              />
            <IconButton
              onClick={buttonClick}
              colorScheme="green"
              icon={<FaThumbsUp />}
              />
          </HStack>
        </VStack>
      </Center>
    </div>
  );

  function buttonClick() {
    if (coupon.toUpperCase() === goodCoupon) setCouponWorks(true);
    
  }

}

export default App;
