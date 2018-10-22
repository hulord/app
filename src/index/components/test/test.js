import React from 'react'

class SwitchButton extends React.Component {
  constructor(props) {
    super(props)
     // 设置 initial state
    this.state = {
      open: this.props.open
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({ open: !this.state.open })
  }

  render() {
    let open = this.state.open,
      className = open ? 'switch-button open' : 'btn-switch'

    return (
      <label className={className} onClick={this.handleClick}>
        <input type="checkbox" checked={open}/>
      </label>
    )
  }
}

export default SwitchButton;

