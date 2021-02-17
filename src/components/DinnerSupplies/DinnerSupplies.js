import SilverWare from '../SilverWare/SilverWare';

function dinnerSupplies(count) {
  return(
    <div>
    <h2>Dinner Supplies</h2>
        <SilverWare name="Spoons" count={count} />
        <SilverWare name="Fork" count={count} />
        <SilverWare name="Knives" count={count} />
    </div>
  );
}

export default dinnerSupplies;