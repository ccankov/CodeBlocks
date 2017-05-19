export const createBlock = (block, concepts) => (
  $.ajax({
    method: 'POST',
    url: '/api/blocks',
    data: { block, concepts }
  })
);

export const fetchBlocks = (userId, langIds, conceptIds) => {
  let queryParams = [];
  if (userId) { queryParams.push(`user_id=${userId}`); }
  if (langIds) { queryParams.push(`language_ids=${langIds.join(',')}`); }
  if (conceptIds) { queryParams.push(`concept_ids=${conceptIds.join(',')}`); }
  queryParams = queryParams.join('&');
  if (queryParams.length > 0) { queryParams = `?${queryParams}`; }
  return $.ajax({
    method: 'GET',
    url: `/api/blocks${queryParams}`
  });
};

export const fetchBlock = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/blocks/${id}`
  })
);

export const deleteBlock = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/blocks/${id}`
  })
);
