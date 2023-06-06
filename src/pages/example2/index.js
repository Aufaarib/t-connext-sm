import { useDispatch } from 'react-redux'
import { fetchData } from '../../redux/reducer'
import { useSelector } from 'react-redux'

const Example2 = props => {
  const { title, subtitle, color, icon, stats, trend, trendNumber } = props
  const data = useSelector(state => state.reducer)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(fetchData())
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <p>Response: </p>
      <div style={{ textAlign: 'center', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {data.map(item => (
          <div
            style={{
              minWidth: '250px',
              border: '2px solid grey',
              borderRadius: '10px',
              padding: '10px'
            }}
            key={item.id}
          >
            <img src='/images/misc/tconnext.png' alt='' />
            <br></br>
            <a>{item.group}</a>
            <br></br>
            <a style={{ color: 'red' }}>{item.item}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Example2
