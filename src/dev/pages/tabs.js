import { Flex, Tabs, Button } from '../../';
// import { styles } from '../app';

export default class TabsPage extends React.Component {
  tabStyle = {
    padding: 10,
    height: 200
  }
  render() {
    return (
      <Flex
        direction='row'
        align='center'
        justify='center'
      >
        <Tabs
          tabs={[
            { name: 'Home' },
            { name: 'About' },
            { name: 'Very Long Tab Name' },
            { name: 'List' }
          ]}
          field='name'
          border={true}
          defaultKey={-2}
          onTabChange={(currentTab, index) => {
            console.log('currentTab: ', currentTab, index);
          }}
        >
          <div style={this.tabStyle}>Home Tab Content</div>
          <div style={this.tabStyle}>About Infomation Content</div>
          <div style={this.tabStyle}>Very Long Tab Content</div>
          <div style={this.tabStyle}>List Content</div>
        </Tabs>
        <Button
          onClick={() => {
            Tabs.changeTab(1);
          }}>
          Go To Tab
        </Button>
      </Flex>
    )
  }
}