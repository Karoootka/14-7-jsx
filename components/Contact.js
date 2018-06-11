var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://www.iconarchive.com/download/i86044/graphicloads/100-flat-2/contacts.ico'}></img>
        <p className={'contactLabel'}>
          {this.props.item.firstName}
        </p>
        <p className={'contactLabel'}>
          {this.props.item.lastName}
        </p>
        <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
          {this.props.item.email}
        </a>
      </div>
    )
  }
});
