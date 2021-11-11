const ratingStar = (rate = 4) => {
  const rating = Math.floor(rate);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) stars.push("bi bi-star-fill");
    else if (i === rating) stars.push("bi bi-star-half");
    else stars.push("bi bi-star");
  }

  return stars;
};

export default ratingStar;
