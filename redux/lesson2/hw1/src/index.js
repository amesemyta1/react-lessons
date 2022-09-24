import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 1, name: 'Sarah' }));
store.dispatch(addUser({ id: 2, name: 'Alex' }));
store.dispatch(addUser({ id: 3, name: 'Tom' }));

store.dispatch(deleteUser(2));
