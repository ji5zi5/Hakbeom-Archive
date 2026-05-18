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
      backgroundSrc="/assets/ui/image0_13_6.jpg"
      sounds={{
        click: '',
        choice: '',
        confirm: ''
      }}
    />
  );
}
