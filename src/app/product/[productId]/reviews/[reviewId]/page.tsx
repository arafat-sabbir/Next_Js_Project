import { notFound } from "next/navigation";

const Review = ({ params }: { params: { reviewId: string } }) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Review List Detail {params.reviewId}</h1>
    </div>
  );
};

export default Review;
