import Link from "next/link";
import Image from "next/image";
import {useOnScreen} from "../../../hooks/"
import { Bullet,Title } from "../../../templates";
import {Project,ProjectImg,ProjectTitle,Section,TechItem,TechList,Text,Wrapper} from "./style";

 
const Projects = ({data})=>{
    const [isVisible,ref] = useOnScreen({rootMargin:'0px 0px 0px 0px',threshold:0.1}) 
 return(
     <Section id="projects" ref={ref} tabIndex="0" >
         <Title isVisible={isVisible}>
             Experemental Projects<Bullet style={{'--size':'4.5rem'}}>.</Bullet>
         </Title>
         <Wrapper isVisible={isVisible}>
             {data.map(({title,text,image,github,link,techs},idx)=>(
                 <Project key={idx}  tabIndex="0">
                     <Link href={link}>
                 <a>
                 <ProjectTitle>{title}</ProjectTitle>
                 <ProjectImg>
                     <Image src={image} layout="responsive" height={150} width={200}  alt={`${title} image`}/>
                 </ProjectImg>
                 <Text>{text}</Text>
                 </a>
                 </Link>

                   
             </Project>
             ))}

           
         </Wrapper>
     </Section>
 )
}

export default Projects;