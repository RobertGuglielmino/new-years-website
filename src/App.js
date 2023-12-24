import logo from './logo.svg';
import './App.css';

import useSound from 'use-sound';

import pointPhoto from './point-to-code.jpg';
import successPic from './success-pic.jpg';
import successCat from './success-cat.jpg';
import conquer from './conquer.mp3';
import { FaThumbsUp } from "react-icons/fa6";

import {
  useState,
  useEffect
} from "react"; 
import { Center, VStack, Image, HStack, Input, IconButton, Heading } from '@chakra-ui/react'

function App() {

  const [coupon, setCoupon] = useState("");
  const [couponWorks, setCouponWorks] = useState(false);
  const [havePlayed, setHavePlayed] = useState(false);
  const [playSound] = useSound(conquer);

  const goodCoupon = "CONQUERYOURNEWYEARSRESOLUTIONNOW";

  const pic = (Math.random() < 0.1) ? successCat : successPic;
  
  useEffect(() => {
    document.title="CONQUER!!!";
  }, []);

  return (
    <div className="App">
      <Center>
        <VStack w={1000}>
          <Heading>CONQUER YOUR NEW YEARS RESOLUTION BELOW!!</Heading>
          {!couponWorks ? <Image boxSize='700px' padding={10} src={pointPhoto}/> : <Image boxSize='700px' padding={10} src={pic}/>}
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
    if (coupon.toUpperCase() === goodCoupon) {
      setCouponWorks(true);
      if (!havePlayed) {
        setHavePlayed(true);
        playSound();
      }
    }
  }

}

export default App;
