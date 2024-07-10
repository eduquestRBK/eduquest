'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Course {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  instructor: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

const ButtonSection: React.FC = () => {
  const courses: Course[] = [
    { 
      title: 'Marketing Strategies', 
      description: 'Learn effective marketing strategies from industry leaders.', 
      category: 'Marketing',
      imageUrl: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/marketing.webp',
      instructor: 'John Doe',
      rating: 4.5
    },
    { 
      title: 'Illustration Techniques', 
      description: 'Master illustration techniques with hands-on projects.', 
      category: 'Illustration',
      imageUrl: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/illustration.webp',
      instructor: 'Jane Smith',
      rating: 4.8
    },
    { 
      title: 'Web Development Fundamentals', 
      description: 'Start your journey in web development with this beginner-friendly course.', 
      category: 'Web Development',
      imageUrl: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/graphic_design.webp',
      instructor: 'Michael Johnson',
      rating: 4.7
    },
    { 
      title: 'Photography Masterclass', 
      description: 'Become a skilled photographer with expert tips and practical assignments.', 
      category: 'Photography',
      imageUrl: 'https://static.skillshare.com/assets/images/loh/category_carousel/320x400/photography.webp',
      instructor: 'Emily Brown',
      rating: 4.9
    },
  ];

  const faqs: FAQ[] = [
    { question: 'How do I enroll in a course?', answer: 'To enroll in a course, click on the "Start learning today" button and follow the prompts to create an account and purchase the course.' },
    { question: 'Is there a free trial available?', answer: 'Yes, Skillshare offers a free trial period for new users to explore the platform and access a limited selection of courses.' },
    { question: 'How can I cancel my subscription?', answer: 'You can cancel your subscription at any time by visiting your account settings and selecting the cancel option. Your access will remain until the end of the current billing period.' },
    { question: 'Can I download courses for offline viewing?', answer: 'Yes, Skillshare allows you to download courses on mobile devices for offline viewing. Simply click on the download icon next to the course you wish to save.' },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const filteredCourses = activeCategory === 'All'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`px-4 py-2 ${activeCategory === 'All' ? 'bg-[#e1aeff]' : 'bg-white'} text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 ${activeCategory === 'Marketing' ? 'bg-[#e1aeff]' : 'bg-white'} text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory('Marketing')}
          >
            Marketing
          </button>
          <button
            className={`px-4 py-2 ${activeCategory === 'Illustration' ? 'bg-[#e1aeff]' : 'bg-white'} text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory('Illustration')}
          >
            Illustration
          </button>
          <button
            className={`px-4 py-2 ${activeCategory === 'Web Development' ? 'bg-[#e1aeff]' : 'bg-white'} text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`px-4 py-2 ${activeCategory === 'Photography' ? 'bg-[#e1aeff]' : 'bg-white'} text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory('Photography')}
          >
            Photography
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={320}
                height={400}
                className="object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
              <p className="text-gray-600 mt-2">{course.instructor} · {course.rating} ★</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Creative Learning Made Easy</h2>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-start space-x-2">
              <div className="text-primary font-bold">✓</div>
              <p className="text-gray-700"><span className="text-primary font-semibold">Thousands</span> of creative classes. Beginner to pro.</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="text-primary font-bold">✓</div>
              <p className="text-gray-700">Taught by <span className="text-primary font-semibold">creative pros</span> and industry icons.</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="text-primary font-bold">✓</div>
              <p className="text-gray-700"><span className="text-primary font-semibold">Learning Paths</span> to help you achieve your goals.</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="text-primary font-bold">✓</div>
              <p className="text-gray-700"><span className="text-primary font-semibold">Certificates</span> to celebrate your accomplishments.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 bg-primary shadow-md rounded-lg">
                <button
                  className=" text-white text-lg font-semibold mb-2 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
                {expandedIndex === index && (
                  <p className="text-base text-white mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonSection;
