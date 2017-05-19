export const fetchLanguages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/languages'
  })
);

export const createLanguage = (language) => (
  $.ajax({
    method: 'POST',
    url: '/api/languages',
    data: { language }
  })
);

export const deleteLanguage = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/languages/${id}`
  })
);
