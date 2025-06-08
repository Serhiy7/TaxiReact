import { useState } from "react";

export const useReviewsData = () => {
  const [reviews] = useState([
    {
      id: 1,
      title: "Excellent service!",
      content: "Very satisfied with the quality of service and the cars.",
      author: "Ivan I.",
      rating: 5,
      avatar: "/images/reviews/ivan.jpg",
      fullContent:
        "Very satisfied with the quality of service and the cars. Everything was top-notch, highly recommend!",
      date: "10.06.2025",
    },
    {
      id: 2,
      title: "Quick paperwork",
      content:
        "The paperwork was done quickly, the car is in excellent condition.",
      author: "Maria K.",
      rating: 4,
      avatar: "/images/reviews/maria.jpg",
      fullContent:
        "The paperwork was done quickly, the car is in excellent condition. Minor comments on the cleanliness of the interior, but overall everything is great.",
      date: "05.06.2025",
    },
    {
      id: 3,
      title: "Convenient service",
      content: "Very convenient and fast. Everything was great!",
      author: "Alexey S.",
      rating: 5,
      avatar: "/images/reviews/alexey.jpg",
      fullContent:
        "Very convenient and fast. Everything was great! Especially impressed with the staff's attitude and the speed of processing.",
      date: "01.06.2025",
    },
    {
      id: 4,
      title: "Reliable cars",
      content:
        "The cars are in excellent condition, everything works like clockwork.",
      author: "Olga P.",
      rating: 5,
      avatar: "/images/reviews/olga.jpg",
      fullContent:
        "The cars are in excellent condition, everything works like clockwork. Very satisfied with the choice and service.",
      date: "28.05.2025",
    },
    {
      id: 5,
      title: "Dissatisfied with the service",
      content: "Long wait and inconvenient office location.",
      author: "Dmitry V.",
      rating: 2,
      avatar: "/images/reviews/dmitry.jpg",
      fullContent:
        "Long wait and inconvenient office location. The car was not very clean, and the staff were not very helpful.",
      date: "20.05.2025",
    },
    {
      id: 6,
      title: "Problems with the car",
      content: "The car broke down after two days of use.",
      author: "Anna T.",
      rating: 1,
      avatar: "/images/reviews/anna.jpg",
      fullContent:
        "The car broke down after two days of use. The service did not respond promptly to my complaint.",
      date: "15.05.2025",
    },
    {
      id: 7,
      title: "Good service, but there are drawbacks",
      content: "Overall good, but there were issues with booking.",
      author: "Sergey N.",
      rating: 3,
      avatar: "/images/reviews/sergey.jpg",
      fullContent:
        "Overall good, but there were issues with booking. Had to wait extra time to get the car.",
      date: "10.05.2025",
    },
  ]);

  return { reviews };
};
