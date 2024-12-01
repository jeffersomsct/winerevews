import { Button, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';

const Hero = () => {

    const StyledHero = styled("div")(({ theme })=>({
        backgroundColor: theme.palette.primary.light,
        height: "100vh",
    }))
  return (
    <>
   <Container>
   <StyledHero>
    <br></br>  <br></br>  <br></br>
    <Grid container spacing={2}>
  <Grid item xs={12} md={12}>
    <Typography color= "primary" variant="h3" textAlign="center" pb={2}>Análises Confiáveis de Produtos</Typography>
    <Typography color="secondary" variant="h4" textAlign="center" pb={2}>Pesquisamos e testamos profundamente para recomendar os melhores produtos para suas necessidades.</Typography>
    <Button variant="contained">Contained</Button>
  </Grid>
</Grid>

    
    
    
    
    </StyledHero>
    </Container>
    </>
  )
}

export default Hero
