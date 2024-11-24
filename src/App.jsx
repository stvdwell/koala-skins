import React, { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';

const App = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }, []);

  const skins = [
    { id: 1, name: 'Ableton Move', image: '/Koala-BG-AbletonMove.png' },
    { id: 2, name: 'Ambient Clouds', image: '/Koala-BG-AmbientClouds.png' },
    { id: 3, name: 'Presonus Atom', image: '/Koala-BG-Atom.png' },
    { id: 4, name: 'Maschine v1', image: '/Koala-BG-Maschine-v1.png' },
    { id: 5, name: 'Maschine v2', image: '/Koala-BG-Maschine-v2.png' },
    { id: 6, name: 'Purple Flood', image: '/Koala-BG-PurpleFlood.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="max-w-4xl mx-auto text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-6">Koala Sampler Skins</h1>
        <p className="text-lg text-gray-300 mb-8">
          Here is my first set of Koala skins inspired by pretty pictures and popular midi controllers/samplers.
        </p>
        
        <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-4 mb-8" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="text-yellow-500" size={24} />
            <h2 className="text-lg font-semibold text-yellow-500">Compatibility Note</h2>
          </div>
          <p className="text-yellow-200/90">
            These skins were made on a 4th generation iPad Air, so will fit 10.9" screens only (though you could try on an 11" as well, why not?).
            They only work in portrait orientation not landscape as they mimic the 4 x 4 pad layout of many popular samplers.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skins.map((skin, index) => (
            <div 
              key={skin.id} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <img
                src={skin.image}
                alt={skin.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{skin.name}</h3>
                <p className="text-gray-400 mb-4">Right-click and save image to download</p>
              </div>
            </div>
          ))}
        </div>

        <section 
          className="bg-gray-800 rounded-lg p-6 mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-2xl font-bold mb-4">Installation Instructions</h2>
          <p className="text-gray-300">
            To install these skins:
          </p>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-300">
            <li>Open Koala Sampler on your iPad</li>
            <li>Go to Settings</li>
            <li>Under the "Extras" tab, choose "Background"</li>
            <li>Locate and select your downloaded .png file</li>
          </ol>
        </section>

        <section 
          className="max-w-4xl mx-auto text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="w-full max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-6">Listen to stvdwell</h3>
            <div className="relative overflow-hidden" style={{ paddingTop: '152px' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/5AKW9BjCoI18UhnxIh3H7d?utm_source=generator"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

           {/* Add this section before the footer */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <div className="w-full max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-6">Support my music here</h3>
          <div className="relative overflow-hidden" style={{ paddingTop: '152px' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/5AKW9BjCoI18UhnxIh3H7d?utm_source=generator"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer 
        className="max-w-4xl mx-auto text-center text-gray-400 mt-12"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <p>Share and enjoy! Feel free to modify these skins for your own use.</p>
      </footer>
    </div>
  );
};

export default App;
