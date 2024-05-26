const Review = ({ params }: { params: { reviewId: string } }) => {
  return (
    <div>
      <h1>Review List Detail {params.reviewId}</h1>
    </div>
  );
};

export default Review;
