import store from './store';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 1, name: 'Alex' }));
store.dispatch(addUser({ id: 2, name: 'James' }));
store.dispatch(addUser({ id: 3, name: 'Morgen' }));

store.dispatch(updateUser(3, { id: 3, name: 'Morgen', age: 22 }));

store.dispatch(deleteUser(2));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(increment());
