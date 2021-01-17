import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Game.css';
import Row from './Row';

function createRows(items: string[], size: number) {
  let rows = [];

  for(let i = 0; i < items.length/size; i++) {
    rows.push(items.slice(i, i + size))
  }
  return rows;
}

function Game(){
  const cards = [
    'association',
    'recommendation',
    'apple',
    'news',
    'context',
    'understanding',
    'thanks',
    'fortune',
    'wife',
    'tea',
    'refrigerator',
    'chemistry',
    'cabinet',
    'newspaper',
    'competition',
    'signature',
    'son',
    'policy',
    'orange',
    'vehicle',
    'customer',
    'presence',
    'clothes',
    'director',
    'television'
  ];
  const rows = createRows(cards, 5);
  return(
    <Grid container spacing={1}>
      {rows.map((row) =>
      <Grid container item xs={12} spacing={3} justify="center">
        <Row items={row}/>
      </Grid>
      )}
      
    </Grid>
  );
}

export default Game;
