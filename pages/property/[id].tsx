import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";


export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id) as PropertyProps;

  if (!property) return <p className="p-6">Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Property Header + Image Gallery + Description + Amenities */}
      <PropertyDetail property={property} />

      {/* Responsive Grid for Booking + Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Booking Section (Sticky on large screens) */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <BookingSection price={property.price} />
          </div>
        </div>

        {/* Review Section */}
        <div className="lg:col-span-2">
          <ReviewSection reviews={property.reviews} />
        </div>
      </div>
    </div>
  );
}
