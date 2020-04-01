import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import reactotronSaga from 'reactotron-redux-saga';
// host passado para o reactotron por conta do liveReload via USB
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '172.30.172.10' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}
