'use client';

import Layout from '@/components/layout/Layout';

export default function CommunityMapPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-6 md:p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-2">Community Map</h2>
            <p className="text-gray-600 mb-6">Find local projects, programs, services, and activities for older 2SLGBTQI+ people near you. Search by address, postal code, or community name. Contribute a resource to help the network grow.</p>
            
            <div className="map-shell">
              <aside className="map-card p-4 md:p-5" aria-labelledby="search-title">
                <h3 id="search-title" className="text-xl font-semibold text-gray-800">Find Resources Near You</h3>
                <form id="searchForm" aria-describedby="search-help" onSubmit={(e) => e.preventDefault()}>
                  <div className="mt-3 flex gap-2">
                    <input 
                      id="q" 
                      type="text" 
                      inputMode="search" 
                      placeholder="Enter address, postal code (e.g., K1A 0B1), or community (e.g., Ottawa)" 
                      aria-label="Search location"
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                    />
                    <button 
                      type="button" 
                      className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-4 rounded-lg" 
                      id="btnSearch" 
                      aria-label="Search"
                    >
                      Search
                    </button>
                  </div>
                  <p id="search-help" className="text-sm text-gray-500 mt-2">Tip: Try a Canadian postal code (e.g., M5V 2T6), or city name (e.g., Halifax).</p>
                  <div className="mt-4 flex items-center gap-3">
                    <label htmlFor="radius" className="text-sm text-gray-600">Search radius</label>
                    <input id="radius" type="range" min="10" max="300" step="10" defaultValue="50" className="w-full accent-fuchsia-600" />
                    <span id="radiusLabel" aria-live="polite" className="text-sm text-gray-700">50 km</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by type">
                    <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 text-sm font-semibold">
                      <input type="checkbox" className="flt accent-fuchsia-600" value="social" defaultChecked /> Social
                    </label>
                    <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-200 text-sm font-semibold">
                      <input type="checkbox" className="flt accent-green-600" value="health" defaultChecked /> Health
                    </label>
                    <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-sm font-semibold">
                      <input type="checkbox" className="flt accent-amber-500" value="housing" defaultChecked /> Housing
                    </label>
                    <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-sm font-semibold">
                      <input type="checkbox" className="flt accent-pink-500" value="advocacy" defaultChecked /> Advocacy
                    </label>
                  </div>
                </form>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                  <div id="resultCount" aria-live="polite">No results yet.</div>
                  <div>
                    <span className="border border-gray-300 rounded px-1">Enter</span> to search • <span className="border border-gray-300 rounded px-1">+</span>/<span className="border border-gray-300 rounded px-1">-</span> to zoom
                  </div>
                </div>
                <div id="results" className="results-list mt-3 divide-y divide-gray-200" role="list" aria-label="Nearby resources"></div>
              </aside>
              
              <div className="map-card map-panel p-3">
                <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">
                  <button className="map-tool" id="zoomIn" title="Zoom in" aria-label="Zoom in">+</button>
                  <button className="map-tool" id="zoomOut" title="Zoom out" aria-label="Zoom out">−</button>
                  <button className="map-tool" id="resetView" title="Reset view" aria-label="Reset view">⟳</button>
                </div>
                <div className="absolute left-3 bottom-3 z-10 bg-white/90 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 flex gap-4">
                  <span><span className="legend-badge legend-social"></span> Social</span>
                  <span><span className="legend-badge legend-health"></span> Health</span>
                  <span><span className="legend-badge legend-housing"></span> Housing</span>
                  <span><span className="legend-badge legend-advocacy"></span> Advocacy</span>
                </div>
                <div id="community-map" className="map-canvas rounded-lg" role="region" aria-label="Map of Canada">
                  <div className="absolute inset-0" id="svgWrap">
                    <svg viewBox="0 0 1000 650" role="img" aria-label="Stylized outline for Canada map with plotted resources" id="svgMap">
                      <g className="grid" stroke="#e5e7eb" strokeWidth="1">
                        <line x1="0" y1="75" x2="1000" y2="75" />
                        <line x1="0" y1="175" x2="1000" y2="175" />
                        <line x1="0" y1="275" x2="1000" y2="275" />
                        <line x1="0" y1="375" x2="1000" y2="375" />
                        <line x1="0" y1="475" x2="1000" y2="475" />
                        <line x1="0" y1="575" x2="1000" y2="575" />
                        <line x1="125" y1="0" x2="125" y2="650" />
                        <line x1="250" y1="0" x2="250" y2="650" />
                        <line x1="375" y1="0" x2="375" y2="650" />
                        <line x1="500" y1="0" x2="500" y2="650" />
                        <line x1="625" y1="0" x2="625" y2="650" />
                        <line x1="750" y1="0" x2="750" y2="650" />
                        <line x1="875" y1="0" x2="875" y2="650" />
                      </g>
                      <g id="land">
                        <path d="M40,520 C120,470 200,450 300,430 C420,410 540,420 650,430 C760,440 860,460 960,520 L960,600 L40,600 Z"
                              fill="#eef2ff" stroke="#d1d5db" strokeWidth="2" opacity="0.9"></path>
                        <path d="M220,400 C250,360 300,340 360,335 C430,330 510,340 560,350 C620,365 700,380 760,400
                                 L740,420 C700,410 640,395 580,385 C520,375 450,370 390,375 C330,380 280,395 250,420 Z"
                              fill="#e0e7ff" stroke="#d1d5db" strokeWidth="2" opacity="0.9"></path>
                        <path d="M120,300 C240,250 360,230 520,230 C680,230 820,260 920,300 L900,320 C820,290 700,270 520,270 C340,270 220,300 140,330 Z"
                              fill="#fae8ff" stroke="#d1d5db" strokeWidth="2" opacity="0.85"></path>
                      </g>
                      <g id="markers"></g>
                    </svg>
                  </div>
                  <div id="callout" className="map-callout" role="dialog" aria-live="polite" hidden>
                    <button className="absolute right-2 top-2 text-gray-500 hover:text-gray-700" aria-label="Close" title="Close">✕</button>
                    <h4 id="coTitle" className="text-base font-semibold text-gray-900">Title</h4>
                    <p id="coType" className="text-sm text-gray-500 mt-0.5"></p>
                    <p id="coDesc" className="text-sm text-gray-700 mt-2"></p>
                    <p className="text-xs text-gray-500 mt-2" id="coDist"></p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2">Map is an accessible, self-contained visualization. Exact geography is approximate; markers are plotted by latitude/longitude.</p>
              </div>
            </div>
            
            <div className="map-card p-4 md:p-6 mt-8" aria-labelledby="submit-title">
              <h3 id="submit-title" className="text-2xl font-bold text-gray-800">Contribute to the Community Map</h3>
              <p className="text-gray-600 mt-2 mb-4">Know a local project, program, service, or activity for older 2SLGBTQI+ people? Submit it below. Submissions you add here will appear immediately on your device (saved in your browser). For inclusion in the national directory, our team will review and publish to the main dataset.</p>
              <form id="submitForm" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Organization / Project Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      required 
                      placeholder="e.g., Rainbow Seniors Social Circle"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-1">Type of Resource</label>
                    <select 
                      id="type" 
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    >
                      <option value="">Select…</option>
                      <option value="social">Social / Community</option>
                      <option value="health">Health / Wellness</option>
                      <option value="housing">Housing / Supportive living</option>
                      <option value="advocacy">Advocacy / Legal / Rights</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">City / Community</label>
                    <input 
                      id="city" 
                      type="text" 
                      placeholder="e.g., Ottawa"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                    />
                  </div>
                  <div>
                    <label htmlFor="province" className="block text-sm font-semibold text-gray-700 mb-1">Province / Territory</label>
                    <select 
                      id="province"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    >
                      <option value="">Select…</option>
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="MB">Manitoba</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland and Labrador</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="NT">Northwest Territories</option>
                      <option value="NU">Nunavut</option>
                      <option value="ON">Ontario</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="QC">Quebec</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="YT">Yukon</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="postal" className="block text-sm font-semibold text-gray-700 mb-1">Postal Code</label>
                    <input 
                      id="postal" 
                      type="text" 
                      placeholder="e.g., K1A 0A6"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="desc" className="block text-sm font-semibold text-gray-700 mb-1">Brief Description</label>
                  <textarea 
                    id="desc" 
                    rows={3} 
                    placeholder="Brief description of services, programs, or activities offered..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  ></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Contact Email <span className="text-gray-400">(optional)</span></label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="contact@organization.ca"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-1">Website <span className="text-gray-400">(optional)</span></label>
                    <input 
                      id="website" 
                      type="url" 
                      placeholder="https://www.organization.ca"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                    />
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button 
                    type="submit" 
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-6 rounded-lg"
                  >
                    Add Resource
                  </button>
                  <button 
                    type="button" 
                    className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg"
                  >
                    Export Data (JSON)
                  </button>
                </div>
                <p id="submitMsg" className="text-sm text-gray-500 mt-3"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .map-shell { 
          display: grid; 
          gap: 1rem; 
          grid-template-columns: 360px 1fr; 
        }
        @media (max-width: 1024px) { 
          .map-shell { 
            grid-template-columns: 1fr; 
          } 
        }
        .map-card { 
          border: 1px solid #e5e7eb; 
          border-radius: 1rem; 
          background: #fff; 
          box-shadow: 0 10px 30px -10px rgba(17,24,39,.15); 
        }
        .map-panel { 
          position: relative; 
          overflow: hidden; 
        }
        .map-canvas { 
          height: 560px; 
          border-radius: .75rem; 
          border: 1px solid #e5e7eb; 
          background:
            radial-gradient(1200px 600px at 50% 10%, rgba(217,70,239,.08), transparent 60%),
            radial-gradient(900px 500px at 10% 100%, rgba(59,130,246,.08), transparent 60%),
            #fafafa; 
          position: relative; 
        }
        .legend-badge { 
          width: 10px; 
          height: 10px; 
          border-radius: 9999px; 
          display: inline-block; 
        }
        .legend-social { background: #60a5fa; } 
        .legend-health { background: #22c55e; } 
        .legend-housing { background: #f59e0b; } 
        .legend-advocacy { background: #f472b6; }
        .map-tool { 
          width: 42px; 
          height: 42px; 
          border-radius: .5rem; 
          border: 1px solid #e5e7eb; 
          background: #fff; 
          display: grid; 
          place-items: center; 
          cursor: pointer; 
          box-shadow: 0 6px 20px rgba(0,0,0,.08); 
        }
        .map-tool:focus { 
          outline: 3px solid rgba(217,70,239,.35); 
          outline-offset: 2px; 
        }
        .map-callout { 
          position: absolute; 
          min-width: 260px; 
          max-width: 300px; 
          background: #fff; 
          border: 1px solid #e5e7eb; 
          color: #111827; 
          border-radius: .75rem; 
          padding: .75rem .85rem; 
          box-shadow: 0 18px 40px rgba(0,0,0,.12); 
          z-index: 6; 
          transform: translate(-50%, -110%); 
        }
        .map-marker { 
          cursor: pointer; 
          transition: transform .15s ease; 
        }
        .map-marker:hover { 
          transform: scale(1.06); 
        }
        .results-list { 
          max-height: 34vh; 
          overflow: auto; 
        }
        .results-item:hover { 
          background: #faf5ff; 
        }
      `}</style>
    </Layout>
  );
}
