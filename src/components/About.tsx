import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    'سنوات من الخبرة في المجال',
    'تقنيات طباعة حديثة ومتطورة',
    'سرعة في تنفيذ الطلبات',
    'ضمان جودة احترافية',
    'أسعار تنافسية',
    'دعم عملاء مخصص',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <span className="text-orange-600 text-sm font-semibold">من نحن</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
             رحلتنا في عالم الطباعة الإبداعية
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At <span className="font-semibold text-gray-900">نيو ارت</span>, بنقدّم حلول طباعة عالية الجودة تشمل الطباعة، الاستيكرات، البنرات، والمواد الدعائية، بخدمة سريعة ونتائج دقيقة.
بفضل خبرتنا لسنوات واعتمادنا على أحدث التقنيات، نضمن تنفيذًا نظيفًا واحترافيًا يساعد الشركات على إبراز علامتها التجارية بثقة وأناقة.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl p-6 border border-orange-200">
              <p className="text-gray-800 font-medium italic">
                "مكان واحد لكل احتياجاتك في الطباعة – من الفكرة حتى التنفيذ"
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1650803321876-63010399313e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjBnb2xkJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzY5NTQxMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Abstract design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcmludGluZyUyMHByZXNzJTIwbWFjaGluZXxlbnwxfHx8fDE3Njk1MzM3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Printing machine"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1710153601719-282f8064b3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHN0aWNrZXIlMjBsYWJlbHMlMjBwcmludGluZ3xlbnwxfHx8fDE3Njk1NDEyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sticker printing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1742970936099-b68c962278c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMGZhY3RvcnklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2OTU0MTIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Printing factory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-orange-400/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
