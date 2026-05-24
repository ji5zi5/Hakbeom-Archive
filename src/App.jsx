import { Suspense, lazy, useEffect, useState } from 'react';
import { loadScenarioBundle } from './data/loadScenarioBundle.js';

const visualNovelModulePromise = import('./components/BAVisualNovel.jsx');
const BAVisualNovel = lazy(() => (
  visualNovelModulePromise.then((module) => ({ default: module.BAVisualNovel }))
));

const params = new URLSearchParams(window.location.search);

function LoadingScreen({ error = null }) {
  return (
    <main className="viewport">
      <section className="loading-screen" role={error ? 'alert' : 'status'} aria-live="polite">
        <p className="loading-eyebrow">HAKBEOM ARCHIVE</p>
        <h1>{error ? '로드 실패' : '불러오는 중'}</h1>
        <p>{error ? '시나리오 데이터를 불러오지 못했어. 새로고침해줘.' : '시나리오와 연출 데이터를 준비하고 있어.'}</p>
      </section>
    </main>
  );
}

export default function App() {
  const [scenarioBundle, setScenarioBundle] = useState(null);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let active = true;

    loadScenarioBundle()
      .then((bundle) => {
        if (active) setScenarioBundle(bundle);
      })
      .catch((error) => {
        console.error('Failed to load scenario bundle', error);
        if (active) setLoadError(error);
      });

    return () => {
      active = false;
    };
  }, []);

  if (loadError) {
    return <LoadingScreen error={loadError} />;
  }

  if (!scenarioBundle) {
    return <LoadingScreen />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <BAVisualNovel
        scenario={scenarioBundle.scenario}
        episodeInfo={scenarioBundle.episodeInfo}
        initialMode={params.get('mode') || 'dialogue'}
        initialItemId={params.get('id') || ''}
        initialScreen={params.get('screen') || (params.has('id') || params.has('mode') ? 'game' : 'title')}
        initialAuto={params.get('auto') === '1'}
        backgroundSrc="/assets/bg/school-rain-hallway.png"
        sounds={{
          click: '/assets/se/ui-click.ogg',
          choice: '/assets/se/ui-drop.ogg',
          confirm: '/assets/se/ui-drop.ogg',
          close: '/assets/se/ui-click.ogg'
        }}
      />
    </Suspense>
  );
}
