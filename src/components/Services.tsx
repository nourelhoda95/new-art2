import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';


const services = [
  {
    title: 'طباعة الاستيكرات والليبلز',
    description: 'بنقدّم خدمة طباعة Stickers & Labels بجودة عالية تناسب كل الاستخدامات التجارية والشخصية الطباعة بتكون بخامات متنوعة، مقاومة للمياه والخدش، وألوان ثابتة وواضحة .',

    image: 'https://images.unsplash.com/photo-1710153601719-282f8064b3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHN0aWNrZXIlMjBsYWJlbHMlMjBwcmludGluZ3xlbnwxfHx8fDE3Njk1NDEyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'ستاندات العرض والبنرات',
    description: 'بنوفّر طباعة وتصميم ستاندات عرض وبنرات بجودة عالية تناسب المعارض، المحلات، والفعاليات.    خامات قوية، طباعة واضحة، وألوان ثابتة بتشد الانتباه وتبرز البراند بشكل احترافي.',
    image: 'https://images.unsplash.com/photo-1584252325944-bcf1067d37e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYmFubmVyJTIwc3RhbmQlMjBkaXNwbGF5fGVufDF8fHx8MTc2OTU0MTIzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'الزيّ الرسمي للشركات',
    description: 'بنوفّر تصميم وتنفيذ الزيّ الرسمي للشركات بجودة عالية تعكس هوية البراند وتعزّز الشكل الاحترافي لفريق العمل.خامات مريحة، تشطيب ممتاز، وإمكانية تنفيذ اللوجو بالطباعة أو التطريز      .',
    image: 'https://images.unsplash.com/photo-1720514496179-fdd3d70133b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwb2xvJTIwc2hpcnRzJTIwdW5pZm9ybXxlbnwxfHx8fDE3Njk1NDEyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
       

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all">
                 اعرف المزيد
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
           من التصاميم البصرية إلى الحملات التسويقية المتكاملة، نغطي كل التفاصيل.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
          لمعرفة المزيد
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
