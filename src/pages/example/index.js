import Link from 'next/link'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { addOne, subOne, addSome, subSome, reset } from '../../redux/slice'

const example = () => {
  // const dispatch = useDispatch()
  // const count = useSelector(state => state.counter.count)

  return (
    <div className='App'>
      <Typography variant='h4'>JumpScare Alert!!</Typography>
      <br></br>
      <iframe
        width='100%'
        height='600'
        src='https://www.youtube.com/embed/atC56l_qYxs?start=2274&autoplay=1'
        title='YouTube video player'
        allow='autoplay'
        allowFullScreen
      ></iframe>
      {/* <p>Count is: {count}</p>

      <div>
        <button onClick={() => dispatch(addOne())}>Add 1</button>
        <button onClick={() => dispatch(subOne())}>Decrease 1</button>
        <button onClick={() => dispatch(addSome(10))}>Add 10</button>
        <button onClick={() => dispatch(subSome(10))}>Decrease 10</button>
        <button onClick={() => dispatch(reset())}>Reset count</button>
      </div> */}
    </div>
  )
}

export default example
