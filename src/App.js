import Results from "./components/Results";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Navbar from "./components/Navbar";
import { Container, Grid } from "@mui/material";
import { useState } from "react";


function App() {

  const [data, setData] = useState({
    homeValue: 3000, 
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 0.05
  })


  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item md={6} xs={12}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Results data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
