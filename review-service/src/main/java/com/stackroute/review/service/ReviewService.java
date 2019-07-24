package com.stackroute.review.service;

import com.stackroute.review.domain.Review;
import com.stackroute.review.dto.RecommendationDTO;
import com.stackroute.review.dto.ReviewDTO;
//import com.stackroute.review.dto.ReviewDetailDTO;

import java.util.List;

public interface ReviewService {
    public Review addReview(Review review);
    public List<Review> getAllReviews();
    public List<Review> getAllReviewsbyProduct(String pname);
    public void sendRating(ReviewDTO reviewDTO);
    public void sendReviewer(Review review);
    public void sendRecommendation(RecommendationDTO recommendationDTO);
}
