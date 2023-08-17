declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.StateLessComponent<SvgProps>;
  export default content;
}
