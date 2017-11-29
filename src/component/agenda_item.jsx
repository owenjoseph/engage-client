import React from 'react';

class AgendaItem extends React.Component {
  render () {
    return(
      <section className = 'agenda-item-container'>
        <div className = 'container'>
          <div className = 'row'>
            <div className = 'comittee-image col-2'>
              <i className = 'fa fa-camera-retro'>foo</i>
            </div>

            <div className = 'agenda-title col-10'>
              {this.props.title}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default AgendaItem;
