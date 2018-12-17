import Reactotron from 'reactotron-react-native';

export default function config() {
  Reactotron
  .configure()
  .useReactNative()
  .connect();
}
