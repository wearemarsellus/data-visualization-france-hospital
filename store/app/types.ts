import { SchemaObject } from 'normalizr'
import { AppContents } from 'contents/types'
import { HospitalsState } from 'store/entities/hospitals/types'
import { AppConfig } from 'config/app'
import { BasicAction } from '../types'

export const SET_CONFIG = 'app/SET_CONFIG'
export const ADD_ENTITIES = 'app/ADD_ENTITIES'
export const CLEAR_ENTITIES = 'app/CLEAR_ENTITIES'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppEntities {
  hospitals?: HospitalsState;
}

export interface AppState {
  entities: AppEntities;
  config: AppConfig;
  contents: AppContents;
}

export interface SetConfigAction {
  type: typeof SET_CONFIG;
  payload: AppConfig;
}

export interface AddEntitiesAction extends BasicAction {
  type: typeof ADD_ENTITIES;
  payload: {
    entities: AppEntities;
  };
  meta?: {
    schema: SchemaObject<unknown>;
    endAction: BasicAction;
  };
}

export interface ClearEntitiesAction {
  type: typeof CLEAR_ENTITIES;
  payload: {
    entitiesNames: keyof AppEntities;
  };
}
