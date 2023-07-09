import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export default function Highlighted() {

  useEffect(() => { 
    setInterval(() => { }, 1000);
  }, []);
  return (
    <Text fontWeight={500}>
       من الآخـر: 
      </Text>
  );
}