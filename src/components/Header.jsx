import { AppBar, Button, Container, Toolbar } from "@mui/material";
import pokedexLogo from "../assets/pokedex-logo.png";
import './Header.css';

export default function Header() {
    return (
        <Container>
            <div className="pokedex-navbar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="image-container">
                            <img src={pokedexLogo} alt="Logo" height={100} />
                        </div>
                    </Toolbar>
                    <Toolbar gutterBottom>
                        <Button color="inherit" href="/">Inicio</Button>
                        <Button color="inherit" href="/add-pokemon">Agregar Pokemon</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </Container>
    );
}