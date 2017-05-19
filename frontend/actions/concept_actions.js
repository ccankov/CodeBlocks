import * as APIUtil from '../util/concept_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CONCEPTS = 'RECEIVE_CONCEPTS';
export const RECEIVE_CONCEPT = 'RECEIVE_CONCEPT';
export const REMOVE_CONCEPT = 'REMOVE_CONCEPT';

export const receiveConcepts = (concepts) => ({
  type: RECEIVE_CONCEPTS,
  concepts
});

export const receiveConcept = (concept) => ({
  type: RECEIVE_CONCEPT,
  concept
});

export const removeConcept = (id) => ({
  type: REMOVE_CONCEPT,
  id
});

export const fetchConcepts = () => dispatch => (
  APIUtil.fetchConcepts().then(
    concepts => dispatch(receiveConcepts(concepts)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createConcept = (concept) => dispatch => (
  APIUtil.createConcept(concept).then(
    newConcept => dispatch(receiveConcept(newConcept)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteConcept = (id) => dispatch => (
  APIUtil.deleteConcept(id).then(
    deletedConcept => dispatch(removeConcept(deletedConcept.id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
