import ReactMarkdown from 'react-markdown'
import { useColorModeValue, Text , Flex} from '@chakra-ui/react'
import Card from '@/components/card/Card'
import { useEffect, useState } from 'react'
import CursorSVG from './CursorSVG'
import styles from './MessageBox.module.css';
export default function MessageBox(props: { output: string }) {
  const { output } = props
  const textColor = useColorModeValue('navy.700', 'white')
  const [displayResponse, setDisplayResponse] = useState("");
  const [completedTyping, setCompletedTyping] = useState(false);
  
  
  useEffect(() => {
    setCompletedTyping(false);
    
    let i = 0;
    const stringResponse = 'انقسمت الإمبراطورية المقدونية بين ثلاثة من قواده، وفي تلك الفترة بدأت الحضارة الرومانية في التطور السياسي، وتأسست دولة البطالمة في مصر، وتدخلت في حروب مع جارتها في شبه الجزيرة الإيطالية، وانتهت بهزيمة قرطاجة، وظلت روما سيدة العالم القديم بلا منازع، وبعد سقوط سوريا ومصر في أيدي الرومان أصبحت روما السيدة  للعالم القديم.';
    // const interval = setInterval(() => { console.log("1000")}, 1000);

    const intervalId = setInterval(() => {
      setDisplayResponse(stringResponse.slice(0, i));

      i++;
      
      if (i > stringResponse.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, []);

  
  return (
    <Card
      display={output ? 'flex' : 'none'}
      px="22px !important"
      pl="22px !important"
      color={textColor}
      minH="450px"
      fontSize={{ base: 'sm', md: 'md' }}
      lineHeight={{ base: '24px', md: '26px' }}
      fontWeight="300"
      fontFamily="Alexandria"

    >
      
      <Text
        textAlign="right"
        fontFamily={'Alexandria'}
        
      >
        <span className={styles['men-al-akher']}> من الآخـر: </span>
         {displayResponse}
          {!completedTyping && <CursorSVG />}
      
      </Text>
        
    </Card>
  )
}
