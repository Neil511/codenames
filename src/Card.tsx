import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Game.css';

type Props = {
  word: string,
};

function Card({word}: Props) {
  function handleButtonClick(word: string) {
    console.log("Clicked ", word)
  }

  return (
    <Grid item xs={2}>
      <Button variant="outlined" fullWidth size="large" onClick={() => {handleButtonClick(word)}}>{word}</Button>
    </Grid>
  )
}

export default Card;