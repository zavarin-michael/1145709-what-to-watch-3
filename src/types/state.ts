import {store} from '../store/store.ts';
import {AuthorizationStatus} from '../const.ts';
import {AuthData} from './user.ts';
import {SerializedError} from '@reduxjs/toolkit';
import {FilmShallow} from './film-shallow.ts';
import {Film} from './film.ts';
import {FilmComment} from './film-comment.ts';
import {FilmPromo} from './film-promo.ts';

export interface FilmState {
  film: Film | null;
  similarFilms: FilmShallow[];
  filmComments: FilmComment[];
  isFilmLoading: boolean;
  error: SerializedError | null;
}
export interface MainState {
  promoFilm: FilmPromo | null;
  films: FilmShallow[];
  genre: string;
  isFilmListLoading: boolean;
  error: SerializedError | null;
}
export interface UserState {
  authorizationStatus: AuthorizationStatus;
  authData: AuthData | null;
  isAuthenticated: boolean;
  error: SerializedError | null;
  isAuthLoading: boolean;
  favoriteFilms: FilmShallow[];
  favoriteFilmsCount: number | null;
}

export type StoreSchema = ReturnType<typeof store.getState>;
