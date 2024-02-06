import {Routes  , Route} from 'react-router-dom';
import { PhoneList, Cart } from '../pages';

export const AllRoutes = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<PhoneList title="Home"  />} />
        <Route path="/cart" element={<Cart title="Cart" />} />
     </Routes>
    </>
  )
}
