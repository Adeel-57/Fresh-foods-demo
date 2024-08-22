import { food_list } from '../assets/assets';
const Apicall = ({ dispatch }) => (next) => (action) => {
  if (action.type === 'updateProducts') {
    next(action)
    const { update } = action.payload;
    dispatch({type:update,payload:food_list})
  } else {
    next(action)
  }
}

export default Apicall