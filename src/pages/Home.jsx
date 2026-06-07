import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, MapPin, Search } from 'lucide-react';
import { format, addDays } from 'date-fns';

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    location: 'Mumbai',
    checkIn: format(new Date(), 'yyyy-MM-dd'),
    checkOut: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    guests: 1,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/rooms', { state: search });
  };

  // Mock featured rooms
  const featuredRooms = [
    {
      id: 1,
      name: 'Deluxe Suite',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=500&h=400&fit=crop',
      rating: 4.8,
      reviews: 245,
    },
    {
      id: 2,
      name: 'Royal Penthouse',
      price: 15999,
      image: 'https://images.unsplash.com/photo-1566665556112-652023ec4fb6?w=500&h=400&fit=crop',
      rating: 4.9,
      reviews: 189,
    },
    {
      id: 3,
      name: 'Standard Room',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=400&fit=crop',
      rating: 4.6,
      reviews: 412,
    },
  ];

  // Mock testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      text: 'Exceptional service and luxurious accommodations. Highly recommended!',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      text: 'Palace Hotels made our honeymoon unforgettable. Best experience ever!',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    },
    {
      id: 3,
      name: 'Amit Patel',
      text: 'Perfect for business trips. Great location, excellent facilities, and friendly staff.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amit',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen bg-gradient-to-b from-navy via-navy to-transparent overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=1200&h=800&fit=crop)',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-white animate-fade-in">
          <h1 className="heading-1 text-white text-center mb-4 max-w-4xl">
            Find Your Perfect Stay
          </h1>
          <p className="text-lg md:text-2xl text-light-gold text-center max-w-2xl mb-12">
            Luxury accommodations at the best prices. Book now and experience the Palace difference.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-4xl bg-white rounded-lg p-4 md:p-6 shadow-luxury-lg grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2"
          >
            {/* Location */}
            <div className="md:col-span-1">
              <label className="block text-navy text-sm font-semibold mb-2">Location</label>
              <div className="flex items-center gap-2 border-b-2 border-gold pb-2">
                <MapPin className="w-5 h-5 text-gold" />
                <input
                  type="text"
                  value={search.location}
                  onChange={(e) => setSearch({ ...search, location: e.target.value })}
                  className="flex-1 bg-transparent focus:outline-none text-navy font-medium"
                  placeholder="City"
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="md:col-span-1">
              <label className="block text-navy text-sm font-semibold mb-2">Check-in</label>
              <div className="flex items-center gap-2 border-b-2 border-gold pb-2">
                <Calendar className="w-5 h-5 text-gold" />
                <input
                  type="date"
                  value={search.checkIn}
                  onChange={(e) => setSearch({ ...search, checkIn: e.target.value })}
                  className="flex-1 bg-transparent focus:outline-none text-navy font-medium"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="md:col-span-1">
              <label className="block text-navy text-sm font-semibold mb-2">Check-out</label>
              <div className="flex items-center gap-2 border-b-2 border-gold pb-2">
                <Calendar className="w-5 h-5 text-gold" />
                <input
                  type="date"
                  value={search.checkOut}
                  onChange={(e) => setSearch({ ...search, checkOut: e.target.value })}
                  className="flex-1 bg-transparent focus:outline-none text-navy font-medium"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="md:col-span-1 flex flex-col justify-end">
              <label className="block text-navy text-sm font-semibold mb-2">Guests</label>
              <div className="flex items-center gap-2 border-b-2 border-gold pb-2">
                <Users className="w-5 h-5 text-gold" />
                <select
                  value={search.guests}
                  onChange={(e) => setSearch({ ...search, guests: parseInt(e.target.value) })}
                  className="flex-1 bg-transparent focus:outline-none text-navy font-medium"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="md:col-span-4 mt-4 btn-primary-gold flex items-center justify-center gap-2 w-full"
            >
              <Search className="w-5 h-5" />
              Search Rooms
            </button>
          </form>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="section-padding bg-white" id="featured">
        <div className="section-max-width">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex justify-center mb-4">
              <div className="divider" />
            </div>
            <h2 className="heading-2 mb-4">Featured Luxury Rooms</h2>
            <p className="body-text max-w-2xl mx-auto">
              Handpicked selections from our finest collection of premium accommodations.
            </p>
          </div>

          <div className="grid-luxury">
            {featuredRooms.map((room, index) => (
              <div
                key={room.id}
                className="card-luxury card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {room.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-3 text-lg mb-2">{room.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {room.reviews} verified reviews
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-2xl font-bold text-gold">₹{room.price}</p>
                      <p className="text-gray-500 text-sm">per night</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 btn-outline text-sm">View Details</button>
                    <button className="flex-1 btn-primary-gold text-sm">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/rooms" className="btn-primary inline-flex items-center gap-2">
              Explore All Rooms →
            </a>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding bg-gray-50" id="amenities">
        <div className="section-max-width">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex justify-center mb-4">
              <div className="divider" />
            </div>
            <h2 className="heading-2 mb-4">World-Class Amenities</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['WiFi', 'AC', 'Breakfast', 'Pool', 'Spa', 'Gym', 'Bar', 'Restaurant'].map(
              (amenity, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-2">
                    {amenity === 'WiFi' && '📶'}
                    {amenity === 'AC' && '❄️'}
                    {amenity === 'Breakfast' && '🍳'}
                    {amenity === 'Pool' && '🏊'}
                    {amenity === 'Spa' && '🧖'}
                    {amenity === 'Gym' && '🏋️'}
                    {amenity === 'Bar' && '🍹'}
                    {amenity === 'Restaurant' && '🍽️'}
                  </div>
                  <p className="font-semibold text-navy">{amenity}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white" id="testimonials">
        <div className="section-max-width">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex justify-center mb-4">
              <div className="divider" />
            </div>
            <h2 className="heading-2 mb-4">What Our Guests Say</h2>
          </div>

          <div className="grid_luxury">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-8 rounded-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-navy">{testimonial.name}</p>
                    <p className="text-gold">{'⭐'.repeat(testimonial.rating)}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/80">
        <div className="section-max-width text-center text-white animate-fade-in">
          <h2 className="heading-2 text-white mb-4">Ready to Book Your Luxury Stay?</h2>
          <p className="body-text text-light-gold max-w-2xl mx-auto mb-8">
            Experience world-class service and unparalleled luxury at Palace Hotels.
          </p>
          <a href="/rooms" className="btn-primary-gold inline-flex items-center gap-2">
            Start Booking Now →
          </a>
        </div>
      </section>
    </div>
  );
}
