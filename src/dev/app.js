import { HashRouter, Route, Switch } from 'react-router-dom';
import { Flex } from '../index';
import Side from './side';
import Header from './pages/header';
import ButtonPage from './pages/button';
import ColPage from './pages/col';
import SwitchPage from './pages/switch';
import SliderPage from './pages/slider';
import CalcPage from './pages/calc';
import SelectPage from './pages/select';
import TabsPage from './pages/tabs';
const lg = console.log;

import './style.less';

export const styles = {
  row: {
    flex: 1,
    height: 40,
    marginBottom: 10
  },
  col: {
    height: 40,
    lineHeight: '40px',
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    cursor: 'default'
  },
  item: {
    margin: 5
  },
  sliderBox: {
    height: 40,
    marginBottom: 5
  }
}


export default class App extends React.Component {


  render() {
    return (
      <Flex
        direction='column'
        justify='start'
        align='start'
        style={{ height: '100%' }}
      >
        <HashRouter>
          <Header />
          <Flex
            direction='row'
            justify='space-between'
            align='start'
            style={{ flex: 1, width: '100%' }}
          >
            <Side />
            <Flex
              direction='column'
              justify='center'
              align='center'
              style={{ flex: 1, padding: 15, minWidth: 800 }}
            >
              <Switch>
                <Route path="/button" component={ButtonPage} />
                <Route path="/col" component={ColPage} />
                <Route path="/switch" component={SwitchPage} />
                <Route path="/slider" component={SliderPage} />
                <Route path="/calc" component={CalcPage} />
                <Route path="/select" component={SelectPage} />
                <Route path="/tabs" component={TabsPage} />
              </Switch>
            </Flex>
          </Flex>
        </HashRouter>
      </Flex>
    )
  }
}