import React from 'react';

var ContactForm = React.createClass({
    propTypes: {
      value: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        React.createElement('form', {className: 'ContactForm'},
          React.createElement('input', {
            type: 'text',
            placeholder: 'Name (required)',
            value: this.props.value.name,
          }),
          React.createElement('input', {
            type: 'email',
            placeholder: 'Email',
            value: this.props.value.email,
          }),
          React.createElement('textarea', {
            placeholder: 'Phone Number',
            value: this.props.value.phone,
          }),
          React.createElement('button', {type: 'submit'}, "Add Contact")
        )
      )
    },
  });
  
  React.createElement(ContactForm, {
    value: this.props.newContact,
    onChange: function(contact) { console.log(contact) },
})

