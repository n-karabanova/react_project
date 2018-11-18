import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

export default class AddFriendInput extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired
  }

  render () {
    return (
      <input
        type="text"
		required="true"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder=" Введите имя..."
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
	const re = /[а-яА-ЯёЁ]+/;
	if (e.target.value === '' || re.test(e.target.value)) {
		 this.setState({name: e.target.value})
	}
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addFriend(name);
      this.setState({ name: '' });
    }
  }

}
