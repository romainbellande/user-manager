import { IEntity } from '../../../common/interfaces';
export interface IEntityState<T> {
  entities: T[];
  ids: number[];
  selectedId: number;
}

export const initialState = {
  entities: null,
  ids: null,
  selectedId: null,
};
