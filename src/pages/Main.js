import React from "react";

import Grid from "../elements/Grid";
import Card from "../elements/Card";

import MinimumDistanceSlider from "../components/MinimumDistanceSlider"
import Category from "../components/Category";

const Main = (props) => {

    return(
        <Grid is_flex >
            <Grid width="300px">
                <Category/>
            </Grid>
            <Grid is_flex margin="50px 0 0 200px" height="200px" flexDirection="column" width="100%">
                    <Grid>
                        <MinimumDistanceSlider/>
                    </Grid>
                    <Grid is_flex flexDirection="row" justifyContent="space-around" width="850px">
                        <Grid box width="200px">
                            <ul>최저요금</ul> 
                            <ul>￦원</ul>
                        </Grid>
                        <Grid box width="200px">
                            <ul>최고요금</ul> 
                            <ul>￦원</ul>
                        </Grid>
                    </Grid> 
                <Grid display="flex" margin="50px 0 0 0" width="850px" flexDirection="row" justifyContent="space-between">
                    <Card/>
                    <Card/>
                </Grid>
            </Grid>
            

            
                
           
         
        </Grid>
    )
};

export default Main;