{
  initComponent: function() {
    this.callParent();

    // Subscribe to Juggernaut events if it's available
    if (window.Juggernaut) {
      this.juggernaut = new Juggernaut;
      this.juggernaut.subscribe("channel1", Ext.bind(this.processJuggernautMessage, this));
    }
  },

  // Params:
  // * data.component - component id
  // * data.method - component method to call
  // * data.params - array of params for the call
  processJuggernautMessage: function(data) {
    // Prevent the sender to react on its own messages
    if (Ext.Ajax.extraParams.authenticity_token != data.authenticity_token) {
      var receivingComponent = Ext.getCmp(data.component);
      receivingComponent[data.method].apply(receivingComponent, data.params);
    }
  }
}