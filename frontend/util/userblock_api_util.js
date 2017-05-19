export const fetchUserblocks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/userblocks'
  })
);

export const createUserblock = (userblock) => (
  $.ajax({
    method: 'POST',
    url: '/api/userblocks',
    data: { userblock }
  })
);
