
import React from 'react';

/* UI ELEMENTS */
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

/* ICONS */
import EventIcon from 'material-ui/svg-icons/action/event';
import PersonIcon from 'material-ui/svg-icons/social/person';
import AccountBoxIcon from 'material-ui/svg-icons/action/account-box';

class Navigation extends React.Component {
  constructor( props ) {
      super( props );
      this.state = {
        openDrawer: false,
        openOptions: false,
        optionsText: "VER OPCIONES"
      }

      this.switchDrawer   = this.switchDrawer.bind( this );
      this.switchOptions  = this.switchOptions.bind( this );
  }

  switchDrawer() {
    this.setState({
      openDrawer: !this.state.openDrawer
    });
  }

  switchOptions() {
    let optionsText = "MOSTRAR OPCIONES";
    let openOptions = false;
    if ( !this.state.openOptions ) {
      optionsText = "CERRAR OPCIONES";
      openOptions = true;
    }
    this.setState({
      openOptions: openOptions,
      optionsText: optionsText
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title="MANAGIFY"
          iconElementRight={<FlatButton label={this.state.optionsText} />}
          onLeftIconButtonTouchTap={this.switchDrawer}
          onRightIconButtonTouchTap={this.switchOptions}
        />
        {/* MAIN MENU */}
        <Drawer
          docked={false}
          open={this.state.openDrawer}
          onRequestChange={this.switchDrawer}
        >
          <MenuItem primaryText="CONCIERTOS" leftIcon={ <EventIcon /> } />
          <MenuItem primaryText="CLIENTES" leftIcon={ <PersonIcon /> } />
          <MenuItem primaryText="PROVEEDORES" leftIcon={ <AccountBoxIcon /> } />
        </Drawer>

        {/* OPTIONS MENU */}
        <Drawer
          docked={true}
          openSecondary={true}
          open={this.state.openOptions}
          onRequestChange={this.switchOptions}
          containerStyle={ {top:'64px'} }
        >
          <MenuItem primaryText="NUEVO" />
          <MenuItem primaryText="EDITAR"/>
          <MenuItem primaryText="ELIMINAR"/>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;
