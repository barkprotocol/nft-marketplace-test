"use client"
import React from "react"
import ReactStars from "react-stars"

function RatingWidget({ value, totalReviews, size }) {
  return (
    <div className="flex items-center rating-widget">
      <ReactStars count={5} size={size} color2={"#ffd700"} half={true} edit={false} value={value} />
      <p className="ml-2 text-xs text-gray-400">
        ({totalReviews} {totalReviews >= 2 ? "Reviews" : "Review"})
      </p>
    </div>
  )
}

export default RatingWidget
