import { Flex, Button } from '../../';
import { styles } from '../app';

export default class ButtonPage extends React.Component {
  render() {
    return <React.Fragment>
      <Flex align='end'>
        <Button size='small' style={styles.item}>确定</Button>
        <Button style={styles.item}>确定</Button>
        <Button size='large' style={styles.item}>确定</Button>
      </Flex>
      <Flex align='end'>
        <Button size='small' type='info' style={styles.item} radius>提交</Button>
        <Button style={styles.item} type='info' radius>提交</Button>
        <Button size='large' style={styles.item} type='info' radius>提交</Button>
      </Flex>
      <Flex align='end'>
        <Button size='small' style={styles.item} round />
        <Button style={styles.item} round />
        <Button size='large' style={styles.item} round />
      </Flex>
      <Flex align='end'>
        <Button size='small' style={styles.item} disabled>不可用</Button>
        <Button style={styles.item} disabled>不可用</Button>
        <Button size='large' style={styles.item} disabled>不可用</Button>
      </Flex>
      <Flex align='end'>
        <Button size='small' type='danger' style={styles.item} >确定</Button>
        <Button style={styles.item} type='danger'>确定</Button>
        <Button size='large' style={styles.item} type='danger'>确定</Button>
      </Flex>
    </React.Fragment>
  }
}