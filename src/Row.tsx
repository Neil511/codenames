import Card from './Card';

type Props = {
  items: string[],
};

function Row({items}: Props) {
  return (
    <>
      {items.map((word) => 
        <Card word={word}/>
      )}
    </>
  );
}

export default Row;