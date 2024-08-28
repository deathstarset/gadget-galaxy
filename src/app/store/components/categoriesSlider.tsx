"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

interface CategoriesSliderProps {
  categories: Category[];
}

export default function CategoriesSlider({
  categories,
}: CategoriesSliderProps) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex items-center flex-row"
    >
      {categories.map((category) => {
        return (
          <SwiperSlide key={category.id} className="my-10">
            <Card className="flex items-center justify-center text-center h-40 hover:scale-[1.05] transition-transform cursor-pointer">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
