import { BAVisualNovel } from './components/BAVisualNovel.jsx';
import { episodeInfo, scenario } from './data/scenario.js';

const params = new URLSearchParams(window.location.search);

export default function App() {
  return (
    <BAVisualNovel
      scenario={scenario}
      episodeInfo={episodeInfo}
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
  );
}
