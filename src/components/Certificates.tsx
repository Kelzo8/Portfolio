import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { certificates } from '@/lib/data';

export function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Certifications & Awards
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="relative overflow-hidden rounded-t-lg aspect-video mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl text-blue-800">{cert.title}</CardTitle>
                <CardDescription className="text-blue-600">{cert.organization}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}