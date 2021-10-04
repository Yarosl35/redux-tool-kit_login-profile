import React from 'react';
import {Grid} from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
          <h1>Page Home</h1>
        </Grid.Column>
      </Grid>
      )
    </div>
  );
};

export default Home;