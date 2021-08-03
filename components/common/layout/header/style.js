import styled from "styled-components";


const Header = styled.header`
 background-color:var(--primary);
`

const Nav = styled.nav`
 display:flex;
 justify-content:space-between;
 padding:2.5rem 2rem;
`

const NavLink = styled.a`
 color:var(--nav-link);
 font-size:.8rem;
 letter-spacing:2px;
 text-transform:uppercase;
`
const NavList = styled.ul`
display:flex;
justify-content:space-between;
margin:0;
`

const NavItem = styled.li`
 list-style :none;
 margin:0 2rem;
 position:relative;

 &::before,&::after{
     background-color:var(--blue);
     bottom:-100%;
     border-radius:6px;
     content:"";
     height:6px;
     left:50%;
     position:absolute;
     right:50%;
     transform:translate(-50%);
     transition:width .5s ease-in-out;
     width:0%;
 }
 &:hover::before, &:hover::after{
     width:100%;
 }
`



export{
    Header,
    Nav,
    NavLink,
    NavList,
    NavItem,
}