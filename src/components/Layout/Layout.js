import { Container } from "./Layout.styles";


export const Layout = ({ children }) => {
    return (
        <Container>
            <header>header</header>
            <main>{children}</main>
            <footer>footer</footer>           
        </Container>);
};