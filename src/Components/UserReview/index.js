import React, { useEffect } from "react";
import SwiperCore, { Swiper } from "swiper";
import "./UserReviews.scss"; // Adjust styles as needed
import client1 from "../Assets/images/clients/client1.jfif";
import client2 from "../Assets/images/clients/client2.jpeg";
import client3 from "../Assets/images/clients/client3.jfif";
import client4 from "../Assets/images/clients/client4.jpg";

// Install Swiper modules

const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Neha Sharma",
      photo: client1,
      rating: 5,
      description:
        "I had an amazing experience here. The service impeccable, and the ambiance was delightful. Definitely recommending it to my friends!",
    },
    {
      id: 2,
      name: "Priya Patel",
      photo: client2,
      rating: 5,
      description:
        "The place has a nice ambiance, and the staff was very friendly. Enjoyed the delicious food and the overall atmosphere.",
    },
    {
      id: 3,
      name: "Amit Singh",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      description:
        "Great place for family gatherings. The food was excellent, and the service exceeded our expectations. Will visit again!",
    },
    {
      id: 4,
      name: "Vikas Sharma",
      photo: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 5,
      description:
        "Had a fantastic evening with friends. The place had a lively vibe, and the music was great. Will definitely visit again!",
    },
    {
      id: 5,
      name: "Swati Patel",
      photo: client3,
      rating: 5,
      description:
        "The service was exceptional, and the food was delicious. Loved the cozy ambiance and the attention to detail.",
    },
    {
      id: 6,
      name: "Pooja Sharma",
      photo: client4,
      rating: 5,
      description:
        "Celebrated a special occasion here. Everything was perfect - from the food quality to the friendly staff. Highly recommend!",
    },
    {
      id: 7,
      name: "Meera Patel",
      photo: "https://randomuser.me/api/portraits/women/11.jpg",
      rating: 5,
      description:
        "Visited with family and had a wonderful time. The service was impeccable, and the ambiance was relaxing. Will come back!",
    },
    {
      id: 8,
      name: "Ajay Kumar",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 5,
      description:
        "The food was amazing, and the staff was very accommodating. Enjoyed every moment here. Will definitely visit again!",
    },
  ];
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      centeredSlides: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container">
      <div className="user-reviews overflow-hidden">
        <div className="swiper-container">
          <div className="swiper-wrapper h-100">
            {reviews.map((review) => (
              <div key={review.id} className="swiper-slide h-100">
                <div className="review-card h-100">
                  <img
                    src={review.photo}
                    alt=""
                    className="rounded-circle object-fit-cover"
                    style={{ width: 80, height: 80 }}
                    width={80}
                    height={80}
                  />
                  <h3 className="m-1">{review.name}</h3>
                  <div className="stars">{renderStars(review.rating)}</div>
                  <hr className="my-2" />
                  <p>{review.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
