import { useData } from './dataContext';

function Truc() {
  const { data } = useData();
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={'https://i.gifer.com/2GU.gif'} />
        <h1>{data.fact}</h1>
      </div>
    </div>
  );
}

export default Truc;
