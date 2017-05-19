import * as APIUtil from '../util/language_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_LANGUAGES = 'RECEIVE_LANGUAGES';
export const RECEIVE_LANGUAGE = 'RECEIVE_LANGUAGE';
export const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE';

export const receiveLanguages = (languages) => ({
  type: RECEIVE_LANGUAGES,
  languages
});

export const receiveLanguage = (language) => ({
  type: RECEIVE_LANGUAGE,
  language
});

export const removeLanguage = (id) => ({
  type: REMOVE_LANGUAGE,
  id
});

export const fetchLanguages = () => dispatch => (
  APIUtil.fetchLanguages().then(
    languages => dispatch(receiveLanguages(languages)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createLanguage = (language) => dispatch => (
  APIUtil.createLanguage(language).then(
    newLanguage => dispatch(receiveLanguage(newLanguage)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteLanguage = (id) => dispatch => (
  APIUtil.deleteLanguage(id).then(
    deletedLanguage => dispatch(removeLanguage(deletedLanguage.id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
