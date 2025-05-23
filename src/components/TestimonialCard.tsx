
interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  date: string;
}

const TestimonialCard = ({ name, location, testimonial, rating, date }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover-lift animate-fade-scale">
      <div className="flex items-center mb-4">
        {/* Rating stars */}
        <div className="flex animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-300`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>{date}</span>
      </div>
      <p className="text-gray-700 mb-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>{testimonial}</p>
      <div className="font-medium animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <p className="text-kaceli-blue">{name}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
