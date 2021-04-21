import { PureComponent } from 'react';
import { ENTER_KEY, TAB_KEY} from '../constants/keys';
import Select from '@material-ui/core/Select';

class SelectEditor extends PureComponent {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.state = {}
  }

  handleChange (opt) {
    const {onCommit, onRevert} = this.props
    if (!opt) {
      return onRevert()
    }
    const { e } = this.state
    onCommit(opt.value, e)
  }

  handleKeyDown (e) {
    // record last key pressed so we can handle enter
    if (e.which === ENTER_KEY || e.which === TAB_KEY) {
      e.persist()
      this.setState({ e })
    } else {
      this.setState({ e: null })
    }
  }

  render () {
    return (
      <Select
        autoFocus
        openOnFocus
        closeOnSelect
        value={this.props.value}
        onChange={this.handleChange}
        onInputKeyDown={this.handleKeyDown}
        options={[
          {label: '1', value: 1},
          {label: '2', value: 2},
          {label: '3', value: 3},
          {label: '4', value: 4},
          {label: '5', value: 5}
        ]}
      />
    )
  }
}

export default SelectEditor;
