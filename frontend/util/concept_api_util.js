export const fetchConcepts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/concepts'
  })
);

export const createConcept = (concept) => (
  $.ajax({
    method: 'POST',
    url: '/api/concepts',
    data: { concept }
  })
);

export const deleteConcept = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/concepts/${id}`
  })
);
