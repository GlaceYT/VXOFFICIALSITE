import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Home/Footer';

// Define the Review interface
interface Review {
  _id: string;
  transactionId: string;
  userId: string;
  username: string;
  userType: 'Free' | 'Premium';
  transactionFlow: string;
  rating: number;
  feedback?: string;
  createdAt: string;
}

const Feedbacks: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://vxbot-58t6.onrender.com/api/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data: Review[] = await response.json();
        setReviews(data);
      } catch (err: any) {
        console.error('Error:', err.message);
        setError('Failed to fetch reviews.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Calculate rating statistics
  const calculateStatistics = (reviews: Review[]) => {
    const totalRatings = reviews.length;
    const sumOfRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;

    const starBreakdown = [5, 4, 3, 2, 1].map((star) => {
      const count = reviews.filter((review) => review.rating === star).length;
      const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;
      return { star, count, percentage };
    });

    return { totalRatings, averageRating, starBreakdown };
  };

  const { totalRatings, averageRating, starBreakdown } = calculateStatistics(reviews);

  // Render star icons
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Feedbacks</h1>

          {/* Ratings Summary */}
          <div className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg">
            <div className="flex items-center">
              {renderStars(Math.round(averageRating))}
              <p className="ms-2 text-sm font-medium text-gray-400">
                {averageRating.toFixed(2)} out of 5
              </p>
            </div>
            <p className="text-sm font-medium text-gray-400">
              Based on {totalRatings} global ratings
            </p>

            {/* Star Breakdown */}
            {starBreakdown.map((item) => (
              <div key={item.star} className="flex items-center mt-4">
                <p className="text-sm font-medium text-blue-500 hover:underline">
                  {item.star} star
                </p>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-400">
                  {item.percentage.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>

          {/* Individual Reviews */}
          {loading ? (
            <p className="text-center text-lg">Loading reviews...</p>
          ) : error ? (
            <p className="text-center text-red-500 text-lg">{error}</p>
          ) : reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review._id.toString()}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {review.username}{' '}
                    <span
                      className={`${
                        review.userType === 'Premium'
                          ? 'text-green-500'
                          : 'text-blue-400'
                      } text-sm font-medium`}
                    >
                      ({review.userType})
                    </span>
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">
                    <strong>Transaction Flow:</strong> {review.transactionFlow}
                  </p>
                  <div className="flex items-center mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    <strong>Feedback:</strong>{' '}
                    {review.feedback || 'No feedback provided'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(review.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No reviews available.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedbacks;
