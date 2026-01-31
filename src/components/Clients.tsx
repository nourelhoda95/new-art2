import React from "react";
import picture from './figma/assets/picture.png';


export function Clients() {

  const clients = [

   { name: 'جمعية رسالة', img: picture },
  // { name: 'سايبس', img: '/images/clients/cybes.png' },
  // { name: 'اليت', img: '/images/clients/elite.png' },
  // { name: 'سماش', img: '/images/clients/smash.png' },
  // { name: 'جولدز جيم', img: '/images/clients/golds-gym.png' },
  // { name: 'برومك', img: '/images/clients/promac.png' },
  // { name: 'سول اند مور', img: '/images/clients/soul-more.png' },
  // { name: 'بلاك لوتس', img: '/images/clients/black-lotus.png' },
  // { name: 'سيبل', img: '/images/clients/cibel.png' },
  // { name: 'فوسفات مصر', img: '/images/clients/phosphate.png' },
  // { name: 'HERO', img: '/images/clients/hero.png' },
  // { name: 'Uber', img: '/images/clients/uber.png' },

  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
           عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نفخر بالعمل مع كبرى العلامات التجارية والشركات الرائدة في المجال
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 min-h-[140px]"
            > 
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-800">
                  {client.img}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-600 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
