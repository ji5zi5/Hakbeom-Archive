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
        choice: '/assets/se/ui-choice.ogg',
        confirm: '/assets/se/ui-confirm.ogg',
        close: '/assets/se/ui-close.ogg',
        message: '/assets/se/phone-message.ogg',
        heart: '/assets/se/heart.ogg',
        promise: '/assets/se/promise.ogg',
        question: '/assets/se/question.ogg',
        chatter: '/assets/se/chatter.ogg',
        blush: '/assets/se/blush.ogg',
        'voice-soft': '/assets/se/voice-soft.ogg',
        'rain-step': '/assets/se/rain-step.ogg'
      }}
    />
  );
}
