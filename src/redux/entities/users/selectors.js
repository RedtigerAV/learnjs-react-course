import { usersEntityAdapter } from './entity-adapter';

const selectUsersModule = (state) => state.users;

export const { selectById: selectUserById, selectIds: selectUserIds } = usersEntityAdapter.getSelectors(selectUsersModule);