import React, {Component} from 'react';
import DemoComponentDefault from './src/Buoi1/DemoComponent';
import {DemoComponentNonDefault} from './src/Buoi1/DemoComponentNonDefault';
import DemoStyle from './src/Buoi1/DemoStyle';
import DemoStyleSheet from './src/Buoi2/DemoStyleSheet';
import DemoFlex from './src/Buoi2/DemoFlex';
import ExLayout from './src/Buoi2/ExLayout';
import DemoImage from './src/Buoi2/DemoImage';
import BindingData from './src/Buoi3/BindingData';
import ExUI from './src/Buoi3/ExUI';
import RenderList from './src/Buoi3/RenderList';
import ExRender from './src/Buoi4/ExRender';
import DemoScroll from './src/Buoi4/DemoScroll';
import DemoFlatList from './src/Buoi4/DemoFlatList';
import DemoSectionList from './src/Buoi4/DemoSectionList';
import RockPaperScissor from './src/Buoi5/RockPaperScissor';
import DemoRedux from './src/Buoi6/DemoRedux';
import {Provider} from 'react-redux';
// import {store} from './src/Buoi6/redux/store';
import rootStore from './src/Buoi7/redux/store';
import RockPaperScissorRedux from './src/Buoi7/RockPaperScissorRedux';
import DemoLifecycle from './src/Buoi8/DemoLifecycle';
import DemoCallAPI from './src/Buoi8/DemoCallAPI';
import DemoAxios from './src/Buoi9/DemoAxios';
import ListProductScreen from './src/Buoi9/ListProductScreen';
import OnboardScreen from './src/Buoi10_11/OnboardScreen';
import RootScreenB10 from './src/Buoi10_11';
import RootScreen from './src/Buoi12';
import {NavigationContainer} from '@react-navigation/native';
import DemoHook from './src/Buoi20/Hook';
import DemoMemo from './src/Buoi20/DemoMemo';
import DemoAnimationJS from './src/Buoi22/DemoAnimationJS';
import DemoAnimated from './src/Buoi22/DemoAnimated';
import DemoInterpolate from './src/Buoi22/DemoInterpolate';
//Stateful Component
class App extends Component {
  render() {
    return (
      <Provider store={rootStore}>
        <DemoInterpolate />
      </Provider>
    );
  }
}

export default App;
