import React from "react";
import Grid from "./Grid";
import Image from "./Image";
import Text from "./Text";

const Card = () => {

    return (
        <Grid is_flex width="400px" height="500px" border="1px solid black">
            <Image/>
            <Text></Text>

        </Grid>
    )
};

export default Card;